
# Mapeamento de Rotas – Spoti-Fly

Documentação das rotas da API criadas até o momento no backend do projeto Spoti-Fly.

---

## Playlists

### GET /api/playlists

**Descrição:**  
Lista todas as playlists cadastradas no banco de dados.

---

### POST /api/playlists

**Descrição:**  
Cria uma nova playlist com o nome enviado no corpo da requisição.

---

## Músicas

### POST /api/playlists/:id/musicas

**Descrição:**  
Busca uma música na API do Deezer usando o termo enviado no corpo da requisição e a adiciona à playlist correspondente (`:id`).

---

### GET /api/playlists/:id/musicas

**Descrição:**  
Lista todas as músicas vinculadas a uma playlist específica.

---

## Autenticação

### POST /api/usuarios/register

**Descrição:**  
Cria um novo usuário com os dados enviados (`nome`, `email`, `senha`).  
A senha é criptografada com `bcrypt` e o backend retorna um token JWT válido por 2h.

---

## Rotas planejadas

- `POST /api/usuarios/login` – Autenticar usuário com JWT
- `POST /api/playlists/:id/favoritas` – Adicionar música aos favoritos
- `GET /api/favoritas` – Listar músicas favoritas

---

Última atualização: 24/05/2025
