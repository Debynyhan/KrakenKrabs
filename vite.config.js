import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load env vars from .env files
    const env = loadEnv(mode, process.cwd(), '')

    const TUNNEL_HOST = env.TUNNEL_HOST || ''
    const DISABLE_HMR = env.DISABLE_HMR === '1' || env.DISABLE_HMR === 'true'

    // When tunneling Vite dev server, Vite uses many module requests in dev (native ESM).
    // To reduce RPM pressure on tunnels, optionally disable HMR and set explicit origin.
    const usingTunnel = Boolean(TUNNEL_HOST)

    return {
        plugins: [react()],
        server: {
            host: true,
            strictPort: true,
            port: 5173,
            cors: true,
            // Allow dev server to be accessed via a reverse proxy host (e.g., ngrok)
            allowedHosts: usingTunnel && TUNNEL_HOST
                ? [TUNNEL_HOST, '.ngrok-free.app']
                : undefined,
            origin: usingTunnel ? `https://${TUNNEL_HOST}` : undefined,
            hmr: DISABLE_HMR
                ? false
                : usingTunnel
                    ? {
                        // Only hint the client port for secure tunnels; avoid binding to remote host
                        clientPort: 443,
                        host: TUNNEL_HOST,
                        protocol: 'wss',
                    }
                    : undefined,
        },
        preview: {
            host: true,
            port: 4173,
        },
        optimizeDeps: {
            // Ensure core deps are pre-bundled to cut down module requests
            include: ['react', 'react-dom'],
        },
    }
})
