import React from 'react'
import About from '../components/About'
import Team from '../components/Team'

// Sample trip data
const trips = [
  {
    id: 1,
    title: 'Himalayan Base Camp Trek',
    description: 'Experience the majestic Himalayas with our 10-day guided trek to the base camp.',
    price: '25,999',
    duration: '10 Days',
    rating: '4.9',
    groupSize: '12 People',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ae4d4dd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'Valley of Flowers',
    description: 'Walk through vibrant alpine meadows in this UNESCO World Heritage site.',
    price: '18,499',
    duration: '7 Days',
    rating: '4.8',
    groupSize: '15 People',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Ladakh Mountain Adventure',
    description: 'High-altitude adventure through the stunning landscapes of Ladakh.',
    price: '32,999',
    duration: '14 Days',
    rating: '4.9',
    groupSize: '10 People',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Trips Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Treks</h2>
            <p className="text-xl text-gray-600">Curated adventures for every level of explorer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <div key={trip.id} className="group">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ₹{trip.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>
                    <p className="text-gray-600 mb-4">{trip.description}</p>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>⏱️ {trip.duration}</span>
                      <span>⭐ {trip.rating}</span>
                      <span>👥 {trip.groupSize}</span>
                    </div>
                    
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/trips"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              View All Treks
            </a>
          </div>
        </div>
      </section>

      <About />
      <Team />
    </div>
  )
}

export default Home