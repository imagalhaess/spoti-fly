
# Mapeamento de Rotas – Spoti-Fly

Documentação das rotas da API criadas até o momento no backend do projeto Spoti-Fly.

---

## Playlists

### `GET /api/playlists`
Lista todas as playlists do usuário autenticado.

### `POST /api/playlists`
Cria uma nova playlist.

### `GET /api/playlists/:id/musicas`
Lista todas as músicas de uma playlist específica.

### `POST /api/playlists/:id/musicas`
Busca uma música via Deezer e adiciona à playlist.

---

## Usuários

### `POST /api/usuarios/register`
Cadastra novo usuário, retorna token JWT.

### `POST /api/usuarios/login`
Realiza login, valida senha e retorna token JWT.

---

## Autenticação (JWT)

- As rotas de playlists e músicas exigem token de autenticação.
- Token deve ser passado no header:
  ```
  Authorization: Bearer SEU_TOKEN
  ```

---

## Frontend (Telas)

| Página             | Caminho               | Função                                 |
|--------------------|------------------------|----------------------------------------|
| Registro           | `/register`            | Formulário para criação de conta       |
| Login              | `/login`               | Acesso com e-mail e senha              |
| Home               | `/`                    | Lista de playlists + botão "criar"     |
| Criar Playlist     | `/nova-playlist`       | Formulário para nova playlist          |
| Adicionar Música   | `/playlists/:id/add`   | Busca e adiciona música via Deezer     |

---
