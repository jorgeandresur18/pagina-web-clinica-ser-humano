/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que el sitio sea embebido en iframes de otros dominios
          { key: "X-Frame-Options",        value: "SAMEORIGIN" },
          // Bloquea sniffing de tipo MIME
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controla la información de referencia enviada al navegar
          { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
          // Desactiva sensores que el sitio no necesita
          { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=()" },
          // Fuerza HTTPS en subsecuentes visitas (2 años)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
