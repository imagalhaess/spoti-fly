module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/index.js", // Exclui o arquivo principal de inicialização do servidor da cobertura
    "!src/config/*.js", // Pode excluir arquivos de configuração específicos se não tiverem lógica
  ],
  setupFilesAfterEnv: [], // Aqui podemos adicionar arquivos para setup global, se necessário
  forceExit: true, // Garante que o Jest saia
  detectOpenHandles: true, // Detecta handles abertos
};
