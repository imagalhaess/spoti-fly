const express = require('express');
const router = express.Router();
const { getPlaylists, createPlaylist, adicionarMusica } = require('../controllers/playlistController');

router.get('/playlists', getPlaylists); // Define a rota para obter playlists
router.post('/playlists', createPlaylist); // Define a rota para criar playlists 
router.post('/playlists/:id/musicas', adicionarMusica); // Define a rota para adicionar músicas

module.exports = router; // Exporta o roteador para ser usado no arquivo principal
// do servidor