import React, { useState } from 'react'
import { motion } from 'framer-motion'

const TripCard = ({ trip, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Shine Effect */}
      {isHovered && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
        />
      )}

      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl overflow-hidden">
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 rounded-2xl" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-48 mb-4 rounded-xl overflow-hidden"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ₹{trip.price}
            </div>
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-2">{trip.title}</h3>
          <p className="text-gray-200 mb-4 line-clamp-2">{trip.description}</p>

          {/* Details */}
          <div className="flex justify-between items-center mb-4 text-sm text-gray-300">
            <span>⏱️ {trip.duration}</span>
            <span>⭐ {trip.rating}</span>
            <span>👥 {trip.groupSize}</span>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default TripCard