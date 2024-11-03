import React, {} from 'react'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Hero from './pages/Hero';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import EventsPage from './pages/Event';
import ContactUsPage from './pages/Contact';
import AboutUsPage from './pages/About';
import Sidebar from './pages/dashboard';
// import Sidebar from './pages/dashboard';

function App() { 

  return  ( 
  <Router> 
  <Navbar />
  <Routes> 
        <Route path="/" element={<Hero />} /> 
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/event" element={<EventsPage />} /> 
        <Route path="/register" element={<Registration />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/contact" element={<ContactUsPage/>} /> 
        
      </Routes>
      <Routes>
      <Route path="/dashboard" element={<Sidebar/>} /> 
      </Routes>
   
      <Footer />
        
      </Router> 
  ); 
} 
 
export default App;