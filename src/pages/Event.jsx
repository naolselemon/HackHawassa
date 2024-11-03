
import React from "react"; 
import event5 from '../assets/background.jpg'
 
const EventsPage = () => { 
  return ( 
    <div className="py-16 m-20 px-8 md:px-16 bg-gray-50 text-gray-800"> 
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slideInFromTop"> 
        Upcoming Events 
      </h2> 
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> 
        {/* Event Card 1 */} 
        <div className="relative group rounded-lg shadow-lg overflow-hidden bg-white animate-fadeIn transition duration-500 transform hover:scale-105"> 
          {/* Decorative Image Shape */} 
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-br-full transform -translate-x-10 -translate-y-10"></div> 
           
          {/* Event Image */} 
          <img 
            src={event5}
            alt="Worship Night" 
            className="w-full h-60 object-cover rounded-b-full transition-transform duration-500 ease-in-out group-hover:rotate-6" 
          /> 
           
          {/* Event Content */} 
          <div className="p-6 text-center"> 
            <h3 className="text-2xl font-semibold mb-2">Worship Night</h3> 
            <p className="text-gray-600 mb-4"> 
              Join us for a night of worship and prayer, celebrating faith with live music and fellowship. 
            </p> 
            <div className="text-blue-600 font-medium"> 
              Date: July 14, 2024 | Time: 6:00 PM 
            </div> 
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-blue-700"> 
              Learn More 
            </button> 
          </div> 
        </div> 
 
        {/* Event Card 2 */} 
        <div className="relative group rounded-lg shadow-lg overflow-hidden bg-white animate-fadeIn transition duration-500 transform hover:scale-105"> 
          {/* Decorative Image Shape */} 
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-500 rounded-tl-full transform translate-x-10 translate-y-10"></div> 
           
          {/* Event Image */} 
          <img 
            src={event5}
            alt="Youth Retreat" 
            className="w-full h-60 object-cover rounded-tl-full transition-transform duration-500 ease-in-out group-hover:-rotate-6" 
          /> 
           
          {/* Event Content */} 
          <div className="p-6 text-center"> 
            <h3 className="text-2xl font-semibold mb-2">Youth Retreat</h3> 
            <p className="text-gray-600 mb-4"> 
              A weekend retreat for youth to connect, reflect, and grow in their faith together. 
            </p> 
            <div className="text-green-600 font-medium"> 
              Date: August 5-7, 2024 | Location: Green Hills Camp 
            </div> 
            <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-green-700"> 
              Learn More 
            </button> 
          </div> 
        </div> 
 
        {/* Event Card 3 */} 
        <div className="relative group rounded-lg shadow-lg overflow-hidden bg-white animate-fadeIn transition duration-500 transform hover:scale-105"> 
          {/* Decorative Image Shape */} 
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 rounded-bl-full transform translate-x-10 -translate-y-10"></div> 
           
          {/* Event Image */} 
          <img 
            src={pic4}
            alt="Bible Study Group" 
            className="w-full h-60 object-cover rounded-bl-full transition-transform duration-500 ease-in-out group-hover:rotate-6" 
          /> 
           
          {/* Event Content */} 
          <div className="p-6 text-center"> 
            <h3 className="text-2xl font-semibold mb-2">Bible Study Group</h3> 
            <p className="text-gray-600 mb-4"> 
              Join our weekly Bible study sessions to deepen your understanding and grow in faith. 
            </p> 
            <div

className="text-purple-600 font-medium"> 
              Every Thursday | Time: 7:00 PM 
            </div> 
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-purple-700"> 
              Join Us 
            </button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default EventsPage;
