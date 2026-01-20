import sqlite3 from "sqlite3";

export const db = new sqlite3.Database(
  "./NewsAgent.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
  },
);
