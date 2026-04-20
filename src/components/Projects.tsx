import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Una plataforma de comercio electrónico completa construida con Next.js y Stripe. Incluye panel de administración y analíticas.',
      tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    },
    {
      title: 'Task Management System',
      desc: 'Aplicación para equipos para gestionar tareas ágiles con funcionalidad drag-and-drop y actualizaciones en tiempo real.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
    },
    {
      title: 'AI Content Generator',
      desc: 'Herramienta SaaS que utiliza la API de OpenAI para generar contenido de marketing optimizado para SEO.',
      tags: ['TypeScript', 'OpenAI', 'Tailwind', 'Vercel'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-black border-y border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 justify-end"
        >
          <div className="h-[1px] bg-gradient-to-l from-red-600 to-transparent flex-grow max-w-xs md:max-w-md"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white px-2">Proyectos</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-3/5 group relative overflow-hidden rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-red-900/30 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-start text-left z-20`}>
                <p className="text-red-500 font-mono text-sm mb-2 font-bold tracking-wider">Proyecto Destacado</p>
                <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-md">{project.title}</h3>
                
                <div className={`bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:w-[120%] ${index % 2 !== 0 ? '' : 'md:-ml-[20%]'} mb-6 shadow-xl relative z-30`}>
                  <p className="text-slate-300 text-base">{project.desc}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-4 mb-8 text-sm font-mono text-red-500 font-medium ${index % 2 !== 0 ? 'justify-start' : 'justify-start md:justify-end'} w-full`}>
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                    <FaGithub size={22} />
                  </a>
                  <a href={project.demo} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
