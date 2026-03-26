// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Resume.css';
import '../css/Contact.css';
import ModernFooter from '../Modern Components/ModernFooterComponent';



function ResumePage() {
  return <>
    <NavBar/>
    <div class='wrap' style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
        <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Resume</h1>
    </div>

    <div className = "bg-gray-900 py-6 px-6" style={{
  display: 'flex',
  justifyContent: 'center',
}}>
  <img className='frame' src={'images/JFerguson_SE_Resume.png'} alt="Resume" style={{ width: "500px", height: "650px" }} />
  <div style={{ width: "25px", height: "650px", background: 'black' }}></div>
  <img 
    className='frame'
    src={'images/JFerguson_SDET_Resume.png'}
    alt="Resume"
    style={{ width: "500px", height: "650px" }}
  />
</div>
    <ModernFooter />
  </>
}


export default ResumePage;