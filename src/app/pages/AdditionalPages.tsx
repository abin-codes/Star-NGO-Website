import { motion } from 'motion/react';

export function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Initiatives</span>
          <h1 className="text-5xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Healthcare</h1>
          <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>Access to gender-affirming medical care, mental health support, and STI awareness programs</p>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p className="text-lg text-gray-700">Our healthcare initiative provides comprehensive medical services tailored to the transgender community...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function LivelihoodPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Initiatives</span>
          <h1 className="text-5xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Livelihood</h1>
          <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>Skill development programs and employment opportunities for economic independence</p>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p className="text-lg text-gray-700">We provide vocational training, job placement assistance, and entrepreneurship support...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function CrisisSupportPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Initiatives</span>
          <h1 className="text-5xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Crisis Support</h1>
          <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>24/7 shelter, rehabilitation, and emergency safety services</p>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p className="text-lg text-gray-700">Our crisis support network provides immediate assistance for individuals facing emergency situations...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function GovernancePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Who We Are</span>
          <h1 className="text-5xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Governance</h1>
          <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>Registered under the Societies Registration Act, 1860 with transparent governance structure</p>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p className="text-lg text-gray-700 mb-6">STAR operates as a registered society under Act 1860, ensuring transparency and accountability in all operations...</p>
            <h2 className="text-3xl font-black text-black mt-12 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Board of Directors</h2>
            <p className="text-lg text-gray-700">Our board comprises experienced professionals committed to transgender rights and social justice...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>Get in touch with STAR for support, partnership, or inquiries</p>
          <div className="space-y-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-black mb-2">Address</h3>
              <p className="text-gray-700">STAR Office, Ernakulam, Kerala, India</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-black mb-2">Email</h3>
              <p className="text-gray-700">info@star-kerala.org</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-black mb-2">24/7 Helpline</h3>
              <p className="text-gray-700">+91-XXX-XXX-XXXX</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
