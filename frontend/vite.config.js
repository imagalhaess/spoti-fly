import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuração do servidor para permitir acesso de hosts específicos
  server: {
    // Permitir acesso de qualquer host (útil para ambientes como Replit, Codespaces, etc)
    host: true,

    // Lista de hosts permitidos - aceita todos neste caso
    allowedHosts: [
      ".replit.dev", // Permite qualquer subdomínio do Replit
      "localhost", // Permite acesso local
    ],

    // Porta padrão (opcional - pode ser necessário no Replit)
    port: 5173,

    // Abrir automaticamente no navegador ao iniciar (opcional)
    // open: true,
  },
});
