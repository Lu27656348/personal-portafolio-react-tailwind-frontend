import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, SiDocker, SiPostgresql, SiFirebase, SiFigma, SiGit } from 'react-icons/si';
import { X } from 'lucide-react';

type TechItem = {
  name: string;
  icon: any;
  desc: string;
};

export default function Technologies() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const techStack: TechItem[] = [
    { name: 'React', icon: SiReact, desc: 'Utilizado como la piedra angular en la creación de interfaces dinámicas, componetizadas y de alto rendimiento en mis proyectos.' },
    { name: 'TypeScript', icon: SiTypescript, desc: 'Empleo tipos estáticos para construir arquitecturas robustas y predecibles, evitando errores antes del tiempo de ejecución.' },
    { name: 'Next.js', icon: SiNextdotjs, desc: 'Framework principal para aplicaciones Full Stack y SSG, optimizando el SEO y los tiempos de carga drásticamente.' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Mi herramienta preferida para estilado ágil y sistemas de diseño escalables y adaptativos sin salir del JSX.' },
    { name: 'Node.js', icon: SiNodedotjs, desc: 'Motor principal en mis servidores backend para construir APIs rápidas, asíncronas y escalables.' },
    { name: 'Python', icon: SiPython, desc: 'Lo aplico en automatización de tareas, análisis de datos y creación de scripts orientados a lógica compleja.' },
    { name: 'PostgreSQL', icon: SiPostgresql, desc: 'Mi sistema de gestión de bases de datos relacionales preferido para modelados de datos complejos e integridad transaccional.' },
    { name: 'Git', icon: SiGit, desc: 'Estándar absoluto en mi flujo de trabajo para el control de versiones, revisión de código y despliegues colaborativos.' },
    { name: 'Docker', icon: SiDocker, desc: 'Lo utilizo para la contenerización de entornos de desarrollo y producción consistentes, eliminando discrepancias.' },
    { name: 'Firebase', icon: SiFirebase, desc: 'Perfecto para prototipados rápidos, base de datos en tiempo real y flujos de autenticación fluidos.' },
    { name: 'Figma', icon: SiFigma, desc: 'Base para estructurar Wireframes, UI/UX y conceptualizar experiencias de usuarios antes de picar código.' },
  ];

  return (
    <section id="technologies" className="py-32 px-6 relative z-10 bg-black overflow-hidden border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-4 mb-20"
        >
          <p className="text-red-500 font-mono text-sm tracking-[0.3em] font-bold uppercase text-center mb-2">
            Mi Atrio
          </p>
          <div className="flex items-center w-full gap-4 justify-center mb-4">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-red-600 flex-grow max-w-[100px]"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white px-2 tracking-widest uppercase">Tecnologías</h2>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-red-600 flex-grow max-w-[100px]"></div>
          </div>
          <p className="text-slate-400 font-light max-w-xl text-center leading-relaxed px-4">
            Selecciona cualquiera de las herramientas de mi arsenal técnico para explorar en detalle mi experiencia y cómo aplico cada una de ellas en mis proyectos diarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedTech(tech)}
              className="group relative flex flex-col items-center justify-center p-6 bg-zinc-950 border border-white/5 rounded-xl hover:border-red-500/50 hover:bg-black transition-all duration-300 z-10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] rounded-xl transition-all duration-300 -z-10"></div>
              
              <tech.icon className="w-12 h-12 text-slate-600 group-hover:text-red-500 transition-colors duration-300 drop-shadow-md mb-4 group-hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              <span className="text-xs font-bold tracking-[0.15em] text-slate-500 group-hover:text-white transition-colors duration-300 text-center uppercase">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg p-8 bg-zinc-950 border border-red-500/30 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.2)] overflow-hidden"
            >
              {/* Decorative background glow inside modal */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-[50px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <button 
                onClick={() => setSelectedTech(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <selectedTech.icon className="w-10 h-10 text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                <h3 className="text-2xl font-bold tracking-widest text-white uppercase">{selectedTech.name}</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed font-light text-lg">
                {selectedTech.desc}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
