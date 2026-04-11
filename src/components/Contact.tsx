import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 flex items-center justify-center bg-white/40 backdrop-blur-sm border-t border-black/5">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-tertiary font-mono text-lg mb-4"
        >
          ¿Qué sigue?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-black mb-6"
        >
          Ponte En Contacto
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg mb-12"
        >
          Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta o simplemente quieras saludar, ¡te responderé lo antes posible!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:hello@example.com" className="inline-block border-2 border-primary text-primary hover:bg-primary/10 px-10 py-5 rounded-md font-mono text-lg transition-colors">
            Saludar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
