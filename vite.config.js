import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
    // Load env vars from .env files
    const env = loadEnv(mode, process.cwd(), '')

    // Normalize tunnel host to a bare hostname (no protocol, no trailing slash)
    const normalizeHost = (h) =>
        (h || '')
            .replace(/^https?:\/\//i, '')
            .replace(/\/$/, '')
            .trim()

    // Try ordered detection for tunnel host:
    // 1. Explicit env var TUNNEL_HOST
    // 2. Local ngrok agent API (http://127.0.0.1:4040/api/tunnels)
    // 3. Empty (no tunnel)
    let TUNNEL_HOST = normalizeHost(env.TUNNEL_HOST)

    if (!TUNNEL_HOST) {
        try {
            // Node 18+ has global fetch; use it to query the ngrok local API
            const res = await fetch('http://127.0.0.1:4040/api/tunnels');
            if (res && res.ok) {
                const data = await res.json();
                // pick first https or http tunnel public_url
                const pub = (data.tunnels || []).find(t => t.public_url && /https?:\/\//.test(t.public_url));
                if (pub && pub.public_url) {
                    TUNNEL_HOST = normalizeHost(pub.public_url);
                }
            }
        } catch (e) {
            // silent fallback — no local ngrok API reachable
        }
    }

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
                ? [TUNNEL_HOST, 'ngrok-free.app']
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
