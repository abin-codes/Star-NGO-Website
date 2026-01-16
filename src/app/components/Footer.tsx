import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import starngologo from '../../assets/starngologo.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <img src={starngologo} alt="STAR Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Society for Transgender Affirmation and Recognition. Working towards equality, dignity, and recognition for all.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Registered under Kerala Societies Registration Act, 1860
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-bold text-[#121212] mb-4 text-sm tracking-wider uppercase">Sitemap</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('home')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Home</button></li>
              <li><button onClick={() => handleNavigation('who-we-are')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Who We Are</button></li>
              <li><button onClick={() => handleNavigation('programs')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Programs</button></li>
              <li><button onClick={() => handleNavigation('initiatives')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Initiatives</button></li>
              <li><button onClick={() => handleNavigation('leadership')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Leadership</button></li>
              <li><button onClick={() => handleNavigation('membership')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Membership</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="text-gray-600 hover:text-[#C4A661] text-sm transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-[#121212] mb-4 text-sm tracking-wider uppercase">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-[#C4A661] hover:shadow-lg transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-[#C4A661] hover:shadow-lg transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-[#C4A661] hover:shadow-lg transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-[#C4A661] hover:shadow-lg transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:info@star.org" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-[#C4A661] hover:shadow-lg transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2026 STAR. Registered Society. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#C4A661] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C4A661] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}