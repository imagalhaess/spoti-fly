import { useState } from 'react';
import api from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

export default function AdicionarMusica() {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

// Função para buscar músicas na API do Deezer
  async function buscarMusicas(e) { 
    e.preventDefault();
    setMensagemErro('');
    setMensagemSucesso('');

    if (!busca.trim()) {
      setMensagemErro('Por favor, digite o nome da música para buscar.');
      return;
    }

    try {
      const resposta = await api.get(`/search?q=${encodeURIComponent(busca)}`);

      if (resposta.data && Array.isArray(resposta.data.data)) {
        setResultados(resposta.data.data.slice(0, 5));
        if (resposta.data.data.length === 0) {
          setMensagemErro('Nenhuma música encontrada com o termo de busca.');
        }
      } else {
        setMensagemErro('Resposta inesperada do servidor ao buscar músicas.');
        console.error('Estrutura da resposta da API inesperada:', resposta.data);
        setResultados([]);
      }
    } catch (error) {
      console.error('Erro ao buscar músicas:', error);
      if (error.response) {
        setMensagemErro(`Erro ao buscar músicas: ${error.response.data.error || error.response.statusText}.`);
      } else if (error.request) {
        setMensagemErro('Erro de conexão: Nenhuma resposta do servidor. Verifique se o backend está online.');
      } else {
        setMensagemErro('Erro desconhecido ao buscar músicas. Tente novamente.');
      }
    }
  }

  // Função para adicionar música à playlist
  async function adicionarMusica(musica) {
    setMensagemErro('');
    setMensagemSucesso('');
    const token = localStorage.getItem('token');

    if (!token) {
      setMensagemErro('Você precisa estar logado para adicionar músicas.');
      return;
    }

    try {
      await api.post(`/playlists/${id}/musicas`, {
        title: musica.title,
        artistName: musica.artist.name,
        deezerId: musica.id,
        coverUrl: musica.album.cover_medium,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMensagemSucesso(`Música "${musica.title}" adicionada à playlist com sucesso!`);
      setResultados([]); // Limpa os resultados após adicionar a música
      setBusca('');
    } catch (error) {
      console.error('Erro ao adicionar música:', error);
      if (error.response) {
        if (error.response.status === 409) {
          setMensagemErro(`A música "${musica.title}" já está nesta playlist.`);
        } else {
          setMensagemErro(error.response.data.error || 'Erro ao adicionar música à playlist. Tente novamente.');
        }
      } else {
        setMensagemErro('Erro ao adicionar música à playlist. Tente novamente.');
      }
    }
  }

  const handleVoltar = () => { 
    navigate(-1);
  };

  return (
    <div>
      <h1>Buscar e Adicionar Música à Playlist</h1>

      {/* --- Formulário de Busca --- */}
      <form onSubmit={buscarMusicas}>
        <input
          type="text"
          placeholder="Nome da Música ou Artista"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {/* --- Mensagens de Erro/Sucesso --- */}
      {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
      {mensagemSucesso && <p style={{ color: 'green' }}>{mensagemSucesso}</p>}

      {/* --- Resultados da Busca --- */}
      <h2>Resultados da Busca</h2>
      {resultados.length > 0 ? (
        <ul>
          {resultados.map((musica) => (
            <li key={musica.id}>
              {musica.title} - {musica.artist.name}
              <button onClick={() => adicionarMusica(musica)}>Adicionar à Playlist</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Use a barra de busca para encontrar músicas.</p>
      )}

      {/* --- BOTÃO VOLTAR --- */}
      <button
        onClick={handleVoltar} 
        style={{
          marginTop: '20px',
          padding: '8px 15px',
          background: '#6c757d',
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