import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CriarPlaylist() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  async function handleCriar(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('É necessário autenticação para criar uma playlist. Faça login.');
      navigate('/login');
      return;
    }
    try {
      await api.post('/playlists', {nome}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Playlist criada com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
      alert('Erro ao criar playlist. Verifique os dados.');
    }
    }
    // Função para voltar
  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior no histórico
  };
    return (
      <div>
        <h1>Nova Playlist</h1>
        <form onSubmit = {handleCriar}>
          <input
            type = "text"
            placeholder = "Nome da Playlist"
            value = {nome}
            onChange = {(e) => setNome(e.target.value)}
          />
          <button type = "submit">Criar</button>
        </form>
        <button
        onClick={handleVoltar}
        style={{
          marginTop: '10px',
          padding: '8px 15px',
          background: '#6c757d', /* Cor cinza */
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Voltar
      </button>
      </div>
    );
  }