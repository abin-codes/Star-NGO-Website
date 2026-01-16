import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    { year: '2018', event: 'Foundation & Registration', description: 'Established as a registered NGO' },
    { year: '2019', event: 'First Community Center', description: 'Opened doors to support services' },
    { year: '2021', event: 'Legal Advocacy Program', description: 'Launched nationwide legal aid' },
    { year: '2023', event: 'International Recognition', description: 'UN partnership for global impact' },
    { year: '2026', event: 'Expanding Horizons', description: 'New initiatives across 15 countries' },
  ];

  return (
    <section id="about" ref={ref} className="relative min-h-screen py-32 px-6">
      {/* Dimming overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-white tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Building a World of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A661] to-yellow-400">
                Acceptance
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                STAR is a leading international non-governmental organization dedicated to advancing the rights, 
                dignity, and well-being of transgender and gender-diverse individuals worldwide.
              </p>
              
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Through advocacy, education, and community empowerment, we work to create inclusive societies 
                where every person can live authentically and safely. Our comprehensive programs span legal 
                support, healthcare access, employment opportunities, and social integration.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C4A661] rounded-full" />
                  <span className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>Registered NGO since 2018</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C4A661] rounded-full" />
                  <span className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>Operating in 15+ countries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C4A661] rounded-full" />
                  <span className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>UN-recognized partner organization</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Timeline */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Timeline node */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C4A661] to-yellow-600 flex items-center justify-center shadow-lg shadow-[#C4A661]/50 relative z-10"
                    >
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </motion.div>
                    
                    {/* Connecting line */}
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-20 bg-gradient-to-b from-[#C4A661] to-transparent mt-2" />
                    )}
                  </div>

                  {/* Content card with glass effect */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex-1 p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl group-hover:border-[#C4A661]/30 transition-all"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-black text-[#C4A661]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.year}
                      </span>
                      <h3 className="text-white font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.event}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Background glow */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#C4A661]/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
