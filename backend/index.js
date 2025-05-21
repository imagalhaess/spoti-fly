require('dotenv').config();

const db = require('./src/config/db'); // Importa a configuração do banco de dados
const express = require('express'); // Importa o framework Express
const app = express(); // Cria uma instância do aplicativo Express
const PORT = process.env.PORT || 5000; // Define a porta do servidor, usando a variável de ambiente PORT ou 5000 como padrão

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Olá, Mundo! Backend está funcionando!');
}
);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});