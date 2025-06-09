// src/config/db.js
const { Pool } = require('pg');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // URL de conexão com o banco de dados
    max: 10, // Opcional: número máximo de clientes no pool
    idleTimeoutMillis: 30000, // Opcional: tempo em ms para um cliente ocioso ser fechado
    connectionTimeoutMillis: 2000, // Opcional: tempo em ms para conectar
});


module.exports = pool;