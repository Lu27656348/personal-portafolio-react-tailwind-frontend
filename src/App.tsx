import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-red-500/30 text-white font-sans overflow-x-hidden w-full bg-black">
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
