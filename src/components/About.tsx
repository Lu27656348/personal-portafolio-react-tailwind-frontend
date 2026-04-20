import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-black border-y border-white/5 overflow-hidden">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white px-2">Sobre Mí</h2>
          <div className="h-[1px] bg-gradient-to-r from-red-600 to-transparent flex-grow max-w-xs md:max-w-md"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 space-y-6 text-lg leading-relaxed font-light"
          >
            <p>
              ¡Hola! Mi nombre es Luis Carlos y disfruto creando cosas que viven en internet. 
              Mi interés en el desarrollo web comenzó cuando decidí intentar editar temas personalizados 
              para foros, lo que me enseñó mucho sobre HTML y CSS.
            </p>
            <p>
              Mi enfoque principal hoy en día es construir aplicaciones y experiencias digitales accesibles e 
              inclusivas en <span className="text-red-500 font-bold">React y TypeScript</span>.
            </p>
            <p>
              Me encanta el diseño minimalista, los entornos modernos y convertir ideas en interfaces increíbles. 
              Siempre busco optimizar el rendimiento y la estética al límite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 group bg-black"
          >
            <div className="absolute inset-0 bg-red-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <div className="w-full h-full bg-gradient-to-tr from-black via-red-950 to-black flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
               <span className="text-red-900/40 text-9xl font-black tracking-widest">LCS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
