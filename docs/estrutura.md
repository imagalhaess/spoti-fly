# Estrutura do Projeto – Spoti-Fly

Este documento descreve a estrutura de pastas, organização de arquivos e camadas utilizadas no projeto Spoti-Fly.

---

## Estrutura Geral de Pastas

---

## Raiz do projeto

```
spoti-fly/
├── backend/
│   ├── src/
│   │   ├── __tests__/      # Para testes de integração
│   │   │   │  ├── integration/
│   │   │   │  ├── auth.test.js
│   │   │   └── playlist.test.js
│   │   │   │   └──
│   │   │   └── unit/       # Para testes unitários
│   │   │   │   └── emailValido.test.js
│   │   ├── config/
│   │   │   └── db.js          # Configuração do banco de dados
│   │   ├── controllers/
│   │   │   ├── playlistController.js
│   │   │   └── usuarioController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js # Para autenticação JWT
│   │   ├── routes/
│   │   │   ├── playlist.routes.js
│   │   │   └── usuario.routes.js
│   │   ├── app.js             # Módulo Express principal (exporta o 'app')
│   │   └── index.js           # Ponto de entrada do servidor (inicia o 'app' e DB)
│   ├── .env                   # Variáveis de ambiente para desenvolvimento
│   ├── .env.test              # Variáveis de ambiente para testes
│   ├── .gitignore
│   ├── Dockerfile             # Dockerfile para o backend
│   ├── jest.config.js         # Configuração do Jest
│   ├── package.json           # Dependências e scripts do backend
│   └── package-lock.json      # Bloqueio de dependências do backend
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # Componentes reutilizáveis
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── CriarPlaylist.jsx
│   │   │   └── PlaylistDetalhes.jsx # Página que exibe as músicas
│   │   ├── services/
│   │   │   └── api.js         # Configuração do Axios/Fetch para APIs
│   │   ├── App.jsx            # Componente principal da aplicação
│   │   └── main.jsx           # Ponto de entrada do React/Vite
│   ├── .env                   # Variáveis de ambiente para desenvolvimento (frontend)
│   ├── .env.local             # Variáveis de ambiente locais (frontend)
│   ├── .gitignore
│   ├── Dockerfile             # Dockerfile para o frontend
│   ├── index.html             # HTML principal do frontend
│   ├── nginx.conf             # Configuração Nginx para servir o frontend
│   ├── package.json           # Dependências e scripts do frontend
│   └── package-lock.json      # Bloqueio de dependências do frontend
│
├── .gitignore                 # .gitignore global para o projeto
├── docker-compose.yml         # Orquestração de serviços Docker
├── docs/                      # Documentação do projeto
│   ├── estrutura.md
│   ├── mapeamento-de-rotas.md
│   ├── cronograma.md
│   └── readme.md
└── README.md
```

---

## Backend

- **`src/config/db.js`**  
    Configuração da conexão com o banco de dados PostgreSQL.

- **`src/controllers/`**  
    Contém a lógica das rotas (`GET`, `POST`, etc). Ex: `createPlaylist`, `adicionarMusica`.

- **`src/routes/`**  
    Define os caminhos das rotas e conecta com os controllers.

- **`index.js`**  
    Ponto de entrada do backend. Configura express, rotas e porta do servidor.

- **`Dockerfile`**
  Arquivo de receita para construir a imagem Docker do backend, empacotando o ambiente Node.js e as dependências.

---

## Frontend

- **`components/`**  
    Componentes reutilizáveis

- **`pages/`**  
    Páginas principais

- **`services/`**  
    Comunicação com a API (`axios`, chamadas externas).

- **`App.jsx` + `main.jsx`**  
    Estrutura principal da aplicação React (configuração de rotas, layout).

- **`Dockerfile`**
  Arquivo de receita para construir a imagem Docker do frontend, criando os arquivos estáticos e utilizando Nginx para servi-los.

---

## Docker

- **`docker-compose.yml`**
  Arquivo de orquestração que define e executa os múltiplos serviços (backend, frontend e banco de dados PostgreSQL) em contêineres Docker, gerenciando suas redes e volumes.

---

## Documentação

- **`/docs/`**  
    Contém arquivos auxiliares com cronograma, mapeamento de rotas e estrutura técnica.

- **`README.md`**  
    Documentação principal do projeto (descrição, instalação, uso, rotas).

---
