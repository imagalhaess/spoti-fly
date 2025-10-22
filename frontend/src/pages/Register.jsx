// Página de Registro - totalmente redesenhada

import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Register.css";

export default function Register() {
  // Estados para armazenar dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Função que é executada quando o usuário envia o formulário
  async function handleRegister(e) {
    e.preventDefault(); // Previne recarregar a página

    setLoading(true);

    try {
      // Faz a requisição para criar novo usuário
      const response = await api.post("/usuarios/register", {
        nome,
        email,
        senha,
      });

      const token = response.data.token;

      // Salva o token e redireciona para home
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      // Tratamento de erro detalhado
      if (error.response) {
        const status = error.response.status;
        const msg = error.response.data?.error || "Erro desconhecido.";

        if (status === 400) {
          alert("Preencha todos os campos corretamente.");
        } else if (status === 409) {
          alert("Este e-mail já está cadastrado. Tente fazer login.");
        } else if (status === 500) {
          alert("Erro no servidor. Tente novamente mais tarde.");
        } else {
          alert(`Erro ${status}: ${msg}`);
        }
      } else if (error.request) {
        alert("Servidor não está respondendo. Verifique sua conexão.");
      } else {
        alert("Erro inesperado ao registrar. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-page">
      {/* Navbar sem botão de logout */}
      <Navbar showLogout={false} />

      {/* Container centralizado do formulário */}
      <div className="register-container">
        <div className="register-card">
          {/* Cabeçalho */}
          <div className="register-header">
            <h1>Crie sua conta</h1>
            <p>Junte-se ao Spotifly e organize suas músicas favoritas</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleRegister} className="register-form">
            {/* Campo Nome */}
            <Input
              label="Nome"
              type="text"
              placeholder="Seu nome completo"
              icon="👤"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            {/* Campo Email */}
            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              icon="📧"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Campo Senha */}
            <Input
              label="Senha"
              type="password"
              placeholder="Mínimo 6 caracteres"
              icon="🔒"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            {/* Botão de registro */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? "Criando conta..." : "Criar Conta"}
            </Button>
          </form>

          {/* Link para login */}
          <div className="register-footer">
            <p>
              Já tem uma conta?{" "}
              <Link to="/login" className="register-link">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
