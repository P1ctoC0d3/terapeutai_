import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-purple-950/10 backdrop-blur-sm z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-semibold text-white">TerapeutAI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white/70 hover:text-white transition-colors">Inicio</a>
            <a href="#benefits" className="text-white/70 hover:text-white transition-colors">Beneficios</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Comenzar</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-950/20 backdrop-blur-sm border-t border-white/5">
            <a href="#home" className="block px-3 py-2 text-white/70 hover:text-white transition-colors">Inicio</a>
            <a href="#benefits" className="block px-3 py-2 text-white/70 hover:text-white transition-colors">Beneficios</a>
            <a href="#pricing" className="block px-3 py-2 text-white/70 hover:text-white transition-colors">Comenzar</a>
          </div>
        </div>
      )}
    </nav>
  );
}