import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Trips from './pages/Trips'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App