// Página de Login - Design profissional

import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/usuarios/login", {
        email,
        senha,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      alert("Login falhou. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <Navbar showLogout={false} />

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Bem-vindo de volta</h1>
            <p>Faça login para acessar suas playlists</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              icon="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              icon="lock"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

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
