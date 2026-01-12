
import React from 'react';

const Navbar: React.FC = () => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.hash === '#/' || window.location.hash === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism py-5 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black border border-white/20 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg">CX</div>
        <span className="text-xl font-black tracking-tighter uppercase text-white">CRUZ <span className="text-white/60 font-medium">AUTOMATIONS</span></span>
      </div>
      <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
        <a href="#/" onClick={handleHomeClick} className="hover:text-white transition-colors text-white/70">Inicio</a>
        <a href="#/services" className="hover:text-white transition-colors text-white/70">Servicios</a>
        <a href="#about" className="hover:text-white transition-colors text-white/70">Nosotros</a>
        <a href="https://wa.me/qr/WQT6VYQRFZACF1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-white/70">Contacto</a>
      </div>
      <a 
        href="https://wa.me/qr/WQT6VYQRFZACF1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-xl text-sm font-black transition-all transform hover:scale-105 shadow-lg shadow-white/5"
      >
        Cotizar Proyecto
      </a>
    </nav>
  );
};

export default Navbar;