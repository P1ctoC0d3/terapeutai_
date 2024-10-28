import { Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const features = [
    "Acceso ilimitado 24/7",
    "Análisis con IA en tiempo real",
    "Plan personalizado de desarrollo",
    "Soporte continuo por WhatsApp",
    "Seguimiento de progreso diario"
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Comienza Tu Viaje</h2>
          <p className="mt-4 text-xl text-purple-200">Apoyo psicológico accesible y efectivo</p>
        </div>

        <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:scale-105 transition-all duration-300">
          <div className="text-center">
            <div className="flex justify-center items-baseline mb-8">
              <span className="text-4xl font-extrabold text-white">9.90€</span>
              <span className="text-xl text-purple-200 ml-2">/mes</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-purple-100">
                  <Check className="h-5 w-5 text-purple-300 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="https://buy.stripe.com/9AQ5lN1405Cj1Hi3ce" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Comenzar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}