# Notes App — MERN CRUD Lab

## Candidate Details
- **Name:** Anirudh
- **Student ID:** 2026201058
- **GitHub Repository:** [link](https://github.com/anirudhb07/notes-app)

## Tech Stack
MongoDB, Express, React (Vite), Node.js

## Project Structure
```
notes-app/
|-- server/   # Express + Mongoose REST API
|-- client/   # Vite + React frontend
```

## Prerequisites
- Node.js (v18+)
- A local MongoDB daemon running on `mongodb://localhost:27017`

## Setup & Run

### 1. Start MongoDB
Make sure `mongod` is running locally (default port 27017).

### 2. Backend
```bash
cd notes-app/server
npm install
npm start
```
Server runs on http://localhost:5000

### 3. Frontend
In a new terminal:
```bash
cd notes-app/client
npm install
npm run dev
```
Client runs on http://localhost:5173

## API Endpoints
| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| POST   | /api/notes        | Create a new note        |
| GET    | /api/notes        | Get all notes (newest first) |
| DELETE | /api/notes/:id    | Delete a note by id      |

## Screenshots
See `screenshots/ui-preview.png` and `screenshots/delete-action.png`.
