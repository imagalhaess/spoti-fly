const express = require ('express');
const router = express.Router();
const { registerUsuario, loginUsuario } = require ('../controllers/usuarioController');

// Rota para registrar um novo usuário
router.post ('/usuarios/register', registerUsuario);
router.post ('/usuarios/login', loginUsuario);

// Exporta o roteador para ser usado na aplicação principal
module.exports = router;