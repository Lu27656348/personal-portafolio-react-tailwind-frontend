import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-slate-500 font-sans text-xs uppercase tracking-[0.2em] relative z-10 bg-black border-t border-white/5">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-red-500 transition-colors"><FaGithub size={20} /></a>
        <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin size={20} /></a>
        <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter size={20} /></a>
      </div>
      <p className="hover:text-white transition-colors cursor-pointer inline-block">
        Diseñado & Construido por Luis Carlos Somoza
      </p>
    </footer>
  );
}
