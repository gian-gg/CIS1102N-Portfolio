import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables access on your local network
    port: 3000, // Optional: Specify the port (default is 5173)
  },
});
