
import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight">
          Soluciones que Impulsan Resultados
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos un abanico completo de servicios tecnológicos diseñados para la industria 4.0 y la vida inteligente.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id} 
            className="group flex flex-col bg-[#0f172a] border border-slate-800/50 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
          >
            {/* Image Area with Large Code Overlay */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={service.imageUrl} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8 text-white">
                <span className="text-6xl font-black tracking-tighter opacity-90 select-none">
                  {service.icon}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-extrabold mb-6 group-hover:text-blue-400 transition-colors tracking-tight text-white">
                {service.title}
              </h3>
              <p className="text-slate-400 text-lg mb-8 flex-grow leading-relaxed">
                {service.shortDescription}
              </p>
              <a 
                href={`#/services/${service.id}`}
                className="text-blue-500 font-extrabold text-xl flex items-center gap-2 hover:gap-4 transition-all group/link"
              >
                Ver detalles 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
