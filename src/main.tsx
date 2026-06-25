// src/main.tsx
import './index.css' // Aquí deben estar las directivas de Tailwind
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import App from './App'

// 1. Instanciamos el cliente fuera del componente raíz.
// Esto garantiza que la caché no se destruya ni se recree por accidente 
// si React decide volver a renderizar el árbol principal.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 2. Configuración táctica de la caché
      staleTime: 1000 * 60 * 5, // La data se considera "fresca" por 5 minutos.
      refetchOnWindowFocus: false, // Evita hacer un fetch automático si el usuario cambia de pestaña y regresa.
      retry: 1, // Si la red falla, TanStack hará un reintento automático antes de lanzar el error a tu UI.
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 3. Envolvemos la App con el proveedor y le pasamos nuestro cliente */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)