// src/shared/utils/ScrollManager.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollManager = () => {
    const location = useLocation();

    useEffect(() => {
        // Si hay un hash en la URL (ej. #projects)
        if (location.hash) {
            const id = location.hash.replace('#', '');
            
            // Usa un ligero setTimeout para darle tiempo a React 
            // de montar el HomePage antes de buscar el elemento
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Si navegamos a una ruta sin hash (ej. de Home a /curriculum)
            // siempre iniciamos en la parte superior de la página
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]); // Se ejecuta cada vez que cambia la ruta o el hash

    // Este componente es invisible, solo ejecuta lógica
    return null; 
};