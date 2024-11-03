import { useState } from "react"; 
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; 
import { Link } from "react-router-dom";  
import finallogo from "../assets/finallogo.png";
 
const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 
  const [activeItem, setActiveItem] = useState(""); 
 
  const toggleMenu = () => { 
    setIsOpen(!isOpen); 
  }; 
 
  const handleMenuClick = (name) => { 
    setActiveItem(name); 
    setIsOpen(false);  
  }; 
 
  const menuItems = [ 
    { name: "Home", to: "/" }, 
    { name: "About Us", to: "/about" },  
    { name: "Event", to: "/event" }, 
    { name: "Contact Us", to: "/contact" },
    { name: "Sign In", to: "/signin" },
    { name: "Registration", to: "/register" },
  ]; 
 
  return ( 
    <nav className="fixed top-0 w-full left-0 right-0 bg-white shadow-md z-50"> 
      <div className="w-full justify-between mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex  justify-between  h-16  items-center"> 
          {/* Logo */} 
          <div> 
            <Link to="/" className="flex flex-rows items-center gap-2 p-6 "> 
              <img src={finallogo} alt="Logo" className="h-14 w-32 md:h-20 md:w-20" />  
              <h1 className="font-bold text-xl">FellowLink</h1> 
            </Link> 
        </div> 
 
 
         {/* Desktop Menu */} 
<div className="w-full hidden md:flex justify-end"> 
  <div className="space-x-8 flex items-center  font-bold text-black"> 
    {menuItems.map((item, index) => ( 
      <Link 
        key={index} 
        to={item.to} 
        onClick={() => handleMenuClick(item.name)} 
        className={`text-black block px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${ 
          activeItem === item.name ? "bg-primary text-black underline-offset-4" : "" 
        }`} 
      > 
        {item.name} 
      </Link> 
    ))} 
  </div> 
</div> 
 
 
          {/* Mobile Menu Button */} 
          <div className="md:hidden flex items-center"> 
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary"> 
              {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />} 
            </button> 
          </div> 
        </div> 
      </div> 
 
      {/* Mobile Menu */} 
      {isOpen && ( 
        <div className="md:hidden bg-white shadow-md"> 
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3"> 
            {menuItems.map((item, index) => ( 
              <Link 
                key={index} 
                to={item.to} 
                onClick={() => handleMenuClick(item.name)} 
                className={`text-black block px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${ 
                  activeItem === item.name ? "text-primary" : "" 
                }`} 
              > 
                {item.name} 
              </Link> 
            ))} 
            {/* <Link 
              to="/contact" 
              className="block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300" 
            > 
              Contac 
            </Link> */} 
          </div> 
        </div> 
      )} 
    </nav> 
  ); 
}; 
 
export default Navbar;