
const request = require("supertest");
const app = require("../../src/app"); // ou o caminho do seu arquivo index.js que exporta o Express
const db = require("../../src/config/db");

jest.setTimeout(15000); // Aumenta o tempo máximo para evitar timeout

let token;

describe("Autenticação - Registro e Login de Usuário", () => {
  const usuarioTeste = {
    nome: "Isa Teste",
    email: `isa${Date.now()}@teste.com`,
    senha: "senha123",
  };

  // Teste de registro
  it("deve registrar um novo usuário com sucesso e retornar um token JWT", async () => {
    const res = await request(app)
      .post("/api/usuarios/register")
      .send(usuarioTeste);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
    expect(res.body.usuario.email).toBe(usuarioTeste.email);

    token = res.body.token;
  });

  // Teste de login
  it("deve fazer login com sucesso e retornar um token JWT", async () => {
    const res = await request(app)
      .post("/api/usuarios/login")
      .send({
        email: usuarioTeste.email,
        senha: usuarioTeste.senha,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.usuario.email).toBe(usuarioTeste.email);
  });

  // Teste de chamada de rota protegida
  it("deve bloquear acesso a rota protegida sem token JWT", async () => {
    const res = await request(app).get("/api/playlists"); // sem header Authorization

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toBe("Token não fornecido"); // ou a mensagem definida no middleware
  });

  // Finaliza a conexão com o banco após os testes
  afterAll(async () => {
    await db.end();
  });
});
