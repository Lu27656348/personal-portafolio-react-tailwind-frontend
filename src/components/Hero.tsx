import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GridScan } from './GridScan';
import meImage from '../assets/me.png';
import { SiTerraform, SiKubernetes, SiSpringboot, SiTailwindcss, SiTypescript, SiAngular, SiMongodb, SiPostgresql, SiPhp } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10 overflow-hidden bg-slate-950">

      {/* Background layer: GridScan */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">

        <div className="absolute inset-0 z-0 pointer-events-auto">
          <GridScan
            className="w-full h-full"
            scanColor="#61DAFB"
            linesColor="#1e293b"
            gridScale={0.15}
          />
        </div>

        {/* Dark overlay to blend the edges with the next section */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

        {/* IMAGE & ORBITING ICONS */}
        <div className="absolute inset-0 z-20 pointer-events-none flex">

          {/* Orbiting Tech Icons wrapping container */}
          <motion.div
            className="absolute inset-0 z-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
              const radiusVmin = 40; // Radio orbital en vmin
              const x = Math.cos(angleRad) * radiusVmin;
              const y = Math.sin(angleRad) * radiusVmin;

              return (
                <motion.div
                  key={i}
                  className="absolute z-20"
                  style={{
                    top: `calc(50% + ${y}vmin)`,
                    left: `calc(50% + ${x}vmin)`,
                    marginTop: '-25px',
                    marginLeft: '-25px',
                  }}
                  animate={{ y: [0, -15, 0], rotate: [0, -360] }}
                  transition={{
                    y: {
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    },
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  <tech.Icon
                    size={60}
                    style={{ color: tech.color }}
                    className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-slate-800/80 rounded-full p-1 backdrop-blur-sm border border-slate-700"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <img
            src={meImage}
            alt="Luis Carlos Somoza"
            className="w-full h-full object-contain relative z-10"
          />
          
          {/* Centered Title and Subtitle */}
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
            <div className="bg-black/20 backdrop-blur-sm md:backdrop-blur-md px-5 md:px-8 py-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center mt-40 md:mt-64 shadow-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg text-center">
                Luis Carlos Somoza
              </h1>
              <h2 className="text-base md:text-lg lg:text-xl text-slate-200 font-medium drop-shadow-md text-center mt-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-white">
                IT Engineer / Cloud Developer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
