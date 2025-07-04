import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5175, // change here
  },
  plugins: [react(), tsconfigPaths()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     port: 5175,
//   },
//     plugins: [react(), tsconfigPaths()],
// });
