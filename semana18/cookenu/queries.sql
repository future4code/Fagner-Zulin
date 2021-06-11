CREATE TABLE cookenu_user (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cookenu_recipes (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    creator_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES cookenu_user(id)
);

CREATE TABLE cookenu_followers (
	follower_id VARCHAR(255) NOT NULL,
    followed_id VARCHAR(255) NOT NULL,
    PRIMARY KEY(follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES cookenu_user(id),
    FOREIGN KEY (followed_id) REFERENCES cookenu_user(id)
);