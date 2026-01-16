import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#121212] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to STAR for support, partnerships, or general inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    STAR Office<br />
                    Ernakulam, Kerala<br />
                    India - 682589
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">Email</h3>
                  <p className="text-gray-700">info@starkerala.org</p>
                  <p className="text-gray-700">support@starkerala.org</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">Phone</h3>
                  <p className="text-gray-700">+91 8921427289</p>
                  <p className="text-sm text-gray-600 mt-1">24/7 Crisis Helpline</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C4A661] to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">Office Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Glass Map Container */}
            <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/50 h-full min-h-[600px]">
              {/* Map Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                {/* Decorative Wireframe */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(90deg, #C4A661 1px, transparent 1px),
                    linear-gradient(180deg, #C4A661 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }} />
                
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-[#C4A661] mx-auto mb-4" />
                  <p className="text-lg font-bold text-[#121212]">Map Location</p>
                  <p className="text-gray-600">Ernakulam, Kerala</p>
                </div>
              </div>

              {/* You can replace this with an actual map embed */}
              {/* <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              /> */}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-[#C4A661]/10 to-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/50"
        >
          <h2 className="text-3xl font-black text-[#121212] mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our 24/7 crisis helpline is always available for those in need of urgent support
          </p>
          <motion.a
            href="tel:+91XXXXXXXXXX"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-[#C4A661] text-white font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#C4A661]/30 transition-all"
          >
            Call Helpline Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}