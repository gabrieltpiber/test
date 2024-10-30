import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "MyWidget",
      fileName: "my-widget",
      formats: ["amd", "umd"],
    },
  },
});
