const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/config/db");

describe("Playlists - Funcionalidades Protegidas", () => {
  let token;

  const usuarioTeste = {
    nome: "Playlist Tester",
    email: `playlist${Date.now()}@exemplo.com`,
    senha: "senha456"
  };

  beforeAll(async () => {
    const res = await request(app)
      .post("/api/usuarios/register")
      .send(usuarioTeste);

    token = res.body.token;
  });

// Teste de criação de playlist
  it("deve criar uma nova playlist com sucesso", async () => {
    const res = await request(app)
      .post("/api/playlists")
      .set("Authorization", `Bearer ${token}`)
      .send({ nome: "Minha Playlist Teste" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("nome", "Minha Playlist Teste");
  });

  // Teste de listagem de playlists cadastradas
  it("deve retornar a lista de playlists cadastradas", async () => {
    const res = await request(app)
      .get("/api/playlists")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll(async () => {
    await db.end();
  });
});
