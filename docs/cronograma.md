
# Cronograma Técnico – Spoti-Fly

Planejamento e controle das entregas de backend no desafio técnico.

---

### Dia 1 – Setup do Projeto

- Estrutura inicial: frontend/, backend/, docker/
- Configuração do backend com Node.js, Express, dotenv, nodemon
- Projeto versionado com GitHub e Gitflow
- README inicial criado

---

### Dia 2 – Playlists

- Criada tabela `playlists`
- Rota GET /api/playlists – listar playlists
- Rota POST /api/playlists – criar nova playlist
- Testes com Insomnia

---

### Dia 3 – Integração com API do Deezer

- Criada tabela `musicas`
- Rota POST /api/playlists/:id/musicas – busca música por nome e salva no banco
- Testes e tratamento de erro
- Documentação atualizada

---

### Dia 4 (Parte 1) – Listagem de músicas por playlist

- Rota GET /api/playlists/:id/musicas
- Listagem completa das músicas vinculadas a uma playlist
- Atualização de mapeamento de rotas e estrutura

---

### Dia 4 (Parte 2) – Autenticação

- Criada tabela `usuarios`
- Criptografia de senha com bcrypt
- Rota POST /api/usuarios/register – registro de usuário com geração de token JWT
- Rota POST /api/usuarios/login – login e geração de token
- Middleware de autenticação com JWT
- Proteção de rotas
- Testes e resposta com token
- Documentação técnica salva

---

### Dia 5  – Finalização do Frontend, Dockerização e Orquestração

- Criação das páginas home, cadastro, login, cria playlist e adicionar música
- Criação da função global api.js com axios configurado com baseURL
- Criação da navegação básica (React Router)
- Criação de Dockerfile para backend e frontend
- Criação de docker-compose.yml com PostgreSQL
- Validação de funcionamento de todos os serviços juntos


---

### Dia 6  – Testes Automatizados e README.md final

- Instalação e configuração de Jest
- Criação de testes unitários e de integração (GET, POST)
- Garantir cobertura de testes acima de 25%
- README principal com instruções de instalação, execução e APIs
- Prints da interface funcionando
- Tecnologias usadas e decisões técnicas

