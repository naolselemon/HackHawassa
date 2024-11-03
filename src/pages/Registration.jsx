// StudentRegistrationForm.jsx 
import React from 'react'; 
 
const Registration = () => { 
  return ( 
    <div className="m-11  flex items-center justify-center min-h-screen bg-gray-100"> 
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"> 
        <h1 className="text-2xl font-semibold text-center text-gray-800">Student Registration Form</h1> 
        <p className="text-center text-gray-600 mb-6">Please provide your information below to complete your registration if you are fresh Student</p> 
         
        <form className="space-y-4"> 
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required
          /> 
            <input 
            type="text" 
            placeholder="Address" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required
          /> 
            <input 
            type="number"
            placeholder="Phone Number" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required
          /> 
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required
          />
            <input 
            type="number"
            placeholder="Batch" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required
          /> 
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-orange-600" 
          > 
            Submit 
          </button> 
        </form> 
      </div> 
    </div> 
  ); 
}; 
 
export default Registration;
