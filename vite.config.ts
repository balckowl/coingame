import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "CRX Example",
  version: "1.0.0",
  action: {
    default_popup: "",
  },
  content_scripts: [
    {
      matches: ["https://qiita.com/*", "https://zenn.dev/*"],
      js: ["src/content-script/script.tsx"],
    },
  ],
  background: {
    service_worker: "src/background/index.ts",
  },
  permissions: ["tabs", "activeTab"],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
