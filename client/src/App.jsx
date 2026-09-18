import { useState, useEffect } from "react";
import axios from "axios";
import NoteCard from "./NoteCard.jsx";
import "./index.css";

const NOTES_ENDPOINT = "http://localhost:5000/api/notes";

function App() {
  const [noteList, setNoteList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  async function loadNotes() {
    try {
      const { data } = await axios.get(NOTES_ENDPOINT);
      setNoteList(data);
    } catch (err) {
      console.error("Could not load notes:", err.message);
    } finally {
      setIsFetching(false);
    }
  }

  async function createNote(event) {
    event.preventDefault();
    const trimmedTitle = formTitle.trim();
    const trimmedContent = formContent.trim();
    if (!trimmedTitle || !trimmedContent) return;

    try {
      const { data } = await axios.post(NOTES_ENDPOINT, {
        title: trimmedTitle,
        content: trimmedContent,
      });
      setNoteList((prev) => [data, ...prev]);
      setFormTitle("");
      setFormContent("");
    } catch (err) {
      console.error("Could not create note:", err.message);
    }
  }

  async function removeNote(noteId) {
    try {
      await axios.delete(`${NOTES_ENDPOINT}/${noteId}`);
      setNoteList((prev) => prev.filter((n) => n._id !== noteId));
    } catch (err) {
      console.error("Could not delete note:", err.message);
    }
  }

  function renderNoteList() {
    if (isFetching) return <p className="status-message">Loading notes...</p>;
    if (noteList.length === 0) {
      return <p className="status-message">No notes yet — add one above!</p>;
    }
    return (
      <div className="notes-list">
        {noteList.map((note) => (
          <NoteCard key={note._id} note={note} onRemove={removeNote} />
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Notes</h1>

      <form className="note-form" onSubmit={createNote}>
        <input
          type="text"
          placeholder="Title"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={formContent}
          onChange={(e) => setFormContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>

      {renderNoteList()}
    </div>
  );
}

export default App;
