import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: 'Aarav Sharma',
      role: 'Founder & Head Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: '10+ years of mountaineering experience across the Himalayas'
    },
    {
      name: 'Priya Patel',
      role: 'Tour Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Ensuring seamless travel experiences for all our adventurers'
    },
    {
      name: 'Rohan Kumar',
      role: 'Safety Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Wilderness first responder and certified mountain guide'
    },
    {
      name: 'Ananya Singh',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Spreading the love for Indian mountains through storytelling'
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300">
            Passionate experts dedicated to making your trekking experience unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden">
                {/* Image */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-600/20 group-hover:border-green-600/40 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-green-400 font-semibold mb-2">{member.role}</div>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 mt-4">
                  {['linkedin', 'instagram', 'twitter'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-6 h-6 bg-current rounded"></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team