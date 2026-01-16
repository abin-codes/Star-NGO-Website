import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function GlassNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A661] to-yellow-600 flex items-center justify-center">
            <span className="text-black font-black text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>S</span>
          </div>
          <span className="text-xl font-black tracking-wider text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            STAR
          </span>
        </motion.div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Objectives', 'Leadership', 'Testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm text-gray-300 hover:text-[#C4A661] transition-colors tracking-wide"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Join Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-[#C4A661] to-yellow-600 text-black font-bold tracking-wide rounded-full hover:shadow-lg hover:shadow-[#C4A661]/30 transition-all"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          JOIN
        </motion.button>
      </div>
    </motion.nav>
  );
}
