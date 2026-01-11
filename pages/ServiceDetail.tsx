
import React, { useEffect, useState } from 'react';
import { SERVICES_DATA } from '../constants';
import { Service } from '../types';

interface Props {
  id: string;
}

const ServiceDetail: React.FC<Props> = ({ id }) => {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const found = SERVICES_DATA.find(s => s.id === id);
    if (found) setService(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="pt-40 text-center min-h-screen bg-slate-950">
        <div className="animate-pulse text-blue-500 font-extrabold text-2xl tracking-tight">
          Cargando configuración del sistema...
        </div>
      </div>
    );
  }

  const whatsappLink = "https://wa.me/qr/WQT6VYQRFZACF1";

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-950 text-white font-sans">
      {/* Top Banner Area */}
      <div className="px-6 md:px-20 pt-12 pb-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-10">
            <a 
              href="#/services" 
              className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-2 transition-all group text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a servicios
            </a>
          </div>

          {/* Service Title and Subtitle */}
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 -mt-8">
        {/* Visual Identity Block - Reduced scale for better vision */}
        <div className="w-full h-[250px] md:h-[350px] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[2rem] border border-slate-800/60 flex items-center justify-center overflow-hidden mb-12 shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-blue-600/5 blur-[80px] rounded-full -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center p-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              {service.id === 'whatsapp-agents' ? 'WhatsApp Automation' : service.title}
            </h2>
            <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Description and CTA Card */}
        <div className="max-w-4xl">
          <div className="bg-[#0f172a] border border-slate-800/40 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Removed background icon text watermark */}
            
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-white relative z-10">
              Descripción del Servicio
            </h3>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 opacity-90 relative z-10">
              {service.fullDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative z-10">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-5 h-5 bg-blue-600/20 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-400 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-slate-800/60 w-full mb-12 relative z-10"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-sm text-center md:text-left">
                <h4 className="text-2xl font-extrabold tracking-tight text-white mb-2">¿Listo para empezar?</h4>
                <p className="text-slate-400">
                  Obtén una asesoría personalizada y potencia tu negocio hoy mismo.
                </p>
              </div>

              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-xl shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-3"
              >
                Solicitar Cotización
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
