// SignInPage.jsx 
import React, { useState } from 'react'; 
 
const SignIn = () => { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const handleSignIn = (e) => { 
    e.preventDefault(); 
    console.log('Email:', email); 
    console.log('Password:', password); 
  }; 
 
  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"> 
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"> 
        <h1 className="text-3xl font-semibold text-center text-gray-800">Sign In</h1> 
        <p className="text-center text-gray-600 mb-8">Welcome back! Please sign in to continue.</p> 
 
        <form onSubmit={handleSignIn} className="space-y-4"> 
          <div> 
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label> 
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            /> 
          </div> 
 
          <div> 
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label> 
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            /> 
          </div> 
 
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" 
          > 
            Sign In 
          </button> 
        </form> 
 
      </div> 
    </div> 
  ); 
}; 
 
export default SignIn;