import { motion } from 'motion/react';
import { Target, Eye, Heart, Scale, Users } from 'lucide-react';

export function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Mission & Vision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Guiding principles that drive our work towards transgender affirmation and recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#C4A661]/10 to-yellow-600/10 p-10 rounded-2xl border-2 border-[#C4A661]/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C4A661] to-yellow-600 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              A world where transgender individuals live with complete freedom, dignity, and recognition—where identity is celebrated, rights are protected, and every person can realize their full potential without fear of discrimination or marginalization.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-10 rounded-2xl border-2 border-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              To empower the transgender community through comprehensive support services, advocacy, and education—creating sustainable pathways to legal protection, healthcare access, economic independence, and social integration.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-black text-black mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: 'Dignity & Respect',
                description: 'Every individual deserves to be treated with dignity and respect, regardless of their gender identity. We honor the inherent worth of every person.',
                color: 'from-rose-500 to-pink-500'
              },
              {
                icon: Scale,
                title: 'Equality & Justice',
                description: 'We advocate for equal rights and opportunities, working to dismantle systemic barriers and create a just society for all.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Community & Solidarity',
                description: 'We believe in the power of community and collective action. Together, we are stronger and can create lasting change.',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Target,
                title: 'Empowerment & Agency',
                description: 'We empower individuals to make their own choices, advocate for themselves, and lead lives of purpose and fulfillment.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#C4A661] hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Strategic Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
        >
          <h2 className="text-3xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Strategic Goals (2026-2030)
          </h2>
          <ul className="space-y-4 text-lg text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <li className="flex items-start gap-3">
              <span className="text-[#C4A661] font-black text-xl">→</span>
              <span>Expand legal aid services to cover all districts of Kerala</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4A661] font-black text-xl">→</span>
              <span>Establish partnerships with 50+ healthcare facilities for transgender-affirmative care</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4A661] font-black text-xl">→</span>
              <span>Create 200+ livelihood opportunities through skill development programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4A661] font-black text-xl">→</span>
              <span>Launch state-wide awareness campaigns reaching 1 million+ people</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4A661] font-black text-xl">→</span>
              <span>Develop comprehensive crisis support network with 24/7 helpline services</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}