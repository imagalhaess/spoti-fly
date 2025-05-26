// src/index.js
const db = require("./config/db"); // Importa o pool do banco de dados
const app = require("./app"); // Importa o aplicativo Express
const PORT = process.env.PORT || 5000; // Define a porta do servidor

// Função assíncrona para iniciar o servidor
async function startServer() {
    try {
        // Testa a conexão com o banco de dados usando o pool
        // Vamos tentar obter um cliente do pool para verificar se a conexão funciona
        const client = await db.connect(); // Obtém um cliente do pool
        client.release(); // Libera o cliente de volta para o pool

        console.log('Conexão com o banco de dados estabelecida com sucesso!');

        // Inicia o servidor Express
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Falha ao iniciar o servidor: Erro de conexão com o banco de dados', error);

    }
}

// Chame a função para iniciar o servidor
startServer();