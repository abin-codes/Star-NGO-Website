import { motion } from 'motion/react';
import { Target, Eye, Scale, Heart } from 'lucide-react';

interface WhoWeArePageProps {
  onNavigate: (page: string) => void;
}

export function WhoWeArePage({ onNavigate }: WhoWeArePageProps) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#121212] mb-6">
            Our Story & Vision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a future where every transgender individual is affirmed, recognized, and celebrated
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-gradient-to-br from-[#C4A661]/10 to-white/60 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C4A661] to-yellow-600 flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-[#121212]">Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A just and inclusive society where transgender individuals live with complete freedom, dignity, and full recognition of their identity and rights.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-gradient-to-br from-blue-500/10 to-white/60 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-[#121212]">Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To affirm identity and empower the transgender community through comprehensive healthcare, legal support, economic opportunities, and crisis intervention services.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black text-[#121212] text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: 'Dignity & Respect', desc: 'Every individual deserves honor and recognition', color: 'from-rose-500 to-pink-500' },
              { icon: Scale, title: 'Equality & Justice', desc: 'Fighting for equal rights and opportunities', color: 'from-blue-500 to-cyan-500' },
              { icon: Target, title: 'Empowerment', desc: 'Building capacity and self-determination', color: 'from-green-500 to-emerald-500' },
              { icon: Eye, title: 'Transparency', desc: 'Operating with accountability and openness', color: 'from-purple-500 to-indigo-500' }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Governance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-[#F8F9FA] rounded-3xl p-12 border-2 border-gray-200"
        >
          <h2 className="text-3xl font-black text-[#121212] mb-6">Our STORY</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-[#121212]">Society for Transgender Affirmation and Recognition (STAR)</strong> was established in 2025 in Ernakulam to address the challenges faced by transgender persons in accessing rights, dignity, and equal opportunities. STAR was born from collective dialogue among community members, allies, and social work practitioners who recognized the need for a structured, community-led platform. The society provides a safe and empowering space where transgender persons are both beneficiaries and active participants in shaping solutions for their well-being and social inclusion.
            </p>
          </div>
          <br></br>
          <h2 className="text-3xl font-black text-[#121212] mb-6">Governance</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              STAR operates as a registered society under the <strong className="text-[#121212]">Kerala Societies Registration Act, 1860</strong>, ensuring transparency, accountability, and legal compliance in all operations.
            </p>
            <p>
              Our governance structure includes a dedicated Board of Directors comprising experienced professionals in social work, law, healthcare, and community advocacy, all committed to the mission of transgender rights and empowerment.
            </p>
            <p>
              We maintain rigorous financial accountability, regular audits, and transparent reporting to all stakeholders, donors, and the communities we serve.
            </p>
          </div>

          
        </motion.div>
      </div>
    </div>
  );
}