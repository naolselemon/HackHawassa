import React from 'react'
import { Link } from "react-router-dom"
import  Pic4 from "../assets/background.jpg"
import event2 from '../assets/event2.jpg'
import event3 from '../assets/event3.jpg'
import event5 from '../assets/event5.jpg'

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
{/* Hero Section */}

<div className="flex flex-col items-center justify-center h-screen bg-cover bg-ethiopia-hero"
style={{backgroundImage: `url(${Pic4})` }}>
  
  <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-4 animate-slideInFromBottom"
  
  >
    Welcome to the Christian Student Registration System
  </h1>
  <p className="text-lg md:text-2xl text-white max-w-lg text-center mb-8 animate-slideInFromLeft">
  Empowering Christian students through a seamless registration experience and community engagement...
  </p>
  <Link to='/contact'>
    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out duration-300 animate-bounce">
     Contact Us
    </button>
    </Link>
  
</div>
<div className="py-16 px-8 md:px-16 text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12 animate-slideInFromLeft">
        Become a Part of Our Christain Fellowship
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transform rotate-15 transition-transform">
          {/* Card 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom">
            <div className="relative">
              <img 
                src={Pic4} 
                alt="Simien Mountains" 
                className="w-full h-64 object-cover  duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Engage in Activities</h3>
              <p className="text-black text-lg">
              Participate in various activities and events that foster growth, 
              fellowship, and learning among Christian students. 
              Your involvement can make a significant impact on
               your life and the lives of others in the community.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromLeft">
            <div className="relative">
              <img 
                src={Pic4}
                alt="Lalibela" 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Grow in Faith Together</h3>
              <p className="text-black">
              Join us in exploring the depths of your faith through 
              group discussions, Bible studies, and prayer meetings. 
              Together, we can strengthen our spiritual journeys and 
              support one another in our walk with Christ.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom">
            <div className="relative">
              <img 
                src={Pic4}
                alt="Axum obelisk" 
                className="w-full h-64 object-cover  transition-transform duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Make Lifelong Connections</h3>
              <p className="text-black">
              Building relationships with fellow students is 
              a key aspect of your college experience. 
              By joining us, you will have the opportunity to form deep and 
              lasting connections that will enrich your life 
              both personally and spiritually. </p>
            </div>
          </div>
        </div>
</div>
<div className="py-16 px-8 md:px-16 text-black"> 
  <h2 className="text-3xl md:text-4xl font-bold text-start mb-12 animate-slideInFromLeft"> 
    Fellowship Special Events
  </h2> 
 
  <div className="space-y-8"> 
    {/* Card 1 */} 
    <div className="flex flex-col md:flex-row items-center rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom"> 
      {/* Text Section */} 
      <div className="md:w-1/2 p-6 text-center md:text-left"> 
        <h3 className="text-2xl font-semibold mb-2">Make Lifelong Connections</h3> 
        <p className="text-black text-lg"> 
        Building relationships with fellow students is 
              a key aspect of your college experience. 
              By joining us, you will have the opportunity to form deep and 
              lasting connections that will enrich your life 
              both personally and spiritually.
        </p> 
      </div> 
      {/* Image Section */} 
      <div className="md:w-1/2"> 
        <img 
          src={Pic4} 
          alt="Simien Mountains" 
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:rotate-0" 
        /> 
      </div> 
    </div> 
 
    {/* Card 2 */} 
    <div className="flex flex-col justify-between md:flex-row items-center rounded-lg shadow-lg overflow-hidden animate-slideInFromLeft"> 
      {/* Text Section */} 
      <div className="md:w-1/2 justify-between p-6 text-center md:text-left"> 
        <h3 className="text-2xl font-semibold mb-2">Grow in Faith Together</h3> 
        <p className="text-black"> 
        Building relationships with fellow students is 
              a key aspect of your college experience. 
              By joining us, you will have the opportunity to form deep and 
              lasting connections that will enrich your life 
              both personally and spiritually.
        </p> 
      </div> 
      {/* Image Section */} 
      <div className="md:w-1/2 justify-end"> 
        <img 
          src={Pic4} 
          alt="Lalibela" 
          className="w-full h-96 object-cover transition-transform duration-500 ease-in-out hover:rotate-0" 
        /> 
      </div> 
    </div> 
 
    {/* Card 3 */} 
    <div className="flex flex-col justify-between md:flex-row items-center rounded-lg shadow-lg overflow-hidden animate-slideInFromLeft"> 
      {/* Text Section */} 
      <div className="md:w-1/2 justify-between p-6 text-center md:text-left"> 
        <h3 className="text-2xl font-semibold mb-2">Grow in Faith Together</h3> 
        <p className="text-black"> 
        Building relationships with fellow students is 
              a key aspect of your college experience. 
              By joining us, you will have the opportunity to form deep and 
              lasting connections that will enrich your life 
              both personally and spiritually.
        </p> 
      </div> 
      {/* Image Section */} 
      <div className="md:w-1/2 justify-end"> 
        <img 
          src={Pic4} 
          alt="Lalibela" 
          className="w-full h-96 object-cover transition-transform duration-500 ease-in-out hover:rotate-0" 
        /> 
      </div> 
    </div> 
  </div> 
</div>
</div>
    </div>
  )
}

export default Hero
