import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aurora from './components/Aurora';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 text-gray-900 font-sans overflow-x-hidden w-full">
      {/* Background container */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#000000", "#000000", "#000000"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
