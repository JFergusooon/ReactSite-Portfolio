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

    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ddd6d6ff', height: '700px'}}>
        <iframe class='frame' src={'images/Resume.png'} title={'ResumePdf'}
        style={{height: '500px', width: '100%'}}/>
    </div>

    <ModernFooter />
  </>
}


export default ResumePage;