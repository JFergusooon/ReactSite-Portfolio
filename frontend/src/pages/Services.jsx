// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import FooterComp from '../components/FooterComponent';

function ServicesPage(){
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", backgroundColor: '#242924ff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Welcome to the Services Page!</h1>
    </div>

    <p> Our Services include web and mobile application development, software automation testing, & more.</p>

    <FooterComp />
  </>
}


export default ServicesPage;