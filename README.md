# Sobre o Projeto

Este projeto foi desenvolvido como desafio técnico para vaga de **Desenvolvedora Pleno Full-Stack**. O objetivo foi aplicar boas práticas de Clean Code, autenticação segura, integração com serviços externos, testes automatizados e deploy local via Docker.

# Spoti‑Fly

Spoti‑Fly é uma plataforma web de gerenciamento de playlists e músicas, inspirada em sistemas de streaming.
O projeto inclui:

* **Frontend:** React (Vite)
* **Backend:** Node.js + Express
* **Banco de dados:** PostgreSQL
* **Integração externa:** API pública do Deezer

---

## Funcionalidades

* Cadastro e login de usuários (JWT)
* Criação, edição e exclusão de playlists
* Busca de músicas usando a API do Deezer
* Adição e remoção de músicas em playlists
* Listagem de músicas por playlist
* Logout e proteção de rotas privadas
* Execução integrada de frontend, backend e banco via Docker
* Testes automatizados (Jest) com cobertura ≥ 25%
* Dockerização completa com três containers: frontend, backend e DB

---

## Tecnologias Utilizadas

**Backend**

* Node.js + Express
* PostgreSQL + `pg`
* JWT para autenticação
* Bcrypt para hash de senhas
* Axios para requisições à API do Deezer

**Frontend**

* React (Vite)
* React Router DOM
* Axios

**Infraestrutura & DevTools**

* Docker & Docker Compose
* Jest (testes unitários e de integração)
* Insomnia / Postman (testes de API)
* pgAdmin (administração do banco)
* Git + GitHub (Gitflow)

---

## Como Rodar o Projeto

### Pré-requisitos

* Git
* **Modo Docker (recomendado):** Docker Desktop (inclui Docker Compose)
* **Modo manual:** Node.js ≥ 18, npm, PostgreSQL ≥ 14

### 1. Clonar o repositório

```bash
git clone https://github.com/imagalhaess/spoti-fly.git
cd spoti-fly
```

### 2. Executando com Docker (recomendado)

1. *(opcional)* Crie um arquivo `.env` na raiz para sobrescrever padrões:

   ```env
   POSTGRES_PASSWORD=1713
   JWT_SECRET=minhaChaveSecreta
   ```
2. Suba os containers:

   ```bash
   docker compose up --build -d
   ```
3. Acesse no navegador:

   * Frontend: `http://localhost:5173`
   * API:      `http://localhost:5000/api`
   * Banco:   `localhost:5432` (usuário: `postgres`, senha: `1713`)

> Para parar e remover containers e volumes:
>
> ```bash
> docker compose down -v
> ```

### 3. Executando sem Docker (modo manual)

> **Crie e preencha cada `.env` conforme abaixo.**

#### 3.1 Banco de Dados

1. Instale e inicie o PostgreSQL localmente.
2. Crie um banco chamado `spotifly`.
3. Execute scripts de criação de tabelas:

   ```bash
   psql -U postgres -d spotifly -f db/init/create_tables.sql
   ```

#### 3.2 Backend

```bash
cd backend
cat > .env <<EOF
DATABASE_URL=postgresql://postgres:1713@localhost:5432/spotifly
JWT_SECRET=minhaChaveSecreta
PORT=5000
EOF
npm install
npm run dev
```

* A API ficará disponível em `http://localhost:5000/api`.

#### 3.3 Frontend

```bash
cd frontend
cat > .env <<EOF
VITE_API_URL=http://localhost:5000/api
EOF
npm install
npm run dev
```

* O frontend estará em `http://localhost:5173`.

---

## Variáveis de Ambiente

Se estiver usando Docker, o `.env` é carregado automaticamente pelo Compose. Para modo manual, crie:

* **backend/.env**

  ```env
  DATABASE_URL=postgresql://postgres:1713@localhost:5432/spotifly
  JWT_SECRET=minhaChaveSecreta
  PORT=5000
  ```

* **frontend/.env**

  ```env
  VITE_API_URL=http://localhost:5000/api
  ```

---

## Rodando os Testes

```bash
cd backend
npm test
```

* Relatório de cobertura gerado em `backend/coverage/`.

---

## Encerrar Serviços do Docker

```bash
docker compose down -v --remove-orphans
```

---

## Desenvolvido por

Isabela Magalhães
2025
