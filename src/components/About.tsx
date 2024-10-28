export default function About() {
  return (
    <section id="about" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Dra. Sara"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dra. Sara Anderson</h2>
            <p className="mt-4 text-lg text-gray-600">
              Con más de 15 años de experiencia en psicología clínica y una especialización en terapia potenciada por IA, combino enfoques terapéuticos tradicionales con tecnología de vanguardia para proporcionar soluciones únicas y efectivas para la salud mental.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-purple-600">15+</p>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-purple-600">2000+</p>
                <p className="text-gray-600">Pacientes Ayudados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}