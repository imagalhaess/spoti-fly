import { useState } from "react";
import api from "../services/api"; // ajuste o caminho conforme necessário
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
  e.preventDefault();

  try {
    const response = await api.post("usuarios/login", {
      email,
      senha,
    });

    const token = response.data.token;
    console.log("Token recebido:", token);

    localStorage.setItem("token", token);
    navigate("/");
  } catch (error) {
    alert("Login falhou. Verifique suas credenciais.");
    console.log(error.response?.data);
    console.error("Erro ao fazer login:", error);
  }
}
  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
