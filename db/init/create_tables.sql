CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS playlists (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS musicas (
    id SERIAL PRIMARY KEY,
    playlist_id INTEGER NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    artista VARCHAR(255) NOT NULL,
    capa_url VARCHAR(255),
    deezer_id VARCHAR(255) UNIQUE NOT NULL,
    preview_url TEXT, 
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS playlist_musicas (
    playlist_id INTEGER NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
    musica_id INTEGER NOT NULL REFERENCES musicas(id) ON DELETE CASCADE,
    PRIMARY KEY (playlist_id, musica_id)
);