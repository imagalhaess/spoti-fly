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
// Função para fazer login de um usuário
async function loginUsuario(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }
  try {
    const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }
    const usuario = result.rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Senha inválida.' });
    }
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: '2h'
    });
    res.status(200).json({
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      },
      token
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
}

module.exports = { registerUsuario, loginUsuario }; // Exporta as funções para serem usadas em outros módulos
