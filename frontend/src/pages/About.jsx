// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/About.css';
import FooterComp from '../components/FooterComponent';

function AboutPage() {
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '375px', textAlign: 'center', marginTop: '2px', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1>A bit about me</h1>
    </div>
    
    <div className='selfie-row'>
      <div className='selfie-left'>
        <img src={'images/Myself.png'} 
            className='selfie-image'
            width='550px' 
            height='700px' 
            alt="Professional"></img>
      </div>
      
      <div className= "selfie-middle"></div>
    
      <div className="project-right">
          <h1> Jeffrey Ferguson </h1>
          <p  style={{color: '#fff'}}> Hello! I am a passionate software developer with a strong interest in creating innovative applications and solutions. With a background in computer science and hands-on experience in various programming languages, I enjoy tackling complex problems and turning ideas into reality through code. In my free time, I love exploring new technologies, contributing to open-source projects, and continuously improving my skills. Welcome to my portfolio website, where you can explore some of the projects I've worked on and learn more about my journey in the world of software development. </p> 
          <h2> My History </h2> 

          <div className='horizontal-div'>
            {/* Work Experience */}
            <div className='work-experience'>
              <h3> Work Experience</h3>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center'}}>
                  <div style={{background: 'black', height: '10px', width: '10px' , borderRadius: '5px'}}></div>
                  
                  <div style={{background: 'black', height: '150px', width: '3px'}}></div>
                
                  <div style={{background: 'black', height: '10px', width: '10px', borderRadius: '5px'}}></div>
                </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div>
                  <div style={{color: '#fff', padding: '0px', margin: '0 auto', gap: '0px', textAlign: 'left'}}> 
                    <p style={{fontSize: '20px', padding: '0px', margin: '0px'}}> Software Engineer in Test</p>
                    <p style={{fontSize: '15px', padding: '0px', margin: '0px'}}> Cox Automotive - Sep 2022, Aug 2025</p>
                    <p style={{fontSize: '15px', padding: '0px', margin: '0px'}}> Draper, Utah</p>
                  </div>
                  <div style={{background: '#ad5503', height: '25px'}}></div>
                  <div style={{color: '#fff', padding: '0px', margin: '0 auto', gap: '0px', textAlign: 'left'}}> 
                    <p style={{fontSize: '20px', padding: '0px', margin: '0px'}}> QA Engineer Intern</p>
                    <p style={{fontSize: '15px', padding: '0px', margin: '0px'}}> Cox Automotive - Jan 2022, Aug 2022</p>
                    <p style={{fontSize: '15px', padding: '0px', margin: '0px'}}> Draper, Utah</p>
                  </div>
                </div>
              </div>
              
            </div>

            <div style={{backgroundColor: '#e24a03', width: '5px'}}></div>


            {/* Education & Skills*/}
            <div>
              <div className = 'education'>
                <h3> Education </h3>
                <div style={{color: '#fff'}}>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15%', margin: '0px', padding: '0px', height: '30px'}}>
                    <p style={{fontSize: '18px', paddingLeft: '10px', margin: '0px', textAlign: 'left'}}> Neumont College of Computer Science </p>
                    <p style={{color: '#7e7a7aff'}}>GPA: 3.65</p>
                  </div>
                  
                  <p style={{fontSize: '16px', paddingLeft: '30px', margin: '0px', textAlign: 'left'}}> Bachelor of Science in Software Engineering </p>
                  <p style={{fontSize: '14px', paddingLeft: '30px', margin: '0px', textAlign: 'left'}}> Graduated: September 2022</p>
                </div>
              </div>
              <div className = 'skills'>
                <h3> Skills </h3>
                <div>
                  <ul  style={{color: '#fff'}}>
                    <li> Programming Languages: JavaScript, Python, Java, C++, Swift </li>
                    <li> Web Development: React, Node.js, HTML, CSS </li>
                    <li> Mobile Development: SwiftUI, React Native </li>
                    <li> Database Management: MySQL, MongoDB </li>
                    <li> Version Control: Git, GitHub </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      
    </div>
    <FooterComp />
  </>
}


export default AboutPage;