const db = require('../config/db'); // Importa a configuração do banco de dados
const axios = require('axios'); // Importa o axios para fazer requisições HTTP


async function getPlaylists(req, res) {
  // Função para buscar todas as playlists do banco de dados
  
  try {
    // Conecta ao banco de dados e executa a consulta
    const result = await db.query('SELECT * FROM playlists ORDER BY id');
    res.status(200).json(result.rows);
    // Retorna o resultado da consulta como resposta
    // com status 200 (OK) e o conteúdo em formato JSON
  } 
  
  catch (error) {
    // Se ocorrer um erro, captura e retorna uma resposta com status 500 (Erro Interno do Servidor)
    console.error('Erro ao buscar playlists:', error);
    res.status(500).json({ error: 'Erro ao buscar playlists' }); 
  }
}

  async function createPlaylist(req, res) {
    // Função para criar uma nova playlist no banco de dados
    const { nome } = req.body; // Obtém o nome da playlist do corpo da requisição

    if (!nome || nome.trim() === '') {
      // Verifica se o nome da playlist é válido
      return res.status(400).json({ error: 'Nome da playlist é obrigatório' });
    }

    try {
      // Conecta ao banco de dados e executa a consulta
      const result = await db.query(
        'INSERT INTO playlists (nome) VALUES ($1) RETURNING *', // Insere a nova playlist
        [nome]
      );
      res.status(201).json(result.rows[0]); // Retorna a nova playlist criada
    } 
    
    catch (error) {
      console.error('Erro ao criar playlist:', error); // Captura o erro
      res.status(500).json({ error: 'Erro ao criar playlist' }); // Retorna erro pro front
    }
  }
  
  async function adicionarMusica(req, res) {
    // Função para adicionar uma música a uma playlist
    const playlistId = req.params.id; // Obtém os IDs da playlist e da música do corpo da requisição
    const { busca } = req.body; // Obtém a busca do corpo da requisição
    
    if (!busca || busca.trim() === '') {
      return res.status(400).json({ error: 'É necessário informar o nome da música!' });
    } 
    
    try {
      const resposta = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(busca)}`); // Faz uma requisição para a API do Deezer
      const primeiraMusica = resposta.data.data[0]; // Obtém os dados da resposta
      
      if (!primeiraMusica) {
        return res.status(404).json({ error: 'Nenhuma música encontrada no Deezer.' }); // Retorna erro se a música não for encontrada
      }

      const titulo = primeiraMusica.title; // Obtém o título da música
      const artista = primeiraMusica.artist.name; // Obtém o nome do artista
      const capa_url = primeiraMusica.album.cover_medium; // Obtém a URL da capa do álbum
      const deezer_id = primeiraMusica.id; // Obtém o ID da música no Deezer

      const result = await db.query(
        'INSERT INTO musicas (playlist_id, titulo, artista, capa_url, deezer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [playlistId, titulo, artista, capa_url, deezer_id]
    );

        res.status(201).json(result.rows[0]); // Retorna a nova música criada

      } catch (error) {
        console.error('Erro ao adicionar música:', error); // Captura o erro
        res.status(500).json({ error: 'Erro ao adicionar música' }); // Retorna erro pro front
      }
    }

    async function getMusicasPorPlaylist(req, res) {
      // Função para obter todas as músicas de uma playlist
      const playlistId = req.params.id; // Obtém o ID da playlist do corpo da requisição

      try {
        const result = await db.query(
          'SELECT * FROM musicas WHERE playlist_id = $1 ORDER BY id',
          [playlistId]
        );
        res.status(200).json(result.rows); // Retorna as músicas da playlist
      } catch (error) {
        console.error('Erro ao buscar músicas da playlist:', error); // Captura o erro
        res.status(500).json({ error: 'Erro ao buscar músicas da playlist' }); // Retorna erro pro front
      }
    }


  module.exports = { getPlaylists, createPlaylist, adicionarMusica, getMusicasPorPlaylist}; // Exporta a função getPlaylists para ser usada em outros arquivos
