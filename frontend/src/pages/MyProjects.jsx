// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import GridComponent from '../components/GridComponent';
import FooterComp from '../components/FooterComponent';

function MyProjectsPage() {

  
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '350px', textAlign: 'center', marginTop: '20px', color: '#fff', backgroundColor: '#242924ff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1> My Projects</h1>
    </div>
    <GridComponent/>

    <FooterComp />
  </>
}


export default MyProjectsPage;