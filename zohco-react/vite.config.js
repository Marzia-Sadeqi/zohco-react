import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/zohco-react/",
  plugins: [react(), tailwindcss()],
}); // 👈 MAKE SURE THIS IS A CURLY BRACE '}' AND THEN A PARENTHESIS ')'
