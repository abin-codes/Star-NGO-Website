import { motion } from 'motion/react';
import { Shield, FileText, Users, Scale } from 'lucide-react';

export function LegalAidPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Initiatives</span>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Legal Aid</h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>Comprehensive legal support for rights, identity documents, and protection</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: FileText, title: 'Identity Documentation', desc: 'Assistance with name and gender marker changes on official documents' },
            { icon: Shield, title: 'Rights Protection', desc: 'Legal advocacy against discrimination and violence' },
            { icon: Scale, title: 'Legal Consultation', desc: 'Free legal advice and representation services' },
            { icon: Users, title: 'Policy Advocacy', desc: 'Working towards progressive legislation and policy reform' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-gray-200">
                <Icon className="w-12 h-12 text-[#C4A661] mb-4" />
                <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                <p className="text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
