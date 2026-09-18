const mongoose = require("mongoose");

const DB_URI = "mongodb://localhost:27017/notes_db";

function connectToDatabase() {
  mongoose
    .connect(DB_URI)
    .then(() => console.log(`Connected to MongoDB at ${DB_URI}`))
    .catch((err) => console.error(`Could not connect to MongoDB: ${err.message}`));
}

module.exports = connectToDatabase;
