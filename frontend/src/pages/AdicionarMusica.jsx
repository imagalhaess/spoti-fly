// Página para buscar e adicionar músicas à playlist

import { useState } from "react";
import api from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import "./AdicionarMusica.css";

export default function AdicionarMusica() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const { id } = useParams(); // ID da playlist
  const navigate = useNavigate();

  // Função para buscar músicas na API do Deezer através do backend
  async function buscarMusicas(e) {
    e.preventDefault();
    setMensagemErro("");
    setMensagemSucesso("");

    if (!busca.trim()) {
      setMensagemErro("Digite o nome da música ou artista para buscar.");
      return;
    }

    setLoading(true);

    try {
      // Chama o backend que se conecta ao Deezer
      const resposta = await api.get(`/search?q=${encodeURIComponent(busca)}`);

      if (resposta.data && Array.isArray(resposta.data.data)) {
        // Pega os 5 primeiros resultados
        setResultados(resposta.data.data.slice(0, 10));

        if (resposta.data.data.length === 0) {
          setMensagemErro("Nenhuma música encontrada. Tente outro termo.");
        }
      } else {
        setMensagemErro("Resposta inesperada do servidor.");
        setResultados([]);
      }
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
      setMensagemErro("Erro ao buscar músicas. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  // Função para adicionar música à playlist
  async function adicionarMusica(musica) {
    setMensagemErro("");
    setMensagemSucesso("");

    const token = localStorage.getItem("token");

    if (!token) {
      setMensagemErro("Você precisa estar logado.");
      navigate("/login");
      return;
    }

    try {
      await api.post(
        `/playlists/${id}/musicas`,
        {
          title: musica.title,
          artistName: musica.artist.name,
          deezerId: musica.id,
          coverUrl: musica.album.cover_medium,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagemSucesso(`✨ "${musica.title}" adicionada com sucesso!`);

      // Limpa os resultados e busca
      setTimeout(() => {
        setResultados([]);
        setBusca("");
        setMensagemSucesso("");
      }, 2000);
    } catch (error) {
      console.error("Erro ao adicionar música:", error);

      if (error.response?.status === 409) {
        setMensagemErro(`"${musica.title}" já está na playlist.`);
      } else {
        setMensagemErro("Erro ao adicionar música. Tente novamente.");
      }
    }
  }

  return (
    <div className="adicionar-musica-page">
      <Navbar showLogout={true} />

      <div className="adicionar-musica-container">
        {/* Cabeçalho */}
        <div className="adicionar-musica-header">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Voltar
          </Button>

          <h1 className="adicionar-musica-title">Adicionar Música</h1>
        </div>

        {/* Formulário de busca */}
        <form onSubmit={buscarMusicas} className="busca-form">
          <Input
            label="Buscar Música"
            type="text"
            placeholder="Nome da música ou artista..."
            icon="🔍"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <Button type="submit" variant="primary" fullWidth disabled={loading}>
            {loading ? "Buscando..." : "🔍 Buscar"}
          </Button>
        </form>

        {/* Mensagens de feedback */}
        {mensagemErro && (
          <div className="mensagem mensagem-erro">{mensagemErro}</div>
        )}
        {mensagemSucesso && (
          <div className="mensagem mensagem-sucesso">{mensagemSucesso}</div>
        )}

        {/* Resultados da busca */}
        {resultados.length > 0 && (
          <div className="resultados-container">
            <h2 className="resultados-title">Resultados</h2>
            <div className="resultados-list">
              {resultados.map((musica) => (
                <div key={musica.id} className="resultado-card">
                  {/* Capa do álbum */}
                  <img
                    src={musica.album.cover_medium}
                    alt={musica.title}
                    className="resultado-cover"
                  />

                  {/* Informações */}
                  <div className="resultado-info">
                    <h3 className="resultado-titulo">{musica.title}</h3>
                    <p className="resultado-artista">{musica.artist.name}</p>
                    {musica.album.title && (
                      <p className="resultado-album">{musica.album.title}</p>
                    )}
                  </div>

                  {/* Botão adicionar */}
                  <Button
                    variant="success"
                    onClick={() => adicionarMusica(musica)}
                  >
                    + Adicionar
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Estado inicial */}
        {resultados.length === 0 && !mensagemErro && (
          <div className="empty-state">
            <span className="empty-state-icon">🎵</span>
            <h2>Busque músicas incríveis</h2>
            <p>
              Use a barra de busca acima para encontrar suas músicas favoritas e
              adicioná-las à playlist
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
