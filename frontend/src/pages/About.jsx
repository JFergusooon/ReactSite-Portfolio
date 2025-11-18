// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/About.css';
import FooterComp from '../components/FooterComponent';

function AboutPage() {
  return <>
    <NavBar/>
    <h1>A bit about me</h1>
    <div className='project-row'>
      <div className='project-left'>
        <img src={'images/Myself.png'} width='550px' height='700px' alt="Professional Photo"></img>
      </div>
    
    
      <div className="project-right"><h1> Jeffrey Ferguson </h1>
          <p  style={{color: '#fff'}}> Hello! I am a passionate software developer with a strong interest in creating innovative applications and solutions. With a background in computer science and hands-on experience in various programming languages, I enjoy tackling complex problems and turning ideas into reality through code. In my free time, I love exploring new technologies, contributing to open-source projects, and continuously improving my skills. Welcome to my portfolio website, where you can explore some of the projects I've worked on and learn more about my journey in the world of software development. </p> 
          <div>
            <h2> My History </h2>
            <div>
              <h3> Education </h3>
              <div style={{color: '#fff'}}> 
                <p> Neumont College of Computer Science </p>
                <p> Bachelor of Science in Software Engineering </p>
                <p> Graduated: September 2022  | GPA: 3.65</p>
              </div>
            </div>
          </div>
          <div>
            <h3> Work Experience</h3>
            <div style={{color: '#fff'}}> 
                <p> Software Engineer in Test - Cox Automotive </p>
                <p> Draper, Utah - Sep 2022, Aug 2025 </p>
              </div>
          </div>
          <div>
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
    




    <FooterComp />
  </>
}


export default AboutPage;