import { DBConnection } from "./data/DBConnection";

class Migrates extends DBConnection {
  public static migrate = () => {
    DBConnection.knexConnection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS labook_users(
          id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
  
        CREATE TABLE IF NOT EXISTS labook_posts(
          id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
          );

        CREATE TABLE IF NOT EXISTS labook_friends (
          user_id VARCHAR(255) NOT NULL,
            friend_id VARCHAR(255) NOT NULL,
            PRIMARY KEY(user_id, friend_id),
            FOREIGN KEY (friend_id) REFERENCES labook_users(id),
            FOREIGN KEY (user_id) REFERENCES labook_users(id)
        );

        CREATE TABLE IF NOT EXISTS labook_likes (
          user_id VARCHAR(255) NOT NULL,
            post_id VARCHAR(255) NOT NULL,
            PRIMARY KEY(user_id, post_id),
            FOREIGN KEY (post_id) REFERENCES labook_posts(id),
            FOREIGN KEY (user_id) REFERENCES labook_users(id)
        );

        CREATE TABLE IF NOT EXISTS labook_comments (
          id VARCHAR(255) PRIMARY KEY,
            post_id VARCHAR(255) NOT NULL,
            creator_id VARCHAR(255) NOT NULL,
            comment	TEXT NOT NULL,
            FOREIGN KEY (post_id) REFERENCES labook_posts(id),
            FOREIGN KEY (creator_id) REFERENCES labook_users(id)
        );
    `
      )
      .then((value) => {
        console.log(value);
        process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  };
}

Migrates.migrate();
