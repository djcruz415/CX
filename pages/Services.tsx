
import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight uppercase">
          Soluciones de Vanguardia
        </h1>
        <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
          Diseñamos flujos inteligentes para la industria 4.0 y la vida conectada.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id} 
            className="group flex flex-col bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={service.imageUrl} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8 text-white">
                <span className="text-6xl font-black tracking-tighter opacity-90 select-none">
                  {service.icon}
                </span>
              </div>
            </div>

            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-extrabold mb-6 group-hover:text-zinc-300 transition-colors tracking-tight text-white uppercase">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-lg mb-8 flex-grow leading-relaxed">
                {service.shortDescription}
              </p>
              <a 
                href={`#/services/${service.id}`}
                className="text-white font-extrabold text-xl flex items-center gap-2 hover:gap-4 transition-all group/link"
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