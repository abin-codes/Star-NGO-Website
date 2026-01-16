import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Send } from 'lucide-react';

interface MembershipPageProps {
  onNavigate: (page: string) => void;
}

export function MembershipPage({ onNavigate }: MembershipPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#C4A661]/10 rounded-full mb-6">
            <Users className="w-6 h-6 text-[#C4A661]" />
            <span className="text-sm font-bold text-[#C4A661] tracking-wider uppercase">
              Join Our Community
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#121212] mb-6">
            Become a Member
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join STAR in our mission to create a more inclusive and equitable society
          </p>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Membership Clause */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card */}
            <div className="relative bg-gradient-to-br from-[#C4A661]/10 to-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/50">
              <h2 className="text-3xl font-black text-[#121212] mb-8">
                Membership Clause
              </h2>
              
              <div className="space-y-6">
                <p className="text-2xl font-bold text-gray-800 leading-relaxed">
                  "Open to all individuals irrespective of gender, caste, or religion."
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  STAR believes in the power of inclusive community. Our membership is open to anyone who shares our vision of equality and dignity for the transgender community.
                </p>

                <div className="pt-6 border-t border-gray-300">
                  <h3 className="font-bold text-[#121212] mb-4">Member Benefits:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#C4A661] font-bold">→</span>
                      <span>Participate in decision-making processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C4A661] font-bold">→</span>
                      <span>Access to exclusive events and workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C4A661] font-bold">→</span>
                      <span>Networking opportunities with like-minded individuals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C4A661] font-bold">→</span>
                      <span>Volunteer and leadership opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#C4A661]/30 rounded-3xl transform -rotate-12" />
            </div>
          </motion.div>

          {/* Right: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-[#121212] mb-8">
                Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#121212] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-[#C4A661] focus:outline-none transition-colors text-[#121212]"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#121212] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-[#C4A661] focus:outline-none transition-colors text-[#121212]"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#121212] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-[#C4A661] focus:outline-none transition-colors text-[#121212]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Motivation */}
                <div>
                  <label htmlFor="motivation" className="block text-sm font-bold text-[#121212] mb-2">
                    Why do you want to join STAR? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:border-[#C4A661] focus:outline-none transition-colors text-[#121212] resize-none"
                    placeholder="Share your motivation and how you'd like to contribute..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  Submit Application <Send className="w-5 h-5" />
                </motion.button>
              </form>

              <p className="mt-6 text-sm text-gray-600 text-center">
                We'll review your application and get back to you within 3-5 business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}