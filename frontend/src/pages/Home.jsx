// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import FooterComp from '../components/FooterComponent';

function HomePage() {
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1>Welcome to the Home Page!</h1>
    </div>

    <div>
      <p>Projects</p>
    </div>

    <FooterComp />
  </>
}


export default HomePage;