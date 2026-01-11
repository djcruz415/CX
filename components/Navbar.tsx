
import React from 'react';

const Navbar: React.FC = () => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si ya estamos en el home, hacemos scroll al inicio
    if (window.location.hash === '#/' || window.location.hash === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism py-5 px-6 md:px-12 flex justify-between items-center border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/20">CX</div>
        <span className="text-xl font-black tracking-tighter uppercase">CRUZ <span className="text-blue-500">AUTOMATIONS</span></span>
      </div>
      <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
        <a href="#/" onClick={handleHomeClick} className="hover:text-blue-500 transition-colors">Inicio</a>
        <a href="#/services" className="hover:text-blue-500 transition-colors">Servicios</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">Nosotros</a>
        <a href="https://wa.me/qr/WQT6VYQRFZACF1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Contacto</a>
      </div>
      <a 
        href="https://wa.me/qr/WQT6VYQRFZACF1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-black transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
      >
        Cotizar Proyecto
      </a>
    </nav>
  );
};

export default Navbar;
