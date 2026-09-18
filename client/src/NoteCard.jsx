function NoteCard({ note, onRemove }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <span className="note-date">
        {new Date(note.createdAt).toLocaleString()}
      </span>
      <button className="delete-btn" onClick={() => onRemove(note._id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteCard;
