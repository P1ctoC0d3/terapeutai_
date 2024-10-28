import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tu Compañera de Terapia Digital 24/7
            </h1>
            <p className="mt-6 text-lg text-purple-100">
              Accede a soporte psicológico instantáneo a través de WhatsApp. TerapeutAI combina la última tecnología en IA con principios terapéuticos probados para estar siempre a tu lado.
            </p>
            <div className="mt-8">
              <a href="#pricing" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                Conecta por WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/foto_chat.png"
              alt="Terapeuta Profesional"
              className="rounded-lg shadow-2xl w-2/3" // Se ha reducido el tamaño de la imagen
            />
            <div className="absolute -bottom-4 -right-0.5 bg-purple-900/50 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-purple-700/30 hover:scale-105 transition-all duration-300 cursor-pointer hover:translate-y-2">
              <p className="text-sm font-medium text-white">Disponible 24/7</p>
              <p className="text-xs text-purple-200">Respuesta instantánea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}