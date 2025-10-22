// Página de Login - totalmente redesenhada com componentes modernos

import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Login.css";

export default function Login() {
  // Estados para armazenar email e senha digitados pelo usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false); // Estado para botão de carregamento
  const navigate = useNavigate();

  // Função que é executada quando o usuário envia o formulário
  async function handleLogin(e) {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    setLoading(true); // Mostra estado de carregamento

    try {
      // Faz a requisição para o backend
      const response = await api.post("/usuarios/login", {
        email,
        senha,
      });

      const token = response.data.token;

      // Salva o token no localStorage para manter o usuário logado
      localStorage.setItem("token", token);

      // Redireciona para a página inicial
      navigate("/");
    } catch (error) {
      // Em caso de erro, mostra um alerta ao usuário
      alert("Login falhou. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false); // Remove estado de carregamento
    }
  }

  return (
    <div className="login-page">
      {/* Navbar sem botão de logout */}
      <Navbar showLogout={false} />

      {/* Container centralizado do formulário */}
      <div className="login-container">
        <div className="login-card">
          {/* Cabeçalho do formulário */}
          <div className="login-header">
            <h1>Bem-vindo de volta!</h1>
            <p>Faça login para acessar suas playlists</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="login-form">
            {/* Campo de Email usando nosso componente Input */}
            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              icon="📧"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Campo de Senha */}
            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              icon="🔒"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            {/* Botão de login com estado de carregamento */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Link para página de registro */}
          <div className="login-footer">
            <p>
              Não tem uma conta?{" "}
              <Link to="/register" className="login-link">
                Registre-se gratuitamente
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
