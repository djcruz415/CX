
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-lg text-white">CX</div>
            <span className="text-lg font-bold">CRUZ AUTOMATIONS</span>
          </div>
          <p className="text-slate-400 max-w-sm">
            Liderando la revolución tecnológica mediante automatización de vanguardia y soluciones inteligentes para el mundo real.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-blue-500">Enlaces</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#/" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#services-section" className="hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Nosotros</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-blue-500">Contacto</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="mailto:djcruz415@gmail.com" className="hover:text-white transition-colors">djcruz415@gmail.com</a></li>
            <li><a href="tel:+50765365356" className="hover:text-white transition-colors">+ 507 6536-5356</a></li>
            <li>Panamá</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Cruz Automations. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
