const db = require('../config/db'); // Importa a configuração do banco de dados
const axios = require('axios');     // Importa o axios para fazer requisições HTTP

// Função para buscar músicas no Deezer
async function buscarMusicasDeezer(req, res) {
    const { q } = req.query; // Pega o termo de busca da query string (ex: /search?q=termo)

    if (!q || q.trim() === '') {
        return res.status(400).json({ error: 'Parâmetro de busca "q" é obrigatório.' });
    }

    try {
        const deezerResponse = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`);

        // O Deezer retorna os resultados em deezerResponse.data.data
        // Queremos retornar exatamente isso para o frontend
        res.status(200).json({ data: deezerResponse.data.data });

    } catch (error) {
        console.error('Erro ao buscar músicas no Deezer:', error.message);
        if (error.response) {
            // Se o Deezer API respondeu com um erro
            console.error('Dados de erro do Deezer API:', error.response.data);
            res.status(error.response.status).json({
                error: 'Erro na API do Deezer',
                details: error.response.data
            });
        } else {
            // Erro de rede ou outro erro antes de a requisição ser feita
            res.status(500).json({ error: 'Erro interno do servidor ao buscar músicas.' });
        }
    }
}


async function createPlaylist(req, res) {
    const { nome } = req.body;

    if (!nome || nome.trim() === '') {
        return res.status(400).json({ error: 'Nome da playlist é obrigatório' });
    }

    try {
        const result = await db.query(
            'INSERT INTO playlists (nome) VALUES ($1) RETURNING *',
            [nome]
        );
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Erro ao criar playlist:', error);
        res.status(500).json({ error: 'Erro ao criar playlist' });
    }
}


async function getPlaylists(req, res) {
    try {
        const result = await db.query('SELECT * FROM playlists ORDER BY id');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Erro ao buscar playlists:', error);
        res.status(500).json({ error: 'Erro ao buscar playlists' });
    }
}


async function adicionarMusica(req, res) {
    const playlistId = req.params.id;
    // O frontend agora envia os dados da música diretamente
    const { title, artistName, deezerId, coverUrl } = req.body; // Adicione coverUrl aqui se for usar

    if (!title || !artistName || !deezerId) {
        return res.status(400).json({ error: 'Dados da música (título, artista, ID do Deezer) são obrigatórios.' });
    }

    try {
        // Primeiro, verifique se a música já existe na playlist
        const existingMusic = await db.query(
            'SELECT * FROM musicas WHERE playlist_id = $1 AND deezer_id = $2',
            [playlistId, deezerId]
        );

        if (existingMusic.rows.length > 0) {
            // Retorna um status 409 Conflict se a música já estiver na playlist
            return res.status(409).json({ error: 'Esta música já está nesta playlist.' });
        }

        // Se não existir, insere a música
        const result = await db.query(
            'INSERT INTO musicas (playlist_id, titulo, artista, capa_url, deezer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [playlistId, title, artistName, coverUrl || null, deezerId] // capa_url pode ser null se não for enviada
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error('Erro ao adicionar música:', error);
        res.status(500).json({ error: 'Erro ao adicionar música à playlist.' });
    }
}


async function getMusicasPorPlaylist(req, res) {
    const playlistId = req.params.id;
    try {
        const result = await db.query(
            'SELECT * FROM musicas WHERE playlist_id = $1 ORDER BY id',
            [playlistId]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar músicas da playlist:', error);
        res.status(500).json({ error: 'Erro ao buscar as músicas da playlist' });
    }
}


module.exports = {
    getPlaylists,
    createPlaylist,
    adicionarMusica,
    getMusicasPorPlaylist,
    buscarMusicasDeezer 
};