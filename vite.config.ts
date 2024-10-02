import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 443,
  //   host: "0.0.0.0",
  //   hmr: {
  //     host: "tg-mini-app.local",
  //     port: 443,
  //   },
  //   https: {
  //     key: "./.cert/localhost-key.pem",
  //     cert: "./.cert/localhost.pem",
  //   },
  // },
});
