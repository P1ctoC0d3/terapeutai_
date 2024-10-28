import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import BackgroundDecoration from './components/BackgroundDecoration';

function App() {
  return (
    <div className="min-h-screen bg-purple-950 relative overflow-hidden">
      <BackgroundDecoration />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="relative bg-purple-950/50 backdrop-blur-sm text-white py-8 border-t border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} TerapeutAI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;