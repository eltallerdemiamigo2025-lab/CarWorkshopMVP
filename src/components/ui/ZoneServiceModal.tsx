import React, { useState, useEffect } from 'react';

export default function ZoneServiceModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Mostrar cuando se ha bajado al 25% del documento
      if (scrollTop + windowHeight >= docHeight / 4) {
        setShowBanner(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      const header = document.querySelector('.auto-hide-header');
      if (header && header instanceof HTMLElement) {
        header.style.display = '';
      }

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        const header = document.querySelector('.auto-hide-header');
        if (header && header instanceof HTMLElement) {
          header.style.display = '';
        }
      };
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Banner que aparece al 25% - AHORA TODO ES CLICKABLE */}
      {showBanner && (
        <div
          onClick={() => setIsModalOpen(true)}
          className={`
            fixed bottom-4 left-3 right-3 
            md:bottom-10 md:left-8 md:right-8 
            lg:left-8 lg:right-auto lg:w-96 
            bg-white rounded-lg shadow-lg border border-yellow-300 z-40 overflow-hidden
            transform transition-transform duration-500 cursor-pointer hover:shadow-xl hover:border-yellow-400 hover:scale-105 transition-all
            ${showBanner ? "translate-y-0" : "translate-y-full"}
          `}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
          aria-label="Ver mapa completo de zonas de servicio"
        >
          <div className="flex items-center p-2 md:p-4">
            {/* Texto lado izquierdo */}
            <div className="flex-1 pr-2 md:pr-3">
              <p className="text-sm md:text-base font-semibold text-gray-800">
                Zonas de servicio
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 leading-snug">
                Haz click para ver el mapa completo
              </p>
            </div>
            
            {/* Mapa miniatura lado derecho - YA NO TIENE onClick PROPIO */}
            <div className="flex-shrink-0 w-20 h-16 md:w-28 md:h-24 rounded overflow-hidden">
              <img 
                src="/map-zones.jpg" 
                alt="Mapa de zonas de servicio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal de mapa completo */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-[1100] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative bg-white rounded-xl w-full max-w-full md:max-w-3xl flex flex-col h-[90vh] md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="bg-yellow-400 p-3 md:p-4 flex-shrink-0 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-gray-900">
                    Zonas de Servicio
                  </h2>
                  <p className="text-xs md:text-sm text-gray-700 mt-0.5">
                    Servicio a domicilio en toda la Comunidad de Madrid
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-700 hover:text-gray-900 transition-colors p-1"
                  aria-label="Cerrar modal"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Contenido del modal con scroll en móvil */}
            <div className="bg-gray-50 p-3 md:p-5 rounded-b-xl overflow-y-auto">
              {/* Mapa con tamaño controlado */}
              <div className="w-full">
                <img 
                  src="/map-zones.jpg" 
                  alt="Mapa detallado de zonas de servicio en Madrid"
                  className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain rounded-lg shadow-md"
                />
              </div>
              
              {/* Información adicional */}
              <div className="mt-3 md:mt-4 p-3 md:p-4 bg-white rounded-lg">
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center text-xs md:text-sm">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-yellow-500">📍</div>
                    <p className="font-semibold mt-0.5 md:mt-1">Madrid Capital</p>
                    <p className="text-gray-600">Zona sur</p>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-yellow-500">🚗</div>
                    <p className="font-semibold mt-0.5 md:mt-1">Recogida Gratuita</p>
                    <p className="text-gray-600">En tu domicilio</p>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-yellow-500">⏰</div>
                    <p className="font-semibold mt-0.5 md:mt-1">Horario Flexible</p>
                    <p className="text-gray-600">Adaptado a ti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}