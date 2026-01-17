import { motion } from 'motion/react';
import { Heart, Scale, TrendingUp, Shield, ArrowRight, Home, Users } from 'lucide-react';
import starngologo from '../../assets/starngologo.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
        {/* Animated Wireframe Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #C4A661 1px, transparent 1px),
              linear-gradient(180deg, #C4A661 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-[#C4A661]/10 rounded-full mb-6"
              >
                <span className="text-sm font-bold text-[#C4A661] tracking-wider uppercase">
                  Est. 2025 · Ernakulam, Kerala
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#121212] mb-6 leading-tight">
                Affirming Identity.<br />
                <span className="text-[#C4A661]">Recognizing Dignity.</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                STAR is a registered society dedicated to creating a just and inclusive world for the transgender community through healthcare, legal support, and economic empowerment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    onNavigate('who-we-are');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all flex items-center gap-2 justify-center"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => {
                    onNavigate('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#121212] border-2 border-[#121212] font-bold tracking-wide rounded-full hover:bg-[#121212] hover:text-white transition-all"
                >
                  Join Us
                </motion.button>
              </div>
            </motion.div>

            {/* Right: 3D Glass Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Glass Container with 3D Effect */}
              <div className="relative">
                {/* Floating Wireframe Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#C4A661]/30 rounded-3xl transform rotate-12"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-gray-300/50 rounded-2xl transform -rotate-12"
                />

                {/* Glass Card */}
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl" />
                  <motion.img
                    src={starngologo}
                    alt="STAR Logo"
                    className="relative w-full h-auto drop-shadow-2xl"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Prismatic Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C4A661]/0 via-[#C4A661]/10 to-[#C4A661]/0 rounded-3xl opacity-50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact in Action Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#C4A661]/10 rounded-full mb-4">
              <span className="text-sm font-bold text-[#C4A661] tracking-wider uppercase">
                Real Impact, Real Lives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#121212] mb-4">
              Impact in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs transform lives through community-centered solutions and dedicated support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Collage - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left Photo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-square">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Community workshop"
                      className="w-full h-full object-cover grayscale-[40%] contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Glass border */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl" />
                </motion.div>

                {/* Top Right Photo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl mt-8"
                >
                  <div className="relative aspect-square">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1596633607590-7156877ef734?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Community gathering"
                      className="w-full h-full object-cover grayscale-[40%] contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl" />
                </motion.div>

                {/* Bottom Spanning Photo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl col-span-2"
                >
                  <div className="relative aspect-[2/1]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1657616696868-6e2a3d05b5b4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Safe shelter space"
                      className="w-full h-full object-cover grayscale-[40%] contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl" />
                </motion.div>
              </div>

              {/* Floating 3D Wireframe */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#C4A661] rounded-2xl transform rotate-12 opacity-40 pointer-events-none"
              />
            </motion.div>

            {/* Program Highlights - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Kaithangu Program */}
              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-[#C4A661]/30 rounded-xl transform rotate-6" />
                    <div className="relative bg-[#C4A661]/10 backdrop-blur-lg rounded-xl p-3">
                      <Home className="w-8 h-8 text-[#C4A661]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#121212] mb-2">
                      Kaithangu
                    </h3>
                    <p className="text-sm font-bold text-[#C4A661] mb-3">
                      Rehabilitation & Shelter
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Providing safe, inclusive emergency housing and long-term residential care for those facing homelessness, family rejection, and crisis situations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Udyamam Program */}
              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-[#C4A661]/30 rounded-xl transform rotate-6" />
                    <div className="relative bg-[#C4A661]/10 backdrop-blur-lg rounded-xl p-3">
                      <TrendingUp className="w-8 h-8 text-[#C4A661]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#121212] mb-2">
                      Udyamam
                    </h3>
                    <p className="text-sm font-bold text-[#C4A661] mb-3">
                      Skill Development & Livelihood
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Enabling economic independence through hospitality, technical trades, and entrepreneurship programs with ongoing market connections and mentorship.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => {
                  onNavigate('programs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all inline-flex items-center justify-center gap-2"
              >
                Explore All Programs
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#121212] text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C4A661] via-gray-300 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {[
                {
                  year: '2025',
                  title: 'Foundation',
                  description: 'STAR established in Ernakulam with a vision to create lasting change'
                },
                {
                  year: '2025',
                  title: 'Official Registration',
                  description: 'Registered under Kerala Societies Registration Act, 1860'
                },
                {
                  year: 'Present',
                  title: 'Current Impact',
                  description: 'Serving hundreds through healthcare, legal aid, and livelihood programs'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="inline-block bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50">
                      <span className="text-3xl font-black text-[#C4A661] mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-[#121212] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-6 h-6 bg-[#C4A661] rounded-full border-4 border-white shadow-lg z-10" />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#121212] mb-4">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs addressing the diverse needs of the transgender community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Healthcare',
                description: 'Inclusive medical access and mental health support',
                color: 'from-rose-500 to-pink-500',
                delay: 0
              },
              {
                icon: Scale,
                title: 'Legal Aid',
                description: 'Identity documents and human rights protection',
                color: 'from-blue-500 to-cyan-500',
                delay: 0.1
              },
              {
                icon: TrendingUp,
                title: 'Livelihood',
                description: 'Skill development and economic empowerment',
                color: 'from-green-500 to-emerald-500',
                delay: 0.2
              },
              {
                icon: Shield,
                title: 'Crisis Support',
                description: 'Shelter, rehabilitation, and safety services',
                color: 'from-orange-500 to-amber-500',
                delay: 0.3
              }
            ].map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: area.delay }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  {/* Glass Card */}
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
                    {/* 3D Icon Container */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#121212] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Hover Wireframe Effect */}
                    <div className="absolute inset-0 border-2 border-[#C4A661]/0 group-hover:border-[#C4A661]/30 rounded-2xl transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => {
                onNavigate('initiatives');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#121212] text-white font-bold tracking-wide rounded-full hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Explore All Initiatives <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}