const express = require ('express');
const router = express.Router();
const { registerUsuario } = require ('../controllers/usuarioController');

// Rota para registrar um novo usuário
router.post ('/usuarios/register', registerUsuario);

// Exporta o roteador para ser usado na aplicação principal
module.exports = router;