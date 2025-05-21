# Mapeamento de Funcionalidades e Rotas – Spoti-Fly 

Este documento organiza as principais ações do usuário, suas rotas no frontend e os endpoints correspondentes no backend.

---

## Funcionalidades principais

| Ação do usuário            | Descrição |
|----------------------------|-----------|
| Ver playlists              | Listagem geral de playlists |
| Criar playlist             | Formulário para criar uma nova playlist |
| Ver detalhes da playlist   | Página com músicas de uma playlist |
| Adicionar música           | Inserir música em uma playlist |
| Remover música             | Deletar uma música da playlist |
| Reproduzir música          | Tocar uma música da playlist |
| Parar música               | Parar a reprodução atual |
| Buscar música              | Encontrar músicas por nome/artista |
| Favoritar música           | Marcar uma música como favorita |
| Compartilhar playlist      | Copiar link ou gerar embed |
| Login/Logout               | Entrar e sair da conta do usuário |

---

## Rotas do Frontend (React)

| Página                     | Rota                       |
|---------------------------|----------------------------|
| Página inicial            | `/playlists`              |
| Criar playlist            | `/criar`                  |
| Detalhes da playlist      | `/playlists/:id`          |
| Tocar música específica   | `/playlists/:id?play=x`   |
| Buscar músicas            | `/buscar?q=...`           |
| Ver favoritas             | `/favoritas`              |
| Login                     | `/login`                  |

---

## Endpoints da API (Node.js/Express)

| Ação                      | Método | Endpoint                                 |
|---------------------------|--------|------------------------------------------|
| Listar playlists          | GET    | `/api/playlists`                         |
| Criar nova playlist       | POST   | `/api/playlists`                         |
| Buscar playlist por ID    | GET    | `/api/playlists/:id`                     |
| Deletar playlist          | DELETE | `/api/playlists/:id`                     |
| Adicionar música          | POST   | `/api/playlists/:id/musicas`             |
| Remover música            | DELETE | `/api/playlists/:id/musicas/:musicaId`   |
| Buscar músicas            | GET    | `/api/musicas?query=...`                 |
| Reproduzir música         | GET    | `/api/musicas/:id/stream`                |
| Favoritar música          | POST   | `/api/musicas/:id/favoritar`             |
| Compartilhar playlist     | POST   | `/api/playlists/:id/compartilhar`        |
| Login                     | POST   | `/api/auth/login`                        |
| Ver perfil do usuário     | GET    | `/api/usuario/me`                        |

---

## Observações

- `:id` e `:musicaId` são parâmetros dinâmicos
- O backend pode aplicar autenticação JWT para rotas protegidas
- O frontend pode usar query params (`?play=` ou `?q=`) para funcionalidades pontuais

