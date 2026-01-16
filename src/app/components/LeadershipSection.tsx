import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const leaders = [
    {
      name: 'Dr. Maya Patel',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzY4Mzk0Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Leading STAR\'s global initiatives with 15+ years in human rights advocacy',
    },
    {
      name: 'Jordan Chen',
      role: 'Director of Programs',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODM0Njg1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Spearheading community outreach and education programs worldwide',
    },
    {
      name: 'Alex Rivera',
      role: 'Legal Counsel',
      image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODM4OTc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Expert in international law and transgender rights advocacy',
    },
    {
      name: 'Dr. Sam Thompson',
      role: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBlcnNvbnxlbnwxfHx8fDE3Njg0MTA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Pioneering research in gender-affirming healthcare and policy',
    },
  ];

  return (
    <section id="leadership" ref={ref} className="relative min-h-screen py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Leadership
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-wide mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Visionary leaders dedicated to creating lasting change
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Card with glass effect */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:border-[#C4A661]/30 transition-all duration-300"
              >
                {/* Avatar with gold rim */}
                <div className="relative mx-auto mb-6 w-40 h-40">
                  {/* Gold rim */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C4A661] via-yellow-500 to-[#C4A661] p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-black" />
                  </div>
                  
                  {/* Avatar image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-1 rounded-full overflow-hidden border-2 border-black"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C4A661]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C4A661]/30 to-yellow-600/30 blur-xl opacity-50 group-hover:opacity-100 transition-opacity -z-10" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-black text-white mb-1 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {leader.name}
                  </h3>
                  <p className="text-[#C4A661] text-sm font-bold mb-3 tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {leader.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {leader.bio}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#C4A661]/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#C4A661]/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
