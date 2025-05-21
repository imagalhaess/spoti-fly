const express = require('express');
const router = express.Router();
const { getPlaylists } = require('../controllers/playlistController');

router.get('/playlists', getPlaylists); // Define a rota para obter playlists
// e associa a função getPlaylists do controlador

module.exports = router; // Exporta o roteador para ser usado no arquivo principal
// do servidor