
import React, { useEffect } from 'react';
import { SERVICES_DATA } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#/' || hash === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash && hash.startsWith('#')) {
        const id = hash.substring(1);
        if (id === 'services-section' || id === 'about') {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-none max-w-6xl">
          Cruz Automations: <br/><span className="gradient-text">Automatización Inteligente</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
          Transformamos procesos manuales en soluciones autónomas con IA, liberando tu tiempo para lo extraordinario.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#/services" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-xl shadow-blue-600/30">
            Nuestros Servicios
          </a>
          <a href="#about" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-extrabold text-xl transition-all border border-slate-800 shadow-lg">
            ¿Quiénes Somos?
          </a>
        </div>

        <div className="mt-24 w-full max-w-6xl rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Ingeniería Avanzada" 
            className="w-full h-[500px] object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-32 bg-slate-900/20 scroll-mt-24" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">Liderando con <br/>Tecnología</h2>
            <div className="w-24 h-2 bg-blue-600 mb-10 rounded-full"></div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              En <span className="text-blue-400 font-extrabold uppercase">Cruz Automations</span> desarrollamos ecosistemas inteligentes que aprenden y evolucionan con tu negocio.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
                <div className="text-4xl font-extrabold text-blue-500 mb-2">+150</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest">Éxitos</div>
              </div>
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
                <div className="text-4xl font-extrabold text-blue-500 mb-2">24/7</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest">Monitoreo</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group p-4 bg-black rounded-full shadow-2xl border border-slate-800 transition-transform duration-700 hover:rotate-3">
              <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-black rounded-full flex flex-col items-center justify-center border border-slate-800 shadow-inner overflow-hidden relative">
                 <div className="flex flex-col items-center justify-center z-10">
                    <span className="text-white text-[12rem] font-black tracking-tighter leading-none select-none">CX</span>
                    <span className="text-white text-xl font-extrabold tracking-[0.6em] mt-4 border-t border-white/20 pt-4 px-8 select-none">AUTOMATIONS</span>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Services Grid Section (Matching Screenshot) */}
      <section id="services-section" className="px-6 md:px-12 py-32 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">Nuestros Servicios</h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones de alto impacto diseñadas para escalar tu productividad mediante IA.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-[#0f172a] border border-slate-800/50 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 group flex flex-col h-full">
              <div className="h-56 relative overflow-hidden">
                <img src={service.imageUrl} className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" alt={service.title} />
                <div className="absolute bottom-6 left-8 text-white">
                  <span className="text-5xl font-black tracking-tighter opacity-90">{service.icon}</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold mb-4 text-white tracking-tight">{service.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow">{service.shortDescription}</p>
                <a href={`#/services/${service.id}`} className="text-blue-500 font-extrabold flex items-center gap-2 hover:gap-4 transition-all">
                  Ver detalles 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <a href="#/services" className="inline-block text-blue-500 font-extrabold text-2xl hover:text-blue-400 border-b-2 border-blue-500/20 pb-2 hover:border-blue-500 transition-all">
            Ver todos los servicios de automatización
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 to-slate-900 rounded-[3rem] p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-tight relative z-10">¿Listos para la <br/>próxima fase?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto opacity-80 relative z-10">
            Únete a las empresas que ya están ahorrando miles de horas de trabajo manual gracias a CX.
          </p>
          <a href="https://wa.me/qr/WQT6VYQRFZACF1" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block bg-white text-blue-900 px-12 py-6 rounded-2xl font-extrabold text-2xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
            Contactar vía WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
