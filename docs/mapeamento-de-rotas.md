
# Mapeamento de Rotas – Spoti-Fly

Documentação das rotas da API criadas até o momento no backend do projeto Spoti-Fly.

---

## Playlists

### GET /api/playlists

**Descrição:**  
Lista todas as playlists cadastradas no banco de dados.

**Resposta esperada:**

```json
[
  {
    "id": 1,
    "nome": "Favoritas",
    "criado_em": "2025-05-21T22:10:45.000Z"
  }
]
```

---

### POST /api/playlists

**Descrição:**  
Cria uma nova playlist com o nome enviado no corpo da requisição.

**Body esperado:**

```json
{
  "nome": "Minhas Músicas"
}
```

**Resposta esperada:**

```json
{
  "id": 2,
  "nome": "Minhas Músicas",
  "criado_em": "2025-05-22T18:42:00.000Z"
}
```

---

## Músicas

### POST /api/playlists/:id/musicas

**Descrição:**  
Busca uma música na API do Deezer usando o termo enviado no corpo da requisição e a adiciona à playlist correspondente (`:id`).

**Body esperado:**

```json
{
  "busca": "Shape of You"
}
```

**Resposta esperada:**

```json
{
  "id": 7,
  "playlist_id": 2,
  "titulo": "Shape of You",
  "artista": "Ed Sheeran",
  "capa_url": "https://...",
  "deezer_id": 3135556,
  "criado_em": "2025-05-22T18:50:00.000Z"
}
```

---

## Rotas planejadas

- `GET /api/playlists/:id/musicas` – Listar todas as músicas de uma playlist
- `POST /api/auth/login` – Autenticação com JWT
- `POST /api/playlists/:id/favoritas` – Adicionar música aos favoritos
- `GET /api/favoritas` – Listar músicas favoritas

---

Última atualização: 22/05/2025
