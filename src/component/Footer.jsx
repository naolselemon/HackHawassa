
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegram, FaTiktok } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 
import finallogo from "../assets/finallogo.png";
 
const Footer = () => { 
  return ( 
    <footer className="bg-gray-100 text-Black py-8"> 
      <div className="container mx-auto px-4"> 
        {/* Footer content */} 
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"> 
          {/* Logo */} 
          <div className="flex-shrink-0"> 
            <Link to="/"> 
              <img src={finallogo} alt="Logo" className="h-12 md:h-20" /> 
            </Link> 
          </div> 
 
          {/* Navigation links */} 
          <div className="space-y-4 md:space-y-0 md:space-x-8"> 
  <Link to="/about" className="text-lg font-bold hover:text-primary transition-colors duration-300"> 
    About Us 
  </Link> 
  <Link to="/register" className="text-lg font-bold hover:text-primary transition-colors duration-300"> 
    Registration 
  </Link> 
  <Link to="/contact" className="text-lg font-bold hover:text-primary transition-colors duration-300"> 
    Contact Us 
  </Link> 
  <Link to="/event" className="text-lg font-bold hover:text-primary transition-colors duration-300"> 
    Events
  </Link> 
</div> 
 
 
          {/* Social Media Links */} 
          <div className="flex space-x-6 text-lg"> 
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black text-lg transition-colors duration-300"> 
              <FaFacebookF /> 
            </a> 
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black  transition-colors duration-300"> 
              <FaTiktok /> 
            </a> 
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-300"> 
              <FaInstagram /> 
            </a> 
            <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer" className="text-blac transition-colors duration-300"> 
              <FaTelegram /> 
            </a> 
          </div> 
        </div> 
 
        {/* Copyright */} 
        <div className="mt-8 text-center text-black text-lg"> 
          &copy; {new Date().getFullYear()} Hawasssa University Fellowship. All rights reserved. 
        </div> 
      </div> 
    </footer> 
  ); 
}; 
 
export default Footer;