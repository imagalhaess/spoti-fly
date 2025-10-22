// Página de detalhes da playlist - mostra todas as músicas

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "./PlaylistDetalhes.css";

export default function PlaylistDetalhes() {
  const { id } = useParams(); // Pega o ID da playlist da URL
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playlistNome, setPlaylistNome] = useState("");
  const navigate = useNavigate();

  // Busca as músicas quando o componente carrega
  useEffect(() => {
    api
      .get(`/playlists/${id}/musicas`)
      .then((res) => {
        // Verifica a estrutura da resposta
        if (Array.isArray(res.data)) {
          setMusicas(res.data);
        } else if (Array.isArray(res.data.musicas)) {
          setMusicas(res.data.musicas);
        } else {
          setMusicas([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar músicas:", err);
        setMusicas([]);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="playlist-detalhes-page">
      <Navbar showLogout={true} />

      <div className="playlist-detalhes-container">
        {/* Cabeçalho com botão voltar */}
        <div className="playlist-detalhes-header">
          <Button variant="secondary" onClick={() => navigate("/")}>
            ← Voltar
          </Button>

          <h1 className="playlist-detalhes-title">Músicas da Playlist</h1>

          <Button
            variant="primary"
            onClick={() => navigate(`/playlists/${id}/adicionar-musica`)}
          >
            + Adicionar Música
          </Button>
        </div>

        {/* Conteúdo */}
        {loading ? (
          // Estado de carregamento
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Carregando músicas...</p>
          </div>
        ) : musicas.length === 0 ? (
          // Estado vazio
          <div className="empty-state">
            <span className="empty-state-icon">🎧</span>
            <h2>Nenhuma música ainda</h2>
            <p>Adicione músicas para começar a montar sua playlist!</p>
            <Button
              variant="primary"
              onClick={() => navigate(`/playlists/${id}/adicionar-musica`)}
            >
              + Adicionar Primeira Música
            </Button>
          </div>
        ) : (
          // Lista de músicas
          <div className="musicas-list">
            {musicas.map((musica, index) => (
              <div key={musica.id} className="musica-card">
                {/* Número da música */}
                <div className="musica-numero">{index + 1}</div>

                {/* Capa do álbum ou placeholder */}
                <div className="musica-cover">
                  {musica.capa_url ? (
                    <img src={musica.capa_url} alt={musica.titulo} />
                  ) : (
                    <div className="musica-cover-placeholder">🎵</div>
                  )}
                </div>

                {/* Informações da música */}
                <div className="musica-info">
                  <h3 className="musica-titulo">{musica.titulo}</h3>
                  <p className="musica-artista">{musica.artista}</p>
                </div>

                {/* Player de áudio (se disponível) */}
                {musica.preview_url ? (
                  <div className="musica-player">
                    <audio controls src={musica.preview_url}>
                      Seu navegador não suporta áudio.
                    </audio>
                  </div>
                ) : (
                  <div className="musica-no-preview">
                    <span>Prévia não disponível</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
