// StudentRegistrationForm.jsx 
import React, { useState } from 'react'; 
import axios from 'axios'; 
 
const StudentRegistrationForm = () => { 
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    phoneNumber: '', 
    email: '', 
    batch: '' 
  }); 
  const [error, setError] = useState(null); 
  const [successMessage, setSuccessMessage] = useState(null); 
 
  const handleChange = (e) => { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value, 
    }); 
  }; 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      const response = await axios.post( 
        'https://hu-hack-back.onrender.com/api/users/register', 
        formData, 
        { 
          headers: { 
            'Content-Type': 'application/json', 
          }, 
        } 
      ); 
      setSuccessMessage('Registration successful!'); 
      setError(null); 
    } catch (error) { 
      setError(error.response?.data?.error || 'Registration failed'); 
      setSuccessMessage(null); 
    } 
  }; 
 
  return ( 
    <div className="m-11 flex items-center justify-center min-h-screen bg-gray-100"> 
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"> 
        <h1 className="text-2xl font-semibold text-center text-gray-800">Student Registration Form</h1> 
        <p className="text-center text-gray-600 mb-6"> 
          Please provide your information below to complete your registration if you are a new student 
        </p> 
 
        <form onSubmit={handleSubmit} className="space-y-4"> 
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required 
          /> 
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required 
          /> 
          <input 
            type="number" 
            name="phoneNumber" 
            placeholder="Phone Number" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required 
          /> 
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required 
          /> 
          <input 
            type="number" 
            name="batch" 
            placeholder="Batch" 
            value={formData.batch} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            required 
          /> 
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-orange-600" 
          > 
            Submit 
          </button> 
          {error && <p className="text-red-500 text-center mt-4">{error}</p>} 
          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>} 
        </form> 
      </div> 
    </div> 
  ); 
}; 
 
export default StudentRegistrationForm;