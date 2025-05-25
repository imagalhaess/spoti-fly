const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Função para registrar um novo usuário
async function registerUsuario(req, res) {
  // Verifica se os campos obrigatórios estão presentes
  const { nome, email, senha } = req.body;

  if ((!nome, !email, !senha)) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const result = await db.query("INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email, criado_em", [nome, email, senhaHash]); // Insere o usuário no banco de dados

    const token = jwt.sign({ id: result.rows[0].id }, process.env.JWT_SECRET, {expiresIn: "2h",
    }); // Gera um token JWT para o usuário
    return res.status(201).json({ usuario: result.rows[0], token });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
}

module.exports = { registerUsuario };
