
# Spoti-Fly

Spoti-Fly é uma plataforma web de gerenciamento de playlists e músicas, inspirada em sistemas de streaming.  
O projeto inclui frontend com React, backend com Node.js + Express, banco de dados PostgreSQL e integração com a API pública do Deezer.

---

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv
- axios

### Frontend
- React (com Vite)
- React Router DOM
- Axios

### DevTools
- Insomnia (testes de API)
- Git + GitHub (Gitflow)
- pgAdmin (administração do banco)
- Docker (em breve)
- Jest (em breve)

---

## Estrutura de Pastas

```
spoti-fly/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── routes/
│   └── main.jsx
├── docs/
│   ├── estrutura.md
│   ├── cronograma.md
│   └── mapeamento-de-rotas.md
└── README.md
```

---

## Como Rodar o Projeto

### Pré-requisitos
- Node.js
- PostgreSQL
- npm

### Backend

```bash
cd backend
npm install
npm run dev
```

Configure o `.env`:

```
DATABASE_URL=postgres://usuario:senha@localhost:5432/spotifly
PORT=5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## API – Rotas Implementadas

### Playlists

| Método | Rota                | Descrição                         |
|--------|---------------------|-----------------------------------|
| GET    | `/api/playlists`    | Lista todas as playlists          |
| POST   | `/api/playlists`    | Cria uma nova playlist            |

### Músicas

| Método | Rota                             | Descrição                            |
|--------|----------------------------------|----------------------------------------|
| POST   | `/api/playlists/:id/musicas`     | Busca uma música no Deezer e adiciona à playlist |

---

## Status Atual

- [x] Conexão com PostgreSQL via `pg`
- [x] Rota de listagem e criação de playlists
- [x] Integração com API Deezer para adicionar músicas
- [x] Estrutura de pastas com controllers, routes e config
- [x] Documentação técnica (`/docs`)
- [ ] Listar músicas da playlist
- [ ] Autenticação com JWT
- [ ] Docker e testes

---

## Desenvolvido por

Isabela Magalhães  
Mentoria @ Synapse.AI  
2025 
