const express = require('express');
const router = express.Router();
const { createPlaylist, getPlaylists, adicionarMusica, getMusicasPorPlaylist } = require('../controllers/playlistController');

router.post('/playlists', createPlaylist); // Define a rota para criar playlists 
router.get('/playlists', getPlaylists); // Define a rota para obter playlists
router.post('/playlists/:id/musicas', adicionarMusica); // Define a rota para adicionar músicas
router.get('/playlists/:id/musicas', getMusicasPorPlaylist); // Define a rota para obter músicas de uma playlist

module.exports = router; // Exporta o roteador para ser usado no arquivo principal
// do servidor