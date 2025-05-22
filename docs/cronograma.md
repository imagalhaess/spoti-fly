
# Cronograma Técnico – Spoti-Fly

Organização por etapas (dias) para o desenvolvimento do projeto com base nos requisitos técnicos e integrações planejadas.

---

## Dia 1 – Estrutura Inicial do Projeto

- [x] Criar repositório GitHub
- [x] Criar pastas `frontend/`, `backend/`, `docs/`
- [x] Configurar Gitflow: `main`, `develop`, `feature/*`
- [x] Iniciar README técnico no projeto
- [x] Estruturar documentação: cronograma, rotas e arquitetura

---

## Dia 2 – Conexão com o Banco de Dados

- [x] Criar banco PostgreSQL local
- [x] Criar arquivo `.env` com `DATABASE_URL`
- [x] Criar `db.js` com pool de conexão
- [x] Testar conexão com mensagem de sucesso/erro
- [x] Criar rota GET `/api/playlists`
- [x] Criar estrutura de rotas e controllers
- [x] Testar com Insomnia

---

## Dia 3 – Criação de Playlists e Integração com Deezer

- [x] Criar rota POST `/api/playlists` para salvar playlists no banco
- [x] Criar tabela `musicas` com chave estrangeira `playlist_id`
- [x] Instalar `axios` para consumo de API externa
- [x] Criar rota POST `/api/playlists/:id/musicas`
- [x] Buscar música na API do Deezer e salvar no banco
- [x] Testar com Insomnia
- [x] Documentar funcionalidades implementadas

---

## Dia 4 – Listagem de Músicas

- [ ] Criar rota GET `/api/playlists/:id/musicas`
- [ ] Buscar músicas associadas a uma playlist no banco
- [ ] Testar com Insomnia
- [ ] Integrar frontend para exibir músicas por playlist
- [ ] Atualizar documentação e README

---

## Dia 5 – Autenticação e Funcionalidades Avançadas

- [ ] Implementar login com JWT
- [ ] Criar middleware de autenticação
- [ ] Proteger rotas sensíveis
- [ ] Criar funcionalidade de favoritos
- [ ] Criar rota de favoritos (GET e POST)
- [ ] Exibir músicas favoritas no frontend

---

## Docker e Ambiente

- [ ] Criar `Dockerfile` para frontend e backend
- [ ] Criar `docker-compose.yml` para orquestrar backend, frontend e banco
- [ ] Testar build completo com `docker-compose up`

---

## Testes Automatizados

- [ ] Instalar e configurar Jest
- [ ] Criar testes unitários para rota `/playlists`
- [ ] Criar teste de integração para POST + GET
- [ ] Validar cobertura mínima de 25%

---

Última atualização: 22/05/2025
