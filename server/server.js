const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const notesRouter = require("./routes/noteRoutes");

const SERVER_PORT = process.env.PORT || 5000;

function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/api/notes", notesRouter);

  return app;
}

connectToDatabase();

const app = createApp();
app.listen(SERVER_PORT, () => {
  console.log(`Notes API listening on http://localhost:${SERVER_PORT}`);
});
