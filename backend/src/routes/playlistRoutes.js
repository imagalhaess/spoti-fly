const express = require('express');
const router = express.Router();
const {
    createPlaylist,
    getPlaylists,
    adicionarMusica,
    getMusicasPorPlaylist,
    buscarMusicasDeezer
} = require('../controllers/playlistController');
const autenticarToken = require('../middleware/authMiddleware');

router.post('/playlists', autenticarToken, createPlaylist);
router.get('/playlists', autenticarToken, getPlaylists);
router.post('/playlists/:id/musicas', autenticarToken, adicionarMusica);
router.get('/playlists/:id/musicas', autenticarToken, getMusicasPorPlaylist);
router.get('/search', buscarMusicasDeezer);

module.exports = router;