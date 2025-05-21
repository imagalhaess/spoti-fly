import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import CriarPlaylist from '../pages/CriarPlaylist';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-playlist" element={<CriarPlaylist />} />
      </Routes>
    </BrowserRouter>
  )
}