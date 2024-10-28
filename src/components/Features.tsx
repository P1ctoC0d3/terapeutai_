import { Brain, Heart, Shield, MessageCircle, Zap, Clock } from 'lucide-react';

export default function Features() {
  const benefits = [
    {
      icon: Brain,
      title: "IA Avanzada",
      description: "Análisis profundo de emociones y patrones de comportamiento para ofrecer apoyo personalizado."
    },
    {
      icon: MessageCircle,
      title: "Chat por WhatsApp",
      description: "Acceso directo a tu terapeuta digital desde la plataforma que ya usas a diario."
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Apoyo emocional instantáneo cuando más lo necesites, sin esperas ni citas previas."
    },
    {
      icon: Shield,
      title: "100% Confidencial",
      description: "Conversaciones encriptadas y privadas, manteniendo tus datos seguros en todo momento."
    },
    {
      icon: Zap,
      title: "Respuesta Inmediata",
      description: "Sin tiempos de espera. Obtén el apoyo que necesitas en el momento que lo necesitas."
    },
    {
      icon: Heart,
      title: "Apoyo Continuo",
      description: "Seguimiento personalizado de tu progreso y adaptación constante a tus necesidades."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">¿Por qué elegir TerapeutAI?</h2>
          <p className="mt-4 text-xl text-purple-200">Tu compañera de bienestar emocional siempre disponible</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-700/30 hover:scale-105">
              <benefit.icon className="h-12 w-12 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-purple-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}