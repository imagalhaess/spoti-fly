const { Pool } = require('pg');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // URL de conexão com o banco de dados
});

// Testa a conexão com o banco de dados
pool.connect () 
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!')) 
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err)); 

module.exports = pool; // Exporta o pool para ser usado em outros arquivos  