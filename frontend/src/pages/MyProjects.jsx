// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import GridComponent from '../components/GridComponent';
import FooterComp from '../components/FooterComponent';

function MyProjectsPage() {

  
  return <>
    <NavBar/>
        <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1> My Projects</h1>
    </div>
    <GridComponent/>

    <FooterComp />
  </>
}


export default MyProjectsPage;