import { motion } from 'framer-motion';
import { Terminal, Code, Database, Layout } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Desarrollo Frontend', icon: <Layout className="text-secondary mb-3 w-8 h-8" />, desc: 'Especialista en React, Next.js y Tailwind CSS para crear interfaces modernas.' },
    { name: 'Arquitectura Backend', icon: <Database className="text-tertiary mb-3 w-8 h-8" />, desc: 'Diseño de APIs robustas utilizando Node.js, Express y bases de datos SQL/NoSQL.' },
    { name: 'Lenguajes', icon: <Code className="text-primary mb-3 w-8 h-8" />, desc: 'Dominio avanzado de JavaScript, TypeScript y experiencia con Python.' },
    { name: 'DevOps & Herramientas', icon: <Terminal className="text-black mb-3 w-8 h-8" />, desc: 'Control de versiones con Git, contenedores con Docker y despliegues CI/CD.' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-white/50 backdrop-blur-md border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black px-2">Sobre Mí</h2>
          <div className="h-[2px] bg-gradient-to-r from-primary to-transparent flex-grow max-w-xs md:max-w-md"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-700 space-y-6 text-lg leading-relaxed font-medium"
          >
            <p>
              ¡Hola! Mi nombre es Luis Carlos y disfruto creando cosas que viven en internet. 
              Mi interés en el desarrollo web comenzó cuando decidí intentar editar temas personalizados 
              para foros, lo que me enseñó mucho sobre HTML y CSS.
            </p>
            <p>
              Mi enfoque principal hoy en día es construir aplicaciones y experiencias digitales accesibles e 
              inclusivas en <span className="text-primary font-bold">React y TypeScript</span>.
            </p>
            <p>
              Me encanta el diseño minimalista, los entornos modernos y convertir ideas en interfaces increíbles.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/5 border border-black/10 p-6 rounded-3xl hover:bg-black/10 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                {skill.icon}
                <h3 className="text-xl font-bold text-black mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
