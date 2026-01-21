// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import ProjectsGrid from '../components/ProjectsGrid';
import ModernFooter from '../Modern Components/ModernFooterComponent';
import { useState } from "react";

function HomePage() {

  const [isOurMissionVisible, setIsOurMissionVisible] = useState(false);

  const toggleOurMissionVisibility = () => {
    console.log("Our Mission button clicked");
    setIsOurMissionVisible(prev => !prev); // invert the boolean
  };

  return <>
    <NavBar/>
    <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Welcome to Ferguson Software Solutions!</h1>
    </div>

    {/*<div style={{height: '500px'}} className="bg-gradient-to-br from-orange-500 to-red-800">
    </div>*/}














    <div style={{display: 'flex', width: '100%', background: '#dbd8d5ff', alignContent: 'center'}}>
      <div style={{background: '#69625fff', width: '1000px', gap: '100px', margin: 'auto'}}>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '15%', gap: '30px'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src='images/KeyboardIcon.png' alt='^' style={{width: '50px', height: '50px', marginTop: '100%'}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', height: '290px', padding: '20px', color: '#fff', alignItems: 'center', textAlign: 'left', gap: "10px", justifyContent: 'center'}}>
          <p style={{width: "320px", marginBottom: '25px', color: 'yellow'}}>Software Development</p>
          {/*<p style={{width: '320px', textAlign: 'left',}}>Ferguson Software Solutions has a rich history developing both server side and web based software solutions. We pride ourselves on our clean, professional and scalable software that functions as expected while being delivered on time. Stop dealing with excuses.</p>*/}
          <p style={{width: '320px', textAlign: 'left',}}>I, Jeffrey Ferguson, have a rich history developing both server side and web based software solutions. I pride myself on writing clean, professional, and scalable software that functions to incredible standards while being delivered on time. </p>
        </div>
        </div>
        
      </div>
    </div> 
      
    





    {/*Why Choose Me Section*/}
    <div style={{display: 'flex', width: '100%', background: '#f4f1ed', alignContent: 'center'}}>
      <div style={{padding: '20px', background: '#f4f1ed', color: '#000', textAlign: 'center', width: '1000px', margin: 'auto', border: '3px solid black'}}>
          <div>
              <h2> <strong>Why Choose Me?</strong> </h2>
              <p> I am dedicated to delivering high-quality software solutions that meet your needs. Here are some reasons to choose me for your next project. </p>
              <div className="wrapper" style = {{gap: '5%', width: '80%', justifyContent: 'center'}}>
                <div className="box" style={{textAlign:'left' , alignItems: 'left', justifyContent: 'left'}}>
                  <ul style={{listStyleType: 'none', padding: 0, width: '100%'}}>
                      <li style={{padding: '15px', maxWidth: '420px'}}>✅ <strong>Team Experience.</strong> 3+ years of industry experience with agile teams in software, website and system development.</li>
                      <li style={{padding: '15px', maxWidth: '420px'}}>✅ <strong>Excellent communication and collaboration. </strong>You will receive a response from our team right away, you will never get the run around.</li>
                      <li style={{padding: '15px', maxWidth: '420px'}}>✅ Commitment to quality and deadlines</li>
                      <li style={{padding: '15px', maxWidth: '420px'}}>✅ <strong>Continuous learning and improvement.</strong> I am constantly learning new languages and frameworks by creating new projects that focus around those areas, while improving frequently used skills along the way. </li>
                  </ul>
                </div>

                <div className="box" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '20px', width: '10%'}}>
                  <button className="bg-gradient-to-br from-slate-400 to-slate-500" style={{height: '50px', width: '300px', backgroundColor: "gray"}} onClick={toggleOurMissionVisibility}>Our Mission</button>
                  {isOurMissionVisible && (
                  <p style={{width: '300px', textAlign: 'left'}}>Ferguson Software Solutions' Mission is to deliver reliable, efficient software that helps businesses work smarter and grow faster. </p>)}
                  {isOurMissionVisible && (
                  <p style={{width: '300px', textAlign: 'left'}}>We strive to empower businesses through thoughtful, dependable software designed around their needs.</p>)}
                  
                  
                  
                  <button style={{height: '50px', width: '300px'}} >History</button>
                  <button style={{height: '50px', width: '300px'}} >Contact Me</button>
                </div>
              </div>
              


          </div>
      </div>
    </div>

    <div style={{padding: '20px', background: '#69625fff', color: '#fff', textAlign: 'center'}}>
        <div>
            <h2> Featured Projects </h2>
            <p> Here are some of my highlighted projects showcasing my skills and expertise in software development. </p>
        </div>
    </div>

    <div>
      {/* Add project components or links here */}
      <ProjectsGrid />
    </div>

    <ModernFooter />
  </>
}


export default HomePage;