import React from 'react'
import { motion } from 'framer-motion'
import TripCard from '../components/TripCard'

const Trips = () => {
  const trips = [
    {
      id: 1,
      title: 'Himalayan Base Camp Trek',
      description: 'Experience the majestic Himalayas with our 10-day guided trek to the base camp. Perfect for beginners and experienced trekkers alike.',
      price: '25,999',
      duration: '10 Days',
      rating: '4.9',
      groupSize: '12 People',
      image: 'https://images.unsplash.com/photo-1464822759844-d150ae4d4dd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Valley of Flowers',
      description: 'Walk through vibrant alpine meadows in this UNESCO World Heritage site. Seasonal trek available from June to September.',
      price: '18,499',
      duration: '7 Days',
      rating: '4.8',
      groupSize: '15 People',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Ladakh Mountain Adventure',
      description: 'High-altitude adventure through the stunning landscapes of Ladakh. Includes monastery visits and local culture immersion.',
      price: '32,999',
      duration: '14 Days',
      rating: '4.9',
      groupSize: '10 People',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Kashmir Great Lakes',
      description: 'Discover the pristine alpine lakes of Kashmir in this moderate-level trek through breathtaking valleys.',
      price: '22,999',
      duration: '8 Days',
      rating: '4.7',
      groupSize: '12 People',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Goechala Trek',
      description: 'Challenging trek offering spectacular views of Kanchenjunga, the third highest mountain in the world.',
      price: '28,499',
      duration: '11 Days',
      rating: '4.9',
      groupSize: '8 People',
      image: 'https://images.unsplash.com/photo-1588666305588-43adf3faa1e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Sandakphu Trek',
      description: 'Witness four of the world\'s five highest peaks from the highest point of West Bengal.',
      price: '16,999',
      duration: '6 Days',
      rating: '4.6',
      groupSize: '15 People',
      image: 'https://images.unsplash.com/photo-1579033462043-0f11a7862f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Treks</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of treks across India's most stunning mountain ranges
          </p>
        </motion.div>
      </section>

      {/* Trips Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <TripCard key={trip.id} trip={trip} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trips