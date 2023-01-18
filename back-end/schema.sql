DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    nascimento TEXT NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE posts (
    id_posts INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    tempo_preparo INTEGER NOT NULL,
    porcoes INTEGER NOT NULL,
    ingredientes TEXT NOT NULL,
    modo_preparo TEXT NOT NULL,
    id_user INTEGER,
    FOREIGN KEY(id_user) REFERENCES users(id_user)
);