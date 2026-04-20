import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiTerraform, SiKubernetes, SiSpringboot, SiTailwindcss, SiTypescript, SiAngular, SiMongodb, SiPostgresql, SiPhp } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa';
import meImage from '../assets/me.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10 overflow-hidden bg-black">

      {/* Red ambient glow from the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-red-900/30 via-red-900/5 to-transparent z-0 pointer-events-none"></div>

      {/* Dark overlay to blend the edges with the next section */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none"></div>

      {/* Red abstract light circles for depth */}
      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[60%] right-[30%] w-[600px] h-[600px] bg-red-700/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* IMAGE & ORBITING ICONS */}
      <div className="absolute inset-0 z-20 pointer-events-none flex">

        {/* Orbiting Tech Icons wrapping container */}
        <motion.div
          className="absolute inset-0 z-20 opacity-80"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[
            { Icon: FaReact, color: '#61DAFB' },
            { Icon: SiTailwindcss, color: '#06B6D4' },
            { Icon: SiSpringboot, color: '#6DB33F' },
            { Icon: SiKubernetes, color: '#326CE5' },
            { Icon: SiTerraform, color: '#7B42BC' },
            { Icon: FaAws, color: '#FF9900' },
            { Icon: SiTypescript, color: '#3178C6' },
            { Icon: SiAngular, color: '#DD0031' },
            { Icon: SiMongodb, color: '#47A248' },
            { Icon: SiPostgresql, color: '#4169E1' },
            { Icon: SiPhp, color: '#777BB4' }
          ].map((tech, i, arr) => {
            const angleRad = (i * 2 * Math.PI) / arr.length;
            const radiusVmin = 34; // Orbital radius
            const x = Math.cos(angleRad) * radiusVmin;
            const y = Math.sin(angleRad) * radiusVmin;

            return (
              <motion.div
                key={i}
                className="absolute z-20 brightness-110"
                style={{
                  top: `calc(50% + ${y}vmin)`,
                  left: `calc(50% + ${x}vmin)`,
                  marginTop: '-25px',
                  marginLeft: '-25px',
                }}
                animate={{ y: [0, -15, 0], rotate: [0, -360] }}
                transition={{
                  y: {
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  },
                  rotate: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                <tech.Icon
                  size={40}
                  style={{ color: tech.color }}
                  className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Central Image with slight red color grading */}
        <div className="absolute inset-0 z-10 flex items-center justify-center mix-blend-normal">
          <img
            src={meImage}
            alt="Luis Carlos Somoza"
            className="w-full h-[90vh] object-contain relative z-10 filter drop-shadow-[0_0_30px_rgba(220,38,38,0.2)] md:translate-y-12"
          />
          {/* subtle red tint overlay on image */}
          <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay z-20 pointer-events-none"></div>
        </div>

        {/* Left Side Metacritic Style Info (Desktop Only) */}
        <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-8 pointer-events-none opacity-80">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] text-red-500 tracking-[0.2em] font-bold">EXPERIENCIA</span>
            <span className="text-xl text-white font-light tracking-[0.1em]">04/AÑOS</span>
          </div>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] text-red-500 tracking-[0.2em] font-bold">PROYECTOS</span>
            <span className="text-lg text-white font-light tracking-[0.1em]">20+</span>
          </div>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] text-red-500 tracking-[0.2em] font-bold">EXCELENCIA</span>
            <span className="text-lg text-white font-light tracking-[0.1em]">5/5</span>
          </div>
        </div>

        {/* Centered Typography: Death Stranding Style */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className="flex flex-col items-center justify-center w-full mt-[15vh]">
            <h2 className="text-sm sm:text-base md:text-xl text-slate-300 font-medium tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 drop-shadow-md text-center">
              Luis Carlos Somoza
            </h2>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-white tracking-[0.1em] md:tracking-[0.5em] uppercase text-center drop-shadow-2xl leading-tight">
              S O F T W A R E
              <br />
              <span className="ml-[0.2em]">E N G I N E E R</span>
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-16 md:mt-24 pointer-events-auto">
              <a href="#projects" className="px-10 py-4 bg-transparent border border-white/40 text-white text-sm tracking-[0.3em] uppercase hover:bg-white/10 hover:border-white transition-all flex items-center gap-3 backdrop-blur-sm">
                PROJECTS <ArrowRight size={14} />
              </a>
              <a href="#contact" className="px-10 py-4 bg-white text-black text-sm tracking-[0.3em] uppercase font-bold hover:bg-red-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                CONTACT ME
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
