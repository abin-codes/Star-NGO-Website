import { motion } from 'motion/react';
import { Clock, Users, Award } from 'lucide-react';

export function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C4A661] tracking-[0.3em] uppercase text-sm font-bold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-8 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Story
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-0" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Founded in 2026 in Ernakulam, Kerala, the Society for Transgender Affirmation and Recognition (STAR) emerged from a collective vision to create a world where every transgender individual can live with dignity, safety, and full recognition of their identity.
            </p>
          </div>

          <h2 className="text-3xl font-black text-black mt-12 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            The Beginning
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            STAR was born from the lived experiences of transgender individuals and allies who recognized the urgent need for a comprehensive support system. In the vibrant city of Ernakulam, a group of activists, healthcare professionals, legal experts, and community members came together with a shared purpose: to dismantle barriers and build bridges toward true equality.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            What began as informal community gatherings quickly evolved into a registered society under the Societies Registration Act, 1860. Our founders understood that lasting change requires institutional support, legal recognition, and sustainable programs that address the multifaceted challenges faced by the transgender community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {[
              { icon: Clock, label: 'Founded', value: '2026' },
              { icon: Users, label: 'Members Served', value: '500+' },
              { icon: Award, label: 'Programs', value: '12+' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-[#C4A661]/10 to-yellow-600/10 rounded-xl border border-[#C4A661]/20 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#C4A661]" />
                  <div className="text-3xl font-black text-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <h2 className="text-3xl font-black text-black mt-12 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            From our inception, STAR has been guided by the principles of empowerment, dignity, and recognition. We believe that transgender rights are human rights, and that every individual deserves access to healthcare, legal protection, employment opportunities, and a life free from discrimination.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Our work in Ernakulam has created ripples of change throughout Kerala and beyond. Through partnerships with government agencies, healthcare institutions, educational organizations, and other NGOs, we've built a comprehensive ecosystem of support that addresses the unique needs of transgender individuals at every stage of their journey.
          </p>

          <h2 className="text-3xl font-black text-black mt-12 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Looking Forward
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Today, STAR stands as a beacon of hope and a testament to what can be achieved when communities unite for a common cause. Our programs continue to expand, our network continues to grow, and our commitment to creating lasting change remains unwavering.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            We invite you to join us in this journey—whether as a member, volunteer, donor, or ally. Together, we can build a future where every transgender individual is affirmed, recognized, and celebrated for who they truly are.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
