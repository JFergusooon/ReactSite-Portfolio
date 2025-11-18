// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Contact.css';
import ContactForm from '../components/ContactForm';
import FooterComp from '../components/FooterComponent';



function ContactPage() {
  return <>
    <NavBar/>
        <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
        <h1>Welcome to the Contact Page!</h1>
    </div>

    <div>
      <ContactForm/>
    </div>

    <FooterComp />
  </>
}


export default ContactPage;