// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Contact.css';
import ModernContactForm from '../Modern Components/ModernContactComponent';
import ModernFooter from '../Modern Components/ModernFooterComponent';



function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-700">
      <NavBar/>
      <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
              backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'}}>
          <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Welcome to the Contact Page!</h1>
      </div>

      <div className="flex flex-1 flex-col">
        <ModernContactForm />
      </div>

      <ModernFooter />
    </div>
  );
}


export default ContactPage;