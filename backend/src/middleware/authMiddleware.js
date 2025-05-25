const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
  // Obtém o token do cabeçalho de autorização
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrai o token do cabeçalho

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' }); // Retorna erro se o token não for fornecido
  } 
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token usando a chave secreta
    req.usuarioId = payload.id; // Armazena o ID do usuário no objeto de requisição
    next(); // Chama o próximo middleware ou rota
  }
  catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado.' }); // Retorna erro se o token for inválido
  }
}

module.exports = autenticarToken; // Exporta o middleware para ser usado em outras partes do aplicativo