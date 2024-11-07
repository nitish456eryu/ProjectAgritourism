import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ShowPlace from './places';
import Contact from './contact';
import CompanyInfo from './aboutUs';


function App() {

  return (
    <Router>
    <>
     <ShowPlace name="Sugiya" imagee="C:\Users\nitis\OneDrive\Pictures\Bee.png" 
     description="Sugiya is a beautyful village in Sheikhpura districts" />

     <Contact></Contact>
     <nav>
        <Link to="/aboutUs">About Us</Link>
     </nav>
    <Routes>
      <Route path="/aboutUs" element={<CompanyInfo />} />
    </Routes>
    </>
    </Router>

  );
}

export default App;
