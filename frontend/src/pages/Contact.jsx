// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Contact.css';
import ContactForm from '../components/ContactForm';
import FooterComp from '../components/FooterComponent';



function ContactPage() {
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", backgroundColor: '#242924ff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Welcome to the Contact Page!</h1>
    </div>

    <div>
      <h2>Contact Me</h2>
      <ContactForm/>
    </div>

    <FooterComp />
  </>
}


export default ContactPage;