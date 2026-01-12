
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
    <div className="pt-24 min-h-screen bg-black text-white">
      {/* Hero Section - Logo Focus BW */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Mono Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full"></div>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter leading-none max-w-6xl uppercase">
          Cruz Automations: <br/><span className="gradient-text">Automatización Inteligente</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed">
          <span className="text-white font-bold">Liderando el futuro</span> de la tecnología autónoma.
        </p>

        {/* Logo Visual Hero - Monochromatic Style */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-zinc-500/20 rounded-full blur opacity-25"></div>
          
          <div className="relative bg-[#050505] rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col items-center">
               <span className="text-8xl md:text-9xl font-black tracking-tighter text-white leading-none">CX</span>
               <span className="text-lg md:text-xl font-bold tracking-[0.3em] text-zinc-400 mt-2 uppercase">AUTOMATIONS</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <a href="#/services" className="bg-white hover:bg-zinc-200 text-black px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-xl shadow-white/5 transform hover:-translate-y-1">
            Nuestros Servicios
          </a>
          <a href="#about" className="bg-black hover:bg-zinc-900 text-white px-10 py-5 rounded-2xl font-extrabold text-xl transition-all border border-white/20 shadow-lg transform hover:-translate-y-1">
            ¿Quiénes Somos?
          </a>
        </div>

        {/* Feature Visual */}
        <div className="w-full max-w-6xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/40">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Tecnología de Vanguardia" 
            className="w-full h-[400px] md:h-[600px] object-cover opacity-90"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-32 bg-zinc-900/10 scroll-mt-24" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter uppercase">¿Quiénes Somos?</h2>
            <div className="w-24 h-2 bg-white mb-10 rounded-full"></div>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              En Cruz Automations, somos apasionados por la eficiencia. Nos especializamos en integrar tecnologías de última generación para crear entornos inteligentes y productivos.
            </p>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed">
              Nuestra misión es empoderar a empresas y hogares mediante la automatización de tareas repetitivas, permitiendo que las personas se enfoquen en lo que realmente importa.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
              alt="Ingeniería Avanzada" 
              className="relative rounded-[2.5rem] shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-section" className="px-6 md:px-12 py-32 bg-black scroll-mt-24">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter uppercase">Servicios Destacados</h2>
          <div className="w-32 h-2 bg-white mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Soluciones de alto impacto diseñadas para escalar tu productividad mediante IA y Automatización.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 group flex flex-col h-full shadow-lg">
              <div className="h-56 relative overflow-hidden">
                <img src={service.imageUrl} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" alt={service.title} />
                <div className="absolute bottom-6 left-8 text-white">
                  <span className="text-5xl font-black tracking-tighter opacity-90">{service.icon}</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold mb-4 text-white tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 mb-8 flex-grow">{service.shortDescription}</p>
                <a href={`#/services/${service.id}`} className="text-white font-extrabold flex items-center gap-2 hover:gap-4 transition-all">
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
          <a href="#/services" className="inline-block text-white font-extrabold text-2xl hover:text-zinc-300 border-b-2 border-white/10 pb-2 hover:border-white transition-all">
            Explorar todos los servicios
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-tight relative z-10 text-black uppercase">¿Listos para la <br/>próxima fase?</h2>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto relative z-10">
            Únete a las empresas que ya están ahorrando miles de horas de trabajo manual gracias a Cruz Automations.
          </p>
          <a href="https://wa.me/qr/WQT6VYQRFZACF1" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block bg-black text-white px-12 py-6 rounded-2xl font-extrabold text-2xl hover:bg-zinc-900 transition-all transform hover:scale-105 shadow-2xl">
            Contactar vía WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;