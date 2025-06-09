require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // Importa a configuração do banco de dados
const playlistRoutes = require("./routes/playlistRoutes"); // Importa as rotas de playlists
const usuarioRoutes = require("./routes/usuarioRoutes"); // Importa as rotas de usuários

const app = express();

// Middleware: permite acessar o corpo do JSON das requisições
app.use(express.json());

// Middleware: permite chamadas entre domínios (frontend e backend)
app.use(cors());

// Todas as rotas de playlists e usuários começam com /api
app.use("/api", playlistRoutes);
app.use("/api", usuarioRoutes);

// Inicia o servidor na porta definida no arquivo .env ou 5000 por padrão
app.get("/", (req, res) => {
  res.send("Spotifly backend rodando...");
});

// Exporta a instância do app para ser usada no index.js e nos testes
module.exports = app;
