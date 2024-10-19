import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Specializations from './Specializations';
import CustomersSay from './CustomersSay';
import Casablanca from './Casablanca';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ContactUs from './ContactUs';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';
import './App.css';
 

const App = () => {
  return (
    <Router>
      <Nav />
       
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/specializations" element={<Specializations />} />
        <Route path="/customersSay" element={<CustomersSay />} />
        <Route path="/casablanca" element={<Casablanca />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        
        <Footer />
    </Router>
    
  );
};

export default App;

