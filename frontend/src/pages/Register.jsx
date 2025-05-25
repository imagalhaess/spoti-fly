import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post('usuarios/register', {
        nome,
        email,
        senha,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);

      navigate('/');
    } catch (error) {
      alert('Erro ao registrar. Verifique os dados.');
      console.error('Erro ao registrar:', error);
    }
  }
  return (
    <div>
      <h1> Registro </h1>
      <form onSubmit = {handleRegister}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}