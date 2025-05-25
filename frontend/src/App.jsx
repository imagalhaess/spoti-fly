// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CriarPlaylist from './pages/CriarPlaylist';
import AdicionarMusica from './pages/AdicionarMusica';

function App() {
  return (
    <BrowserRouter>
      <div className="main-content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/criar-playlist" element={<CriarPlaylist />} />
          {/* Rota para adicionar música, com o ID da playlist */}
          <Route path="/playlists/:id/adicionar-musica" element={<AdicionarMusica />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;