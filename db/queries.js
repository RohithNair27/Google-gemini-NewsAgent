export const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  given_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  picture TEXT
)`;

export const CREATE_TOKENS_TABLE = `CREATE TABLE IF NOT EXISTS tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  encrypted_access_token TEXT,
  encrypted_refresh_token TEXT,
  FOREIGN KEY (user_id) REFERENCES users (id)
)`;

export const INSERT_USER_IN_USERS_TABLE = `INSERT INTO users(given_name,last_name,email,picture) VALUES (?,?,?,?)`;

export const INSERT_TOKEN = `INSERT INTO tokens(user_id,encrypted_access_token,encrypted_refresh_token) VALUES (?,?,?)`;
