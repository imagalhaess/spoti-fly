// Página de Registro - Design profissional

import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Register.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/usuarios/register", {
        nome,
        email,
        senha,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      if (error.response) {
        const status = error.response.status;

        if (status === 400) {
          alert("Preencha todos os campos corretamente.");
        } else if (status === 409) {
          alert("Este e-mail já está cadastrado. Tente fazer login.");
        } else {
          alert("Erro no servidor. Tente novamente mais tarde.");
        }
      } else {
        alert("Erro ao registrar. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-page">
      <Navbar showLogout={false} />

      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <h1>Crie sua conta</h1>
            <p>Junte-se ao Spoti-Fly e organize suas músicas</p>
          </div>

          <form onSubmit={handleRegister} className="register-form">
            <Input
              label="Nome"
              type="text"
              placeholder="Seu nome completo"
              icon="user"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

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
              placeholder="Mínimo 6 caracteres"
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
              {loading ? "Criando conta..." : "Criar Conta"}
            </Button>
          </form>

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
