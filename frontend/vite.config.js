import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const folders = [
  "pages",
  "store",
  "utils",
  "hooks",
  "assets",
  "layouts",
  "contexts",
  "services",
  "constants",
  "components",
];

const getDirectory = (dir = null) =>
  resolve(__dirname, dir ? `src/${dir}` : `src`);

const getAlias = () => ({
  alias: folders.reduce(
    (acc, folder) => ({ ...acc, [`@${folder}`]: getDirectory(folder) }),
    { "@": getDirectory() }
  ),
});

export default defineConfig({
  plugins: [react()],
  resolve: {
    ...getAlias(),
  },
});
