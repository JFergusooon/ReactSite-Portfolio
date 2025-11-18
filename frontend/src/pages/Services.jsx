// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import FooterComp from '../components/FooterComponent';

function ServicesPage(){
  return <>
    <NavBar/>
        <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1>Welcome to the Services Page!</h1>
    </div>
    <div style={{padding: '20px', background: '#443f3d', color: '#fff', textAlign: 'center'}}>
        <p> Our Services include web and mobile application development, software automation testing, & more.</p>
    </div>
    

    <FooterComp />
  </>
}


export default ServicesPage;