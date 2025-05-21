const db = require('../config/db'); // Importa a configuração do banco de dados

async function getPlaylists(req, res) {
  // Função para buscar todas as playlists do banco de dados
  // e retornar como resposta em formato JSON
  try {
    // Conecta ao banco de dados e executa a consulta
    const result = await db.query('SELECT * FROM playlists ORDER BY id');
    res.status(200).json(result.rows);
    // Retorna o resultado da consulta como resposta
    // com status 200 (OK) e o conteúdo em formato JSON
  } catch (error) {
    // Se ocorrer um erro durante a consulta, captura o erro
    // e retorna uma resposta com status 500 (Erro Interno do Servidor)
    console.error('Erro ao buscar playlists:', error);
    res.status(500).json({ error: 'Erro ao buscar playlists' }); 
  }
  }

  module.exports = { getPlaylists }; // Exporta a função getPlaylists para ser usada em outros arquivos
