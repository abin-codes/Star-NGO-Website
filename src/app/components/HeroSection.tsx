import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video Placeholder - Dark Cinematic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
        {/* Animated gradient overlay to simulate cinematic video */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-zinc-800/50"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C4A661] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Glass Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mb-8"
        >
          <div className="px-12 py-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <h1 
              className="text-7xl md:text-9xl font-black tracking-[0.2em] text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              STAR
            </h1>
            
            {/* Gold glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C4A661]/20 via-yellow-600/20 to-[#C4A661]/20 blur-3xl -z-10 rounded-3xl" />
          </div>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 tracking-wider mb-4 text-center max-w-2xl"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Affirming Identity. Recognizing Dignity.
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm text-gray-500 tracking-widest uppercase mb-16"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Society for Transgender Affirmation and Recognition
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Scroll to Explore
          </span>
          <ChevronDown className="w-6 h-6 text-[#C4A661]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
