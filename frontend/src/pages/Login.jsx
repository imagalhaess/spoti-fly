import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  // Lida com o envio do formulário de login
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/usuarios/login", {
        email,
        senha,
      });

      const token = response.data.token;

      // O token é armazenado no localStorage para manter a sessão ativa
      localStorage.setItem("token", token);

      // Redireciona o usuário para a página inicial após login
      navigate("/");
    } catch (error) {
      // Alerta simples ao usuário. Pode ser melhorado com um componente visual de erro
      alert("Login falhou. Verifique suas credenciais.");

      // Útil em ambiente de desenvolvimento. Em produção, evite exibir erros no console
      console.log(error.response?.data);
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={handleLogin}>
        {/* Inputs controlados para manter o estado local sincronizado com os campos */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {/* Botão de envio simples */}
        <button type="submit">Entrar</button>
      </form>

      {/* Link de navegação para usuários ainda não registrados */}
      <p>
        Não tem uma conta? <Link to="/register">Registre-se</Link>
      </p>
    </div>
  );
}
