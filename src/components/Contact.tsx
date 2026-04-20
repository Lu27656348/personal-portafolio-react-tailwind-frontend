import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 flex items-center justify-center bg-black border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[400px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 font-mono text-sm tracking-[0.3em] font-bold mb-4 uppercase"
        >
          ¿Qué Sigue?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-lg"
        >
          Contacto
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-12 font-light"
        >
          Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta o simplemente quieras saludar, ¡te responderé lo antes posible!
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-xl shadow-2xl flex flex-col gap-6 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-sm font-bold tracking-[0.1em] uppercase">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" className="bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm font-bold tracking-[0.1em] uppercase">Email</label>
              <input type="email" id="email" placeholder="tu@email.com" className="bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" required />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white text-sm font-bold tracking-[0.1em] uppercase">Mensaje</label>
            <textarea id="message" rows={5} placeholder="Hola, me gustaría hablar sobre..." className="bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none" required></textarea>
          </div>
          <button type="submit" className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-sm tracking-[0.2em] font-bold uppercase transition-all shadow-[0_0_0_rgba(220,38,38,0)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] mx-auto w-full md:w-auto">
            Enviar Mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}
