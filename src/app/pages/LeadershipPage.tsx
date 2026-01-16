import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

import ancyImg from '../../assets/members/ancy.png';
import jomyImg from '../../assets/members/jomy.png';
import emikiImg from '../../assets/members/emiki.png';
//import ponImg from '../../assets/members/ponmadhini.jpg';
//import mariaImg from '../../assets/members/maria.jpg';
import sreyaImg from '../../assets/members/sreya.png';
//import albertImg from '../../assets/members/albert.jpg';
import basilImg from '../../assets/members/basil.png';

interface LeadershipPageProps {
  onNavigate: (page: string) => void;
}

export function LeadershipPage({ onNavigate }: LeadershipPageProps) {
  const leaders = [
    {
      name: 'Ancy',
      role: 'President / Executive Director',
      image: ancyImg,
      featured: true
    },
    {
      name: 'Jomy',
      role: 'Vice President',
      image: jomyImg,
      featured: false
    },
    {
      name: 'Emikki',
      role: 'Secretary',
      image: emikiImg,
      featured: false
    },
    {
      name: 'Pon Madhini',
      role: ' Joint Secretary',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
      featured: false
    },
    {
      name: 'Maria',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      featured: false
    },
    {
      name: 'Shreya',
      role: 'Manager',
      image: sreyaImg,
      featured: false
    },
    {
      name: 'Albert',
      role: 'Executive Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      featured: false
    },
    {
      name: 'Basil',
      role: 'Executive Member',
      image: basilImg,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#121212] mb-6">
            Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals guiding STAR mission and vision
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group ${leader.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Glass Card */}
              <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Photo Container with Gold Border */}
                <div className="relative mx-auto mb-6" style={{ width: leader.featured ? '200px' : '160px', height: leader.featured ? '200px' : '160px' }}>
                  {/* Gold Border Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C4A661] via-yellow-500 to-[#C4A661] p-1">
                    <div className="w-full h-full rounded-full bg-white" />
                  </div>
                  
                  {/* Photo */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    
                    {/* Hover Overlay with Social Icons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-3">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className={`font-bold text-[#121212] mb-2 ${leader.featured ? 'text-2xl' : 'text-xl'}`}>
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                    {leader.role}
                  </p>
                </div>

                {/* Decorative Wireframe Corner */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-gray-200 rounded-2xl transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}