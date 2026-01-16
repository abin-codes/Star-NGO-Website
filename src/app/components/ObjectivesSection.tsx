import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, BookOpen, Users, Scale, Heart } from 'lucide-react';

export function ObjectivesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const objectives = [
    {
      icon: Shield,
      title: 'Protection',
      description: 'Legal advocacy and protection against discrimination and violence',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Awareness programs and educational resources for communities',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building safe spaces and support networks globally',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Scale,
      title: 'Equality',
      description: 'Advocating for equal rights and policy reform worldwide',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Access to affirming healthcare and mental health support',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="objectives" ref={ref} className="relative min-h-screen py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Mission
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-wide mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Core Objectives
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Driving meaningful change through strategic initiatives and comprehensive support programs
          </p>
        </motion.div>

        {/* Bento Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            
            return (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                className={`relative group ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ perspective: '1000px' }}
              >
                {/* Glass Card */}
                <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl group-hover:border-[#C4A661]/30 transition-all duration-300">
                  {/* Floating 3D Icon in Glass Sphere */}
                  <motion.div
                    className="relative mb-6 mx-auto w-24 h-24"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                  >
                    {/* Glass sphere effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/20 shadow-lg" />
                    
                    {/* Icon with gradient */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${objective.color} rounded-full opacity-80`}>
                      <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Rim lighting effect */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_-2px_10px_rgba(196,166,97,0.4)]" />
                    
                    {/* Outer glow */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${objective.color} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-black text-white mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {objective.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {objective.description}
                    </p>
                  </div>

                  {/* Card edge glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A661]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A661]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/20 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/20 rounded-bl-2xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-[#C4A661]/30 to-transparent"
        />
      </div>
    </section>
  );
}
