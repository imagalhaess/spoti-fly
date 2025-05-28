import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  // Função responsável por lidar com o envio do formulário de registro
  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post("/usuarios/register", {
        nome,
        email,
        senha,
      });

      const token = response.data.token;

      // Armazena o token no localStorage para manter o usuário logado
      localStorage.setItem("token", token);

      // Redireciona para a página principal após o registro
      navigate("/");
    } catch (error) {
      // Estrutura clara de tratamento de erro por tipo e status HTTP
      if (error.response) {
        const status = error.response.status;
        const msg = error.response.data?.error || "Erro desconhecido.";

        if (status === 400) {
          alert("Preencha todos os campos.");
        } else if (status === 409) {
          alert(
            "Este e-mail já está cadastrado. Tente fazer login ou use outro."
          );
        } else if (status === 500) {
          alert("Erro interno do servidor. Tente novamente mais tarde.");
        } else {
          alert(`Erro ${status}: ${msg}`);
        }
      } else if (error.request) {
        alert(
          "Servidor não está respondendo. Verifique se o backend está rodando."
        );
      } else {
        alert("Erro inesperado ao registrar. Tente novamente.");
      }
    }
  }

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        {/* Campos controlados para nome, email e senha */}
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
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

        {/* Botão de envio */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
