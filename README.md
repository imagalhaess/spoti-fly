# 🎵 Spoti-Fly

<div align="center">

**Plataforma web moderna de gerenciamento de playlists e músicas**

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)](https://spoti-fly.vercel.app)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

[🚀 Demo ao Vivo](https://spoti-fly.vercel.app) • [📖 Documentação](#-funcionalidades) • [🎨 Design](#-design-system)

</div>

---

## 📋 Sobre o Projeto

Spoti-Fly é uma aplicação fullstack desenvolvida para gerenciamento de playlists musicais, com integração à API do Deezer para busca de músicas. O projeto demonstra boas práticas de desenvolvimento, arquitetura moderna e design profissional.

**Desenvolvido como desafio técnico para vaga de Desenvolvedora Pleno Full-Stack**, aplicando:
- ✅ Clean Code e padrões de projeto
- ✅ Autenticação segura com JWT
- ✅ Integração com APIs externas
- ✅ Testes automatizados
- ✅ Containerização com Docker
- ✅ Deploy em produção

---

## 🌐 Deploy em Produção

### 🎨 Interface (Frontend)
**🔗 https://spoti-fly.vercel.app**

A interface está hospedada no **Vercel** com deploy automático a cada push no GitHub.

### 🔌 API (Backend)
Para rodar o backend localmente ou fazer deploy, consulte o [Guia de Deploy](#-guia-de-deploy).

---

## ✨ Funcionalidades

### 🔐 Autenticação
- Cadastro de usuários com validação
- Login seguro com JWT
- Proteção de rotas privadas
- Hash de senhas com Bcrypt

### 🎵 Gerenciamento de Playlists
- Criar, visualizar e organizar playlists
- Interface intuitiva e responsiva
- Estados vazios ilustrados

### 🔍 Busca de Músicas
- Integração com API do Deezer
- Busca em tempo real
- Preview de músicas (quando disponível)
- Capas de álbum e informações detalhadas

### 🎨 Interface Moderna
- Design profissional e responsivo
- Paleta de cores única
- Animações suaves
- Ícones SVG personalizados
- Dark mode

---

## 🎨 Design System

A interface foi desenvolvida com uma identidade visual própria, baseada em uma paleta moderna e vibrante:

### Paleta de Cores

```
🔵 Turquesa/Cyan    #4ECDC4  (Primária)
🔴 Coral/Vermelho   #FF6B6B  (Secundária)
⚫ Cinza Escuro      #2C3E50  (Texto)
⚪ Cinza Claro       #B8C5D6  (Texto secundário)
🌑 Fundo Escuro     #1A1F2E  (Background)
```

### Componentes Reutilizáveis
- **Navbar** - Barra de navegação com logo animado
- **Button** - 4 variantes estilizadas
- **Input** - Campos com ícones SVG
- **Card** - Cards para playlists com hover effects

---

## 🛠️ Tecnologias Utilizadas

### Frontend
```
⚛️  React 19.1 (Vite)
🚀  React Router DOM 7.6
📡  Axios 1.9
🎨  CSS3 (Custom Design System)
```

### Backend
```
🟢  Node.js 18+ & Express
🐘  PostgreSQL 14
🔐  JWT & Bcrypt
📡  Axios (Integração Deezer)
```

### DevOps & Ferramentas
```
🐳  Docker & Docker Compose
🧪  Jest (Testes)
📊  pgAdmin
🔧  Git & GitHub
☁️  Vercel (Deploy Frontend)
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Git** instalado
- **Node.js 18+** e npm
- **PostgreSQL 14+** (ou usar Docker)
- **Docker Desktop** (opcional, mas recomendado)

### 📦 Instalação Rápida

#### Opção 1: Com Docker (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/imagalhaess/spoti-fly.git
cd spoti-fly

# 2. Inicie os containers
docker compose up --build -d

# 3. Acesse no navegador
# Frontend: http://localhost:5173
# API: http://localhost:5000/api
```

#### Opção 2: Sem Docker (Manual)

**Backend:**
```bash
cd backend

# Criar arquivo .env
echo "DATABASE_URL=postgresql://postgres:1713@localhost:5432/spotifly
JWT_SECRET=KLt84mc9NdoDgsWjao7zE4Wpz4usGDwq
PORT=5000" > .env

npm install
npm run dev
```

**Frontend:**
```bash
cd frontend

# Criar arquivo .env
echo "VITE_API_URL=http://localhost:5000/api" > .env

npm install
npm run dev
```

---

## 🧪 Testes

```bash
cd backend
npm test

# Ver cobertura
npm run test:coverage
```

**Cobertura:** ≥ 25% (conforme requisitos)

---

## 📦 Guia de Deploy

### Frontend (Vercel)

O frontend está configurado para deploy automático no Vercel:

1. Conecte seu repositório ao Vercel
2. Configure:
   - **Framework:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy automático a cada push!

### Backend (Render/Railway)

Para deploy do backend, consulte o arquivo [`DEPLOY.md`](./DEPLOY.md) com guia completo.

**Serviços Gratuitos Recomendados:**
- **Backend:** Render.com ou Railway
- **Banco de Dados:** Neon.tech ou Supabase

---

## 📁 Estrutura do Projeto

```
spoti-fly/
├── frontend/                # Aplicação React
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   │   ├── Navbar.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Logo.jsx
│   │   ├── pages/          # Páginas da aplicação
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── CriarPlaylist.jsx
│   │   │   ├── PlaylistDetalhes.jsx
│   │   │   └── AdicionarMusica.jsx
│   │   ├── services/       # Configuração de API
│   │   └── index.css       # Design System global
│   └── package.json
│
├── backend/                 # API Node.js
│   ├── src/
│   │   ├── controllers/    # Lógica de negócio
│   │   ├── middleware/     # Autenticação & validação
│   │   ├── routes/         # Rotas da API
│   │   └── server.js       # Servidor Express
│   └── package.json
│
├── db/                      # Scripts SQL
│   └── init/
│       └── create_tables.sql
│
├── docker-compose.yml       # Orquestração Docker
├── DEPLOY.md               # Guia de deploy em produção
└── README.md               # Este arquivo
```

---

## 🔒 Segurança

- ✅ Senhas com hash bcrypt
- ✅ Autenticação JWT
- ✅ Validação de inputs
- ✅ Proteção contra SQL injection (queries parametrizadas)
- ✅ CORS configurado
- ✅ Variáveis de ambiente para secrets

---

## 📈 Roadmap Futuro

- [ ] Edição e exclusão de playlists
- [ ] Remoção de músicas das playlists
- [ ] Compartilhamento de playlists
- [ ] Player de música integrado
- [ ] Modo claro (light mode)
- [ ] Favoritos e histórico
- [ ] Testes E2E com Cypress

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

---

## 👩‍💻 Desenvolvido por

**Isabela Magalhães**  
Desenvolvedora Full-Stack

[![GitHub](https://img.shields.io/badge/GitHub-imagalhaess-181717?style=for-the-badge&logo=github)](https://github.com/imagalhaess)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/seu-perfil)

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Feito com 💙 e muito ☕

2025

</div>
