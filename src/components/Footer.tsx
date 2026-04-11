import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-gray-600 font-mono text-sm relative z-10 bg-white/60 backdrop-blur-md">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-primary transition-colors"><FaGithub size={20} /></a>
        <a href="#" className="hover:text-secondary transition-colors"><FaLinkedin size={20} /></a>
        <a href="#" className="hover:text-tertiary transition-colors"><FaTwitter size={20} /></a>
      </div>
      <p className="hover:text-primary transition-colors cursor-pointer inline-block">
        Diseñado & Construido por Luis Carlos Somoza
      </p>
    </footer>
  );
}
