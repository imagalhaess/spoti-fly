const db = require("../config/db");
const axios = require("axios");

// Busca músicas na API do Deezer com base em uma query
async function buscarMusicasDeezer(req, res) {
  const { q } = req.query;

  if (!q || q.trim() === "") {
    return res
      .status(400)
      .json({ error: 'Parâmetro de busca "q" é obrigatório.' });
  }

  try {
    const deezerResponse = await axios.get(
      `https://api.deezer.com/search?q=${encodeURIComponent(q)}`
    );
    res.status(200).json({ data: deezerResponse.data.data });
  } catch (error) {
    console.error("Erro ao buscar músicas no Deezer:", error.message);
    if (error.response) {
      console.error("Dados de erro do Deezer API:", error.response.data);
      res.status(error.response.status).json({
        error: "Erro na API do Deezer",
        details: error.response.data,
      });
    } else {
      res
        .status(500)
        .json({ error: "Erro interno do servidor ao buscar músicas." });
    }
  }
}

// Cria uma nova playlist
async function createPlaylist(req, res) {
  const { nome } = req.body;

  if (!nome || nome.trim() === "") {
    return res.status(400).json({ error: "Nome da playlist é obrigatório" });
  }

  try {
    const result = await db.query(
      "INSERT INTO playlists (nome) VALUES ($1) RETURNING *",
      [nome]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar playlist:", error);
    res.status(500).json({ error: "Erro ao criar playlist" });
  }
}

// Retorna todas as playlists -- ainda não implementado no frontend - sem page
async function getPlaylists(req, res) {
  try {
    const result = await db.query("SELECT * FROM playlists ORDER BY id");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar playlists:", error);
    res.status(500).json({ error: "Erro ao buscar playlists" });
  }
}

// Adiciona uma música à playlist (agora com preview de áudio!) -- adicionado em 27/05|18h50
async function adicionarMusica(req, res) {
  const playlistId = req.params.id;
  const { title, artistName, deezerId, coverUrl } = req.body;

  if (!title || !artistName || !deezerId) {
    return res
      .status(400)
      .json({
        error:
          "Dados da música (título, artista, ID do Deezer) são obrigatórios.",
      });
  }

  try {
    const existingMusic = await db.query(
      "SELECT * FROM musicas WHERE playlist_id = $1 AND deezer_id = $2",
      [playlistId, deezerId]
    );

    if (existingMusic.rows.length > 0) {
      return res
        .status(409)
        .json({ error: "Esta música já está nesta playlist." });
    }

    // Nova funcionalidade: buscar preview de áudio da música no Deezer
    const trackResponse = await axios.get(
      `https://api.deezer.com/track/${deezerId}`
    );
    const trackData = trackResponse.data;
    const previewUrl = trackData.preview || null;

    const result = await db.query(
      "INSERT INTO musicas (playlist_id, titulo, artista, capa_url, deezer_id, preview_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [playlistId, title, artistName, coverUrl || null, deezerId, previewUrl]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao adicionar música:", error);
    res.status(500).json({ error: "Erro ao adicionar música à playlist." });
  }
}

// Retorna todas as músicas de uma playlist -- implementado no frontend para incluir o preview de áudio
async function getMusicasPorPlaylist(req, res) {
  const playlistId = req.params.id;

  try {
    const result = await db.query(
      "SELECT * FROM musicas WHERE playlist_id = $1 ORDER BY id",
      [playlistId]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar músicas da playlist:", error);
    res.status(500).json({ error: "Erro ao buscar as músicas da playlist" });
  }
}

module.exports = {
  getPlaylists,
  createPlaylist,
  adicionarMusica,
  getMusicasPorPlaylist,
  buscarMusicasDeezer,
};
