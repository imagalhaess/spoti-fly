
# Estrutura do Projeto – Spoti-Fly

Este documento descreve a estrutura de pastas, organização de arquivos e camadas utilizadas no projeto Spoti-Fly.

---

## Estrutura Geral de Pastas

---

## Raiz do projeto

```
spoti-fly/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── playlistController.js
│   │   │   └── usuarioController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── routes/
│   │   │   ├── playlist.routes.js
│   │   │   └── usuario.routes.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│   └── Dockerfile 
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   └── CriarPlaylist.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│   └── Dockerfile 
│
├── docker-compose.yml
├── docs/
│   ├── estrutura.md
│   ├── mapeamento-de-rotas.md
│   ├── cronograma.md
│   └── readme.md
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
  Componentes reutilizáveis (ex: Navbar, CardPlaylist, Header...).

- **`pages/`**  
  Páginas principais (Home, PlaylistDetalhes, Login...).

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
