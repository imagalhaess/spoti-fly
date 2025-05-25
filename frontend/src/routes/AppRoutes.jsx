import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import CriarPlaylist from '../pages/CriarPlaylist';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nova-playlist" element={<CriarPlaylist />} />
      </Routes>
    </BrowserRouter>
  )
}