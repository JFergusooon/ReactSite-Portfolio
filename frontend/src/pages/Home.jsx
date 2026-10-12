// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Home.css';
import ProjectsGrid from '../components/ProjectsGrid';
import ModernFooter from '../Modern Components/ModernFooterComponent';
import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModernResume from '../Modern Components/ModernResumeComponent'

function HomePage() {

  const showWhyChooseMe = false;

  const [isOurMissionVisible, setIsOurMissionVisible] = useState(true);
  const [isContactUsVisible, setIsContactUsVisible] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const toggleOurMissionVisibility = () => {
    console.log("Our Mission button clicked");
    if(!isOurMissionVisible) {
      setIsOurMissionVisible(prev => !prev); 
    }
    if (isContactUsVisible) {
      setIsContactUsVisible(false);
    }
    if (isHistoryVisible) {
      setIsHistoryVisible(false);
    }
  };

  const toggleHistoryVisibility = () => {
    console.log("History button clicked");
    if(!isHistoryVisible) {
      setIsHistoryVisible(prev => !prev); 
    }
    if (isContactUsVisible) {
      setIsContactUsVisible(false);
    }
    if (isOurMissionVisible) {
      setIsOurMissionVisible(false);
    }
  }

  const toggleContactUsVisibility = () => {
    console.log("Contact Us button clicked");
    if(!isContactUsVisible) {
      setIsContactUsVisible(prev => !prev); 
    }
    if (isOurMissionVisible) {
      setIsOurMissionVisible(false);
    }
    if (isHistoryVisible) {
      setIsHistoryVisible(false);
    }
  }

  return <>
    <NavBar/>
    <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
    </div>

    <ModernResume />

    <div className="bg-gray-700 px-6 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,520px)]">
        <div className="flex min-w-0 flex-col gap-6">
          <div className="flex flex-col overflow-hidden rounded-3xl bg-gray-800 shadow-2xl md:flex-row">
            <div className="flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 p-5 md:w-1/4">
              <img src="/images/KeyboardIcon.png" alt="" className="h-[72px] w-[72px] rounded-xl bg-white p-2 shadow-lg" />
            </div>
            <div className="bg-slate-500 p-5 md:w-3/4">
              <div className="mb-2 rounded-2xl bg-gradient-to-r from-red-900 to-red-950 px-3 py-2">
                <h2 className="text-center text-lg font-bold text-white">Software Development</h2>
              </div>
              <div className="rounded-2xl border-4 border-gray-800 bg-slate-400 px-4 py-3">
                <p className="text-center text-sm leading-snug text-gray-900">I, Jeffrey Ferguson, have a rich history developing both server side and web based software solutions. I pride myself on writing clean, professional, and scalable software that functions to incredible standards while being delivered on time.</p>
              </div>
            </div>
          </div>

          <ProjectsGrid />
        </div>

        <div className="mx-auto w-full max-w-[520px] rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-2 shadow-2xl lg:mx-0">
          <img
            src="/images/JFerguson-SE-SDET-Aug2026-page1.png"
            alt="Resume"
            className="block h-auto w-full rounded-2xl bg-white shadow-lg"
          />
        </div>
      </div>
    </div> 
      
    

    {showWhyChooseMe && (
    <div style={{display: 'flex', width: '100%', background: '#f4f1ed', alignContent: 'center'}}>
      <div style={{padding: '20px', background: '#f4f1ed', color: '#000', textAlign: 'center', width: '1000px', margin: 'auto', border: '3px solid black'}}>
          <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <h2> <strong>Why Choose Me?</strong> </h2>
              <p> I am dedicated to delivering high-quality software solutions that meet your needs. Here are some reasons to <br></br>choose me for your next project. </p>
              <div style={{width: "100%", height: "2px", background: 'black', borderRadius: '5px', marginBottom: '10px'}}></div>
              
              
              <div className="wrapper" style = {{gap: '5%', width: '100%', justifyContent: 'center'}}>
                {/* Unordered List */}
                <div className="box" style={{textAlign:'left' , alignItems: 'left', justifyContent: 'left'}}>
                  <ul class='checklist' style={{padding: 0, width: '100%', gap:'5px'}}>
                      <li style={{maxWidth: '420px'}}><strong>Team Experience.</strong> 3+ years of industry experience with agile teams in software, website and system development.</li>
                      <li style={{maxWidth: '420px'}}><strong>Excellent communication and collaboration. </strong>You will receive a response from our team right away, clients never get the run around.</li>
                      <li style={{maxWidth: '420px'}}><strong>Commitment to quality and deadlines.</strong>With a focus on delivering projects on time and to the highest standards, I ensure that every project meets your expectations. </li>
                      <li style={{maxWidth: '420px'}}><strong>Continuous learning and improvement.</strong> I am constantly learning new languages and frameworks by creating new projects that focus around those areas, while improving frequently used skills along the way. </li>
                  </ul>
                </div>

                {/* Dropdown Section */}
                <div className="box" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10px', maxWidth: '500px', width: '100%', textAlign: 'center', alignItems: 'center', gap: '10px'}}>
                  <button className={isOurMissionVisible ? "bg-gradient-to-br from-slate-400 to-slate-500" : ""} style={{height: '50px', width: '300px'}} onClick={toggleOurMissionVisibility}>Our Mission     {isOurMissionVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isOurMissionVisible && (
                  <p style={{width: '300px', textAlign: 'left'}}>Ferguson Software Solutions' Mission is to deliver reliable, efficient software that helps businesses work smarter and grow faster. </p>)}

                  <button className={isHistoryVisible ? "bg-gradient-to-br from-slate-400 to-slate-500" : ""} style={{height: '50px', width: '300px'}} onClick={toggleHistoryVisibility}>History {isHistoryVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isHistoryVisible && (
                  <p style={{width: '300px', textAlign: 'left'}}>Ferguson Software Solutions was founded in 2023 by Jeffrey Ferguson, a software developer with a passion for creating high-quality software solutions. With over 3 years of experience in the industry, Jeffrey has worked on a wide range of projects, from small websites to large-scale software applications. </p>)}

                  <button className={isContactUsVisible ? "bg-gradient-to-br from-slate-400 to-slate-500" : ""} style={{height: '50px', width: '300px'}} onClick={toggleContactUsVisibility}>Contact Me {isContactUsVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isContactUsVisible && (
                  <div style={{width: '300px', flexDirection: 'row', display: 'flex', justifyContent: 'center', textAlign: 'center', gap: '10px'}}>
                    <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                      <img
                      src="/images/CompanyLogo.png"
                      alt="Footer Illustration"
                      className="rounded-3xl"
                      style={{width: '85px', height: '80px', objectFit: 'fill;'}}
                      />
                    </div>
                    
                    <div>
                      <p style={{width: '215px'}}>Ferguson Software Solutions</p>
                      <p style={{width: '215px'}}>Dryden, Virginia</p>
                      <p style={{width: '215px'}}>385-499-1578</p>
                      <p style={{width: '215px'}}>JFergusooon@gmail.com</p>
                    </div>
                  </div>

                  )}
                </div>
              </div>
          </div>
      </div>
    </div>
    )}

    <ModernFooter />
  </>
}


export default HomePage;