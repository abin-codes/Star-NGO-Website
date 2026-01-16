import { motion } from 'motion/react';
import { FileText, Heart, TrendingUp, Shield, Plus } from 'lucide-react';

interface InitiativesPageProps {
  onNavigate: (page: string) => void;
}

export function InitiativesPage({ onNavigate }: InitiativesPageProps) {
  const initiatives = [
    {
      icon: FileText,
      title: 'Legal Aid',
      description: 'Identity documents & Human Rights protections',
      details: [
        'Assistance with name and gender marker changes',
        'Legal representation in discrimination cases',
        'Rights education and advocacy',
        'Policy reform initiatives'
      ],
      color: 'from-blue-500 to-cyan-500',
      span: 'md:col-span-1'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Inclusive healthcare & Mental support',
      details: [
        'Access to gender-affirming care',
        'Mental health counseling services',
        'STI awareness and prevention',
        'Healthcare provider training'
      ],
      color: 'from-rose-500 to-pink-500',
      span: 'md:col-span-1'
    },
    {
      icon: TrendingUp,
      title: 'Livelihood',
      description: 'Skill development & Economic empowerment',
      details: [
        'Vocational training programs',
        'Job placement assistance',
        'Entrepreneurship support',
        'Financial literacy workshops'
      ],
      color: 'from-green-500 to-emerald-500',
      span: 'md:col-span-1'
    },
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Shelter & Rehabilitation',
      details: [
        '24/7 crisis helpline',
        'Emergency shelter services',
        'Safety planning and support',
        'Rehabilitation programs'
      ],
      color: 'from-orange-500 to-amber-500',
      span: 'md:col-span-1'
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
            Our Initiatives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to support and empower the transgender community
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${initiative.span} group cursor-pointer`}
              >
                {/* Glass Card with 3D Lift Effect */}
                <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-[#121212] mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {initiative.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {initiative.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Plus className="w-5 h-5 text-[#C4A661] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Wireframe Border */}
                  <div className="absolute inset-0 border-2 border-[#C4A661]/0 group-hover:border-[#C4A661]/40 rounded-3xl transition-all duration-300 pointer-events-none" />

                  {/* 3D Corner Accent */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 border-2 border-gray-200 rounded-2xl transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-[#C4A661]/10 to-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/50"
        >
          <h2 className="text-3xl font-black text-[#121212] mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Whether through volunteering, donations, or partnerships, every contribution matters.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}