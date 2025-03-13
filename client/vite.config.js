import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        outDir: "../dist/client",
        rollupOptions: {
            output: {
                // Окремо для зображень
                assetFileNames: (assetInfo) => {
                    if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
                        return "assets/images/[name].[hash][extname]";
                    }
                    // Для всіх інших файлів
                    return "assets/[name].[hash][extname]";
                },
            },
        },
    },
    plugins: [react(), svgr()],
    server: {
        host: true,
    },
});
