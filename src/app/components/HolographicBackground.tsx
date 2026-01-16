import { motion } from 'motion/react';

export function HolographicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric stars and constellations */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A661" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#C4A661" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Animated wireframe stars */}
        <motion.g
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Star 1 */}
          <motion.path
            d="M 200 100 L 220 120 L 240 100 L 220 80 Z"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '220px 100px' }}
          />
          
          {/* Connecting lines */}
          <line x1="220" y1="100" x2="350" y2="200" stroke="url(#goldGradient)" strokeWidth="1" />
        </motion.g>

        <motion.g
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          {/* Star 2 */}
          <motion.circle
            cx="80%"
            cy="30%"
            r="40"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '80% 30%' }}
          />
          
          {/* Inner circle */}
          <circle cx="80%" cy="30%" r="25" stroke="url(#goldGradient)" strokeWidth="1" fill="none" opacity="0.5" />
        </motion.g>

        <motion.g
          animate={{
            x: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          {/* Star 3 - Hexagon */}
          <motion.path
            d="M 70% 70% L 72% 68% L 75% 68% L 77% 70% L 75% 72% L 72% 72% Z"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '73.5% 70%' }}
          />
        </motion.g>

        {/* Constellation connecting lines */}
        <motion.g
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#goldGradient)" strokeWidth="0.5" />
          <line x1="30%" y1="40%" x2="50%" y2="35%" stroke="url(#goldGradient)" strokeWidth="0.5" />
          <line x1="50%" y1="35%" x2="70%" y2="50%" stroke="url(#goldGradient)" strokeWidth="0.5" />
        </motion.g>

        {/* Small floating nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${10 + (i * 6)}%`}
            cy={`${20 + (i * 4.5) % 60}%`}
            r="2"
            fill="url(#goldGradient)"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Additional glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C4A661]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
}
