# Plano de Ação por Dia – Spoti-Fly

Este cronograma detalha a distribuição do desenvolvimento ao longo dos 5 dias do desafio técnico.

---

## Dia 1 – Organização e Frontend Inicial

- [x] Criar repositório GitHub com estrutura de branches
- [x] Criar pastas `frontend/`, `backend/`, `docs/`, `docker/`
- [x] Iniciar projeto React com Vite
- [x] Instalar dependências iniciais
- [x] Estruturar pastas: `/components`, `/pages`, `/routes`, `/services`
- [x] Configurar React Router DOM
- [x] Criar páginas base: `Home`, `CriarPlaylist`

---

## Dia 2 – Backend com Node.js e PostgreSQL

- [ ] Iniciar projeto com `npm init` na pasta `backend`
- [ ] Instalar dependências: `express`, `pg`, `dotenv`, `nodemon`
- [ ] Criar estrutura de pastas: `/routes`, `/controllers`, `/models`, `/config`, `/database`
- [ ] Configurar conexão com banco PostgreSQL (usando `dotenv`)
- [ ] Criar primeiros endpoints da API: `GET` e `POST` para playlists

---

## Dia 3 – Relacionamentos e Integração API

- [ ] Criar entidade `Musica` e integrar com `Playlist`
- [ ] Criar rotas para adicionar/remover músicas
- [ ] Integrar frontend com backend via `axios`
- [ ] Exibir playlists reais na tela

---

## Dia 4 – Autenticação, Favoritos e Busca

- [ ] Implementar login com JWT (token)
- [ ] Proteger rotas da API
- [ ] Criar rota de favoritos e buscar músicas
- [ ] Exibir músicas favoritas e resultados no frontend

---

## Dia 5 – Docker, Testes e Entrega

- [ ] Criar `Dockerfile` para frontend e backend
- [ ] Criar `docker-compose.yml` para orquestrar tudo
- [ ] Criar testes com `Jest` para rotas do backend
- [ ] Finalizar documentação no README
- [ ] Fazer deploy ou gravação de vídeo demonstrativo (opcional)
