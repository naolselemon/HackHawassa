// ContactUsPage.jsx 
import React from 'react'; 
 
const ContactUsPage = () => { 
  return ( 
    <div className="flex flex-col m-11 items-center justify-center min-h-screen bg-gray-100 p-4"> 
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6"> 
        <h1 className="text-3xl font-semibold text-center text-gray-800">Contact Us</h1> 
        <p className="text-center text-gray-600 mb-8"> 
          We’d love to hear from you! Whether you’re looking for prayer, support, or information about our fellowship, please reach out to us. 
        </p> 
 
        <form className="space-y-4"> 
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          /> 
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          /> 
          <textarea 
            placeholder="Message" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            rows="4" 
          /> 
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" 
          > 
            Send Message 
          </button> 
        </form> 
 
        <div className="mt-8 text-center text-gray-700"> 
          <p>“For where two or three gather in my name, there am I with them.”</p> 
          <p className="italic mt-1">- Matthew 18:20</p> 
        </div> 
 
        <div className="mt-8 text-center text-gray-600"> 
          <p>📞 Phone: +123-456-7890</p> 
          <p>📧 Email: HUfellowship@mkc.com</p> 
          <p>📍 Address: Hawassa</p> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default ContactUsPage;
