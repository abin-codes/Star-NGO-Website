import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import starngologo from '../../assets/starngologo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg' 
          : 'bg-white/60 backdrop-blur-md'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation('home')} className="flex items-center">
            <motion.img
              src={starngologo}
              alt="STAR Logo"
              className="h-14 w-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`text-sm font-semibold transition-colors tracking-wide ${
                currentPage === 'home' ? 'text-[#C4A661]' : 'text-[#121212] hover:text-[#C4A661]'
              }`}
            >
              Home
            </button>

            {/* Who We Are Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-[#121212] hover:text-[#C4A661] transition-colors tracking-wide">
                Who We Are <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button
                  onClick={() => handleNavigation('who-we-are')}
                  className="block w-full text-left px-6 py-3 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661] first:rounded-t-2xl"
                >
                  Our Story & Vision
                </button>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-[#121212] hover:text-[#C4A661] transition-colors tracking-wide">
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button
                  onClick={() => handleNavigation('programs')}
                  className="block w-full text-left px-6 py-3 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661] first:rounded-t-2xl border-b border-gray-200/50"
                >
                  All Programs
                </button>
                <div className="px-6 py-2">
                  <div className="text-xs font-bold text-gray-400 mb-2">Core Projects</div>
                </div>
                <button
                  onClick={() => handleNavigation('programs')}
                  className="block w-full text-left px-6 py-2 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661]"
                >
                  Kaithangu
                </button>
                <button
                  onClick={() => handleNavigation('programs')}
                  className="block w-full text-left px-6 py-2 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661]"
                >
                  Udyamam
                </button>
                <button
                  onClick={() => handleNavigation('programs')}
                  className="block w-full text-left px-6 py-2 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661]"
                >
                  Vidyamitram
                </button>
                <button
                  onClick={() => handleNavigation('programs')}
                  className="block w-full text-left px-6 py-2 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661] last:rounded-b-2xl"
                >
                  Sahachari
                </button>
              </div>
            </div>

            {/* Initiatives Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-[#121212] hover:text-[#C4A661] transition-colors tracking-wide">
                Initiatives <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button
                  onClick={() => handleNavigation('initiatives')}
                  className="block w-full text-left px-6 py-3 text-sm font-medium text-[#121212] hover:bg-gray-50 hover:text-[#C4A661] first:rounded-t-2xl last:rounded-b-2xl"
                >
                  Our Services
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavigation('leadership')}
              className={`text-sm font-semibold transition-colors tracking-wide ${
                currentPage === 'leadership' ? 'text-[#C4A661]' : 'text-[#121212] hover:text-[#C4A661]'
              }`}
            >
              Leadership
            </button>

            <button
              onClick={() => handleNavigation('contact')}
              className={`text-sm font-semibold transition-colors tracking-wide ${
                currentPage === 'contact' ? 'text-[#C4A661]' : 'text-[#121212] hover:text-[#C4A661]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={() => handleNavigation('membership')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all"
            >
              Become a Member
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#121212]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 space-y-3"
          >
            <button
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-4 py-3 text-[#121212] hover:bg-gray-50 rounded-xl font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('who-we-are')}
              className="block w-full text-left px-4 py-3 text-[#121212] hover:bg-gray-50 rounded-xl font-semibold"
            >
              Who We Are
            </button>
            <button
              onClick={() => handleNavigation('programs')}
              className="block w-full text-left px-4 py-3 text-[#121212] hover:bg-gray-50 rounded-xl font-semibold"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavigation('initiatives')}
              className="block w-full text-left px-4 py-3 text-[#121212] hover:bg-gray-50 rounded-xl font-semibold"
            >
              Initiatives
            </button>
            <button
              onClick={() => handleNavigation('leadership')}
              className="block w-full text-left px-4 py-3 text-[#121212] hover:bg-gray-50 rounded-xl font-semibold"
            >
              Leadership
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-4 py-3 text-[#121212] hover:bg-gray-50 rounded-xl font-semibold"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation('membership')}
              className="w-full mt-4 px-6 py-3 bg-[#C4A661] text-white font-bold rounded-full"
            >
              Become a Member
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}