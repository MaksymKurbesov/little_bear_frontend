import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    treeShaking: true,
  },
  // server: {
  //   port: 443,
  //   host: "0.0.0.0",
  //   https: {
  //     key: "./.cert/tg-mini-app.local-key.pem",
  //     cert: "./.cert/tg-mini-app.local.pem",
  //   },
  //   hmr: {
  //     host: "tg-mini-app.local",
  //     // host: "192.168.0.224",
  //     port: 443,
  //   },
  // },
});
