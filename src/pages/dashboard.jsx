import React from 'react'; 
import { Bell, BookOpen, Grid, LogOut, Settings, Users } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom 
 
const Sidebar = () => { 
  return ( 
    <aside className="w-64 bg-[#1e2a4a] text-white p-6 flex flex-col"> 
      {/* Sidebar Header */} 
      <div className="flex items-center mb-8"> 
        <BookOpen className="mr-2" /> 
        <span className="text-xl font-bold">Book Rent</span> 
      </div> 
 
      {/* Navigation Links */} 
      <nav className="flex-1 space-y-2"> 
        {/* Dashboard Button */} 
        <Link to="/dashboard"> 
          <button className="w-full flex items-center justify-start bg-[#3b82f6] text-white px-4 py-2 rounded-lg"> 
            <Grid className="mr-2 h-4 w-4" /> 
            Dashboard 
          </button> 
        </Link> 
 
        {/* Books Button */} 
        <Link to="/books"> 
          <button className="w-full flex items-center justify-start text-gray-300 hover:text-white hover:bg-[#2c3e50] px-4 py-2 rounded-lg"> 
            <BookOpen className="mr-2 h-4 w-4" /> 
            Books 
          </button> 
        </Link> 
 
        {/* Owners Button */} 
        <Link to="/owners"> 
          <button className="w-full flex items-center justify-start text-gray-300 hover:text-white hover:bg-[#2c3e50] px-4 py-2 rounded-lg"> 
            <Users className="mr-2 h-4 w-4" /> 
            Owners 
          </button> 
        </Link> 
 
        {/* Notification Button */} 
        <Link to="/notifications"> 
          <button className="w-full flex items-center justify-start text-gray-300 hover:text-white hover:bg-[#2c3e50] px-4 py-2 rounded-lg"> 
            <Bell className="mr-2 h-4 w-4" /> 
            Notification 
          </button> 
        </Link> 
 
        {/* Setting Button */} 
        <Link to="/settings"> 
          <button className="w-full flex items-center justify-start text-gray-300 hover:text-white hover:bg-[#2c3e50] px-4 py-2 rounded-lg"> 
            <Settings className="mr-2 h-4 w-4" /> 
            Setting 
          </button> 
        </Link> 
      </nav> 
 
      {/* Logout Button */} 
      <button className="w-full flex items-center justify-start mt-auto text-gray-300 hover:text-white hover:bg-[#2c3e50] px-4 py-2 rounded-lg"> 
        <LogOut className="mr-2 h-4 w-4" /> 
        Logout 
      </button> 
    </aside> 
  ); 
}; 
 
export default Sidebar;