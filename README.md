# Sobre o Projeto

Este projeto foi desenvolvido como desafio técnico para vaga de Desenvolvedora Pleno Fullstack. O objetivo foi aplicar boas práticas de Clean Code, autenticação segura, integração com serviços externos, testes e deploy local com Docker.

# Spoti-Fly

Spoti-Fly é uma plataforma web de gerenciamento de playlists e músicas, inspirada em sistemas de streaming.  
O projeto inclui frontend com React, backend com Node.js + Express, banco de dados PostgreSQL e integração com a API pública do Deezer.

---

## Funcionalidades

- Cadastro e login de usuários (com JWT)
- Criação de playlists
- Busca de músicas usando API do Deezer
- Adição de músicas à playlist
- Listagem de músicas por playlist
- Logout e proteção de rotas
- Integração completa entre backend, frontend e banco via Docker
- Testes automatizados (Jest) com cobertura ≥ 25%
- Dockerização completa com três containers: frontend, backend e banco de dados

---

## Tecnologias Utilizadas

### Backend

- Node.js + Express
- PostgreSQL + `pg`
- JWT para autenticação
- Bcrypt para senhas
- Axios para integração com Deezer

### Frontend

- React (com Vite)
- React Router DOM
- Axios

### Infra & DevTools

- Docker & Docker Compose
- Jest (testes unitários e de integração)
- Insomnia (testes de API)
- pgAdmin
- Git + GitHub (Gitflow)

---

## Como Rodar o Projeto

### Pré-requisitos

### Rodando com Docker (recomendado)

- Docker: https://www.docker.com/products/docker-desktop
- Docker Compose (já incluso no Docker Desktop)

### Rodando sem Docker (modo manual)

- Node.js (v18+): https://nodejs.org
- PostgreSQL 14+: https://www.postgresql.org/download/
- npm (já incluso com Node.js)

---

## VARIÁVEIS DE AMBIENTE `.env`

Crie um arquivo `.env` na pasta `/backend` com o seguinte conteúdo:

```env
DATABASE_URL=postgresql://postgres:1713@localhost:5432/spotifly
JWT_SECRET=sua_chave_secreta_segura
PORT=5000
```

E na pasta `/frontend`:

```env
VITE_API_URL=http://localhost:5000/api
```

> **Obs:** Se estiver usando Docker, não é necessário criar manualmente o banco nem alterar a porta.

---

## EXECUTANDO COM DOCKER

1. Clone o repositório:

```bash
git clone https://github.com/imagalhaess/spoti-fly.git
cd spoti-fly
```

2. Suba os serviços com Docker Compose:

```bash
docker compose up --build
```

3. Acesse:

- Frontend: (http://localhost:5173)
- Backend (API): (http://localhost:5000/api/playlists)
- PostgreSQL: porta `5432`, usuário `postgres`, senha `1713`

---

## EXECUTANDO SEM DOCKER (modo manual)

### Banco de Dados

1. Crie um banco PostgreSQL chamado `spotifly`
2. Crie manualmente as tabelas (código em `db/init/create_tables.sql`)

---

### Backend

```bash
cd backend
npm install
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## RODANDO OS TESTES

```bash
cd backend
npm test
```

Gera relatório de cobertura em `/coverage`.

---

## ENCERRAR SERVIÇOS DO DOCKER

```bash
docker compose down -v --remove-orphans
```

---

## Desenvolvido por

Isabela Magalhães  
2025
