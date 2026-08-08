// src/shared/ui/MermaidDiagram.tsx

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
    chart: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
    // Referencia al contenedor div real en el DOM
    const containerRef = useRef<HTMLDivElement>(null);
    const [svgContent, setSvgContent] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        // Inicializamos la configuración de Mermaid con el tema visual deseado
        mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                // Colores adaptados a la paleta de tu portafolio
                primaryColor: '#F7F7F5',
                primaryTextColor: '#111111',
                primaryBorderColor: '#EAEAE7',
                lineColor: '#5A5855',
                secondaryColor: '#EAEAE7',
                tertiaryColor: '#F7F7F5'
            }
        });

        const renderDiagram = async () => {
            if (!chart || !containerRef.current) return;

            try {
                // Generamos un ID único para evitar colisiones si hay múltiples gráficos
                const id = `mermaid-svg-${Math.round(Math.random() * 100000)}`;
                
                // Mermaid compila el string y devuelve el SVG
                const { svg } = await mermaid.render(id, chart);
                
                setSvgContent(svg);
                setHasError(false);
            } catch (error) {
                console.error("Error renderizando Mermaid diagram:", error);
                setHasError(true);
            }
        };

        renderDiagram();
    }, [chart]); // Se vuelve a ejecutar si el backend entrega un diagrama diferente

    if (!chart) return null;

    if (hasError) {
        return (
            <div className="w-full h-full min-h-62.5 bg-[#F7F7F5] rounded-xl border border-red-200 border-dashed flex items-center justify-center text-red-500 text-sm font-sans uppercase tracking-widest text-center px-4">
                Error al renderizar el diagrama.<br/>Verifica la sintaxis en la base de datos.
            </div>
        );
    }

    return (
        <div 
            ref={containerRef}
            className="w-full h-full min-h-62.5 bg-white rounded-xl border border-[#EAEAE7] shadow-sm flex items-center justify-center p-4 overflow-x-auto overflow-y-hidden"
            // React.dangerouslySetInnerHTML es la forma segura de inyectar HTML de terceros en React
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};