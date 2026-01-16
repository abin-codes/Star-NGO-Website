import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "STAR gave me the courage to live my authentic life. Their legal support helped me navigate the complexities of legal name change and gender marker updates. I'm forever grateful.",
      author: "Sarah Mitchell",
      role: "Community Member",
      location: "New York, USA"
    },
    {
      quote: "The healthcare program connected me with affirming medical professionals who truly understood my journey. For the first time, I felt seen and respected in a medical setting.",
      author: "Alex Kumar",
      role: "Program Participant",
      location: "London, UK"
    },
    {
      quote: "As a parent, STAR's educational resources helped me understand and support my child. Their family counseling program brought our family closer together.",
      author: "Maria Rodriguez",
      role: "Parent & Advocate",
      location: "Madrid, Spain"
    },
    {
      quote: "STAR's employment initiative opened doors I thought were closed forever. Today, I'm thriving in my career and mentoring others in the community.",
      author: "Jamie Park",
      role: "Employment Program Graduate",
      location: "Seoul, South Korea"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" ref={ref} className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Rotating 3D Star Wireframe Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.svg
          width="800"
          height="800"
          viewBox="0 0 200 200"
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4A661" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
          
          {/* 3D Star wireframe */}
          <g stroke="url(#starGradient)" strokeWidth="1" fill="none">
            {/* Outer star */}
            <path d="M 100 20 L 110 70 L 160 70 L 120 100 L 140 150 L 100 120 L 60 150 L 80 100 L 40 70 L 90 70 Z" />
            {/* Inner connecting lines for 3D effect */}
            <line x1="100" y1="20" x2="100" y2="100" opacity="0.5" />
            <line x1="110" y1="70" x2="100" y2="100" opacity="0.5" />
            <line x1="160" y1="70" x2="100" y2="100" opacity="0.5" />
            <line x1="120" y1="100" x2="100" y2="100" opacity="0.5" />
            <line x1="140" y1="150" x2="100" y2="100" opacity="0.5" />
            
            {/* Center point */}
            <circle cx="100" cy="100" r="3" fill="url(#starGradient)" />
          </g>
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Impact Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Voices of Change
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glass card */}
              <div className="relative p-12 md:p-16 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute -top-6 left-12"
                >
                  <div className="p-4 bg-gradient-to-br from-[#C4A661] to-yellow-600 rounded-full shadow-lg shadow-[#C4A661]/50">
                    <Quote className="w-8 h-8 text-black" />
                  </div>
                </motion.div>

                {/* Quote text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-3xl text-white leading-relaxed mb-8 italic"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                {/* Author info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                >
                  <div className="flex-1">
                    <p className="text-xl font-black text-[#C4A661] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-400" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </motion.div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C4A661]/50 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('prev')}
              className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#C4A661]/50 hover:bg-white/10 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-[#C4A661] transition-colors" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="relative"
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#C4A661] w-8' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`} />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('next')}
              className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#C4A661]/50 hover:bg-white/10 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#C4A661] transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
