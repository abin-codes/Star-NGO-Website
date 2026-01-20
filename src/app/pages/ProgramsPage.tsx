import { motion } from 'motion/react';
import { Home, TrendingUp, BookOpen, Heart } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

const programs = [
  {
    id: 1,
    title: 'Kaithangu',
    subtitle: 'Rehabilitation & Shelter',
    icon: Home,
    description: 'This programme will support transgender persons facing homelessness, family rejection, or crisis situations. Temporary shelter support, referrals to safe housing, and rehabilitation assistance will be provided. STAR will also work with institutions and local authorities to ensure access to long-term housing options and reintegration support.',
    image: 'https://plus.unsplash.com/premium_photo-1723485693585-274b37b3c12e?q=80&w=1855&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Safe shelter space',
    stats: { beneficiaries: '70+', since: '2025' }
  },
  {
    id: 2,
    title: 'Udyamam',
    subtitle: 'Skill Development & Livelihood',
    icon: TrendingUp,
    description: 'This is a livelihood and skill-development programme that enables transgender persons to achieve economic independence through diverse, vocational pathways. The programme supports training in areas such as hospitality, technical trades, digital services, entrepreneurship, and other emerging livelihood options aligned with individual aptitude and market demand. It promotes self-employment, wage employment, and micro-enterprises, while also facilitating financial literacy, access to government schemes, and long-term livelihood mentoring.',
    image: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Vocational training session',
    stats: { beneficiaries: '58+', since: '2025' }
  },
  {
    id: 3,
    title: 'Vidyamitram',
    subtitle: 'Continuing Education',
    icon: BookOpen,
    description: 'This programme supports transgender persons who wish to resume or continue their education. STAR will assist with enrolment in open schooling, literacy programmes, bridge courses, and vocational education. Academic guidance, mentoring, and follow-up support will be provided to reduce dropouts and encourage lifelong learning.',
    image: 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Education learning group',
    stats: { beneficiaries: '63+', since: '2025' }
  },
  {
    id: 4,
    title: 'Sahachari',
    subtitle: 'Psycho-Social Support',
    icon: Heart,
    description: 'Sahachari provides mental health and emotional support to transgender persons through counselling, peer mentoring, and group sessions. The programme addresses stress, identity-related challenges, social isolation, and trauma, promoting resilience, dignity, and holistic well-being.',
    image: 'https://plus.unsplash.com/premium_photo-1736961713735-d39d6e1516fa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Counseling support session',
    stats: { beneficiaries: '50+', since: '2025' }
  }
];

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative px-6 pt-40 pb-20 overflow-hidden">
        {/* Wireframe Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #C4A661 1px, transparent 1px),
              linear-gradient(180deg, #C4A661 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#C4A661]/10 rounded-full mb-6">
              <span className="text-sm font-bold text-[#C4A661] tracking-wider uppercase">
                Our Core Programs
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-[#121212] mb-6">
              Empowering Lives Through<br />
              <span className="text-[#C4A661]">Structured Action</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four integrated programs designed to address the multidimensional needs of the transgender community with dignity, care, and proven impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid - Zig-Zag Layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Container with Glassmorphism */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-3xl"
                  >
                    {/* Image with desaturated effect */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
                      <ImageWithFallback
                        src={program.image}
                        alt={program.alt}
                        className="w-full h-full object-cover grayscale-[30%] contrast-110"
                      />
                      {/* Dark overlay for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Floating 3D Wireframe */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 3, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute ${
                        isEven ? '-top-6 -right-6' : '-top-6 -left-6'
                      } w-32 h-32 border-2 border-[#C4A661] rounded-2xl transform rotate-12 opacity-30`}
                    />

                    {/* Glass Stats Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className={`absolute bottom-6 ${
                        isEven ? 'right-6' : 'left-6'
                      } bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl`}
                    >
                      <div className="flex gap-6">
                        <div>
                          <div className="text-2xl font-black text-[#C4A661]">
                            {program.stats.beneficiaries}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">Beneficiaries</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-[#C4A661]">
                            {program.stats.since}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">Since</div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* 3D Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <div className="relative inline-block">
                      {/* Gold wireframe background */}
                      <div className="absolute inset-0 border-2 border-[#C4A661]/30 rounded-2xl transform rotate-6" />
                      <div className="relative bg-white/80 backdrop-blur-xl border border-[#C4A661]/20 rounded-2xl p-5 shadow-lg">
                        <Icon className="w-12 h-12 text-[#C4A661]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-black text-[#121212] mb-2">
                      {program.title}
                    </h2>
                    <h3 className="text-xl font-bold text-[#C4A661] mb-6">
                      {program.subtitle}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {program.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4A661]/10 text-[#C4A661] font-bold rounded-full border-2 border-[#C4A661]/20 hover:bg-[#C4A661] hover:text-white transition-all"
                    >
                      Get Involved
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#121212] mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Whether you want to volunteer, donate, or partner with us, your support helps create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  onNavigate('membership');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all"
              >
                Become a Member
              </motion.button>
              <motion.button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#121212] border-2 border-[#121212] font-bold tracking-wide rounded-full hover:bg-[#121212] hover:text-white transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
