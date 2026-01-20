import { db } from "./database.js";
import {
  CREATE_USERS_TABLE,
  CREATE_TOKENS_TABLE,
  INSERT_USER_IN_USERS_TABLE,
  INSERT_TOKEN,
} from "./queries.js";

export function InitializeDatabase() {
  db.serialize(() => {
    db.run(CREATE_USERS_TABLE);
    db.run(CREATE_TOKENS_TABLE);
  });
  console.log("created");
}

export function INSERT_USER(first_name, last_name, email, picture_url) {
  db.run(
    INSERT_USER_IN_USERS_TABLE,
    [first_name, last_name, email, picture_url],
    (err) => {
      if (err) return console.error(err.message);
    },
  );
}

export function INSERT_USER_TOKEN(
  encrypted_access_token,
  encrypted_refresh_token,
) {
  db.run(
    INSERT_TOKEN,
    [encrypted_access_token, encrypted_refresh_token],
    (err) => {
      if (err) return console.error(err.message);
    },
  );
}
