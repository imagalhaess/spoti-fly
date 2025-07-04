import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CriarPlaylist from "../pages/CriarPlaylist";
import AdicionarMusica from "../pages/AdicionarMusica";
import PlaylistDetalhes from "../pages/PlaylistDetalhes";

// Função principal que define as rotas da aplicação
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/criar-playlist" element={<CriarPlaylist />} />
        <Route
          path="/playlists/:id/adicionar-musica"
          element={<AdicionarMusica />}
        />
        <Route path="/playlists/:id" element={<PlaylistDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}
