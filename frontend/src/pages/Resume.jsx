// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import ModernFooter from '../Modern Components/ModernFooterComponent';



function ResumePage() {
  return <>
    <NavBar/>
    <div className="flex h-[250px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white" style={{ backgroundImage: "url('images/Background.png')" }}>
        <h1 className="text-[34px] font-bold">Resume</h1>
    </div>

    <div className="bg-gray-700 px-6 py-12">
      <div className="mx-auto w-full max-w-[650px] rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-2 shadow-2xl">
        <img
          src="/images/Resumes/JFerguson-SE-SDET-Oct2026-page1.png"
          alt="Resume"
          className="block h-auto w-full rounded-2xl bg-white shadow-lg"
        />
      </div>
    </div>
    <ModernFooter />
  </>
}


export default ResumePage;