import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Redirect "/pojok-literasi-digital" (tanpa trailing slash) ke versi ber-slash.
// Tanpa ini, Vite's baseMiddleware menampilkan 404
// "The server is configured with a public base URL of /pojok-literasi-digital/ ..."
// untuk path tersebut, sebelum React sempat dimuat. Berlaku untuk dev & preview.
function redirectBaseSlash(req, res, next) {
  const url = req.url || ''
  const queryIndex = url.indexOf('?')
  const pathname = queryIndex === -1 ? url : url.slice(0, queryIndex)
  const query = queryIndex === -1 ? '' : url.slice(queryIndex)
  if (pathname === '/pojok-literasi-digital') {
    res.writeHead(302, { Location: '/pojok-literasi-digital/' + query })
    res.end()
    return
  }
  next()
}

export default defineConfig({
  base: '/pojok-literasi-digital/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'redirect-base-slash',
      configureServer(server) {
        server.middlewares.use(redirectBaseSlash)
      },
      configurePreviewServer(server) {
        server.middlewares.use(redirectBaseSlash)
      },
    },
  ],
})
