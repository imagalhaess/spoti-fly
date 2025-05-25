require('dotenv').config();

const db = require('./src/config/db'); // Importa a configuração do banco de dados
const express = require('express'); // Importa o framework Express
const cors = require('cors');
const app = express(); // Cria uma instância do aplicativo Express
const PORT = process.env.PORT || 5000; // Define a porta do servidor, usando a variável de ambiente PORT ou 5000 como padrão
const playlistRoutes = require('./src/routes/playlistRoutes'); // Importa as rotas de playlists
const usuarioRoutes = require('./src/routes/usuarioRoutes'); // Importa as rotas de usuários

app.use(cors()); // HABILITA CORS
app.use(express.json()); 
app.use('/api', playlistRoutes); // Configura o middleware para analisar o corpo das requisições como JSON e usa as rotas de playlists
app.use('/api', usuarioRoutes); // Configura o middleware para usar as rotas de usuários

app.get('/', (req, res) => {
  res.send('Spotifly backend rodando...');
}
);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});