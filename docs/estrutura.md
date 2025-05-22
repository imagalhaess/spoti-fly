
# Estrutura do Projeto – Spoti-Fly

Este documento descreve a estrutura de pastas, organização de arquivos e camadas utilizadas no projeto Spoti-Fly.

---

## Estrutura Geral de Pastas

```
spoti-fly/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── playlistController.js
│   │   ├── routes/
│   │   │   └── playlist.routes.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── estrutura.md
│   ├── cronograma.md
│   └── mapeamento-de-rotas.md
│
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

---

## Frontend

- **`components/`**  
  Componentes reutilizáveis (ex: CardPlaylist, Header...).

- **`pages/`**  
  Páginas principais (Home, PlaylistDetalhes, Login...).

- **`services/`**  
  Comunicação com a API (`axios`, chamadas externas).

- **`routes/`**  
  Definição das rotas do frontend (usando React Router DOM).

- **`main.jsx` + `App.jsx`**  
  Estrutura principal da aplicação React (configuração de rotas, layout).

---

## Documentação

- **`/docs/`**  
  Contém arquivos auxiliares com cronograma, mapeamento de rotas e estrutura técnica.

- **`README.md`**  
  Documentação principal do projeto (descrição, instalação, uso, rotas).

---

Última atualização: 22/05/2025
