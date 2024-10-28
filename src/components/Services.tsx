import { Brain, Heart, Shield, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Terapia con IA",
      description: "Combinando terapia tradicional con insights de IA para una comprensión más profunda y planes de tratamiento personalizados."
    },
    {
      icon: Heart,
      title: "Inteligencia Emocional",
      description: "Desarrolla una mejor conciencia y regulación emocional a través del reconocimiento avanzado de patrones emocionales."
    },
    {
      icon: Shield,
      title: "Espacio Seguro",
      description: "Sesiones completamente confidenciales con protección de privacidad y encriptación de última generación."
    },
    {
      icon: Sparkles,
      title: "Crecimiento Personal",
      description: "Estrategias de desarrollo personal basadas en datos y adaptadas a tus objetivos y desafíos únicos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-purple-200">Soluciones innovadoras para el bienestar mental moderno</p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-700/30">
              <service.icon className="h-12 w-12 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-purple-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}