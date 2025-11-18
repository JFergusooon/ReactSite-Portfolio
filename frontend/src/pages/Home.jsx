// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import FooterComp from '../components/FooterComponent';
import ProjectsGrid from '../components/ProjectsGrid';

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

    <div style={{padding: '20px', background: '#443f3d', color: '#fff', textAlign: 'center', height: '150px'}}>
      <p>Software Development</p>
      <p>With A Strong Background in fullstack...</p>
    </div>
    {/*Why Choose Me Section*/}
    <div>
      <div style={{padding: '20px', background: '#f4f1ed', color: '#000', textAlign: 'center'}}>
          <div>
              <h2> Why Choose Me? </h2>
              <p> I am dedicated to delivering high-quality software solutions that meet your needs. Here are some reasons to choose me for your next project. </p>
              <div style = {{display: 'flex', flexDirection: 'row', gap: '5%', width: '80%', justifyContent: 'center'}}>
                <div style={{textAlign:'left' , alignItems: 'left', justifyContent: 'left'}}>
                  <ul style={{listStyleType: 'none', padding: 0, width: '100%'}}>
                      <li>✅ Strong problem-solving skills</li>
                      <li>✅ Excellent communication and collaboration</li>
                      <li>✅ Commitment to quality and deadlines</li>
                      <li>✅ Continuous learning and improvement</li>
                  </ul>
                </div>

                <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '20px', width: '10%'}}>
                  <button style={{height: '50px', width: '300px'}} >Our Mission</button>
                  <button style={{height: '50px', width: '300px'}} >History</button>
                  <button style={{height: '50px', width: '300px'}} >Contact Me</button>
                </div>
              </div>
              


          </div>
      </div>
    </div>

    <div style={{padding: '20px', background: '#443f3d', color: '#fff', textAlign: 'center'}}>
        <div>
            <h2> Featured Projects </h2>
            <p> Here are some of my highlighted projects showcasing my skills and expertise in software development. </p>
        </div>
    </div>

    <div>
      {/* Add project components or links here */}
      <ProjectsGrid />
    </div>

    <FooterComp />
  </>
}


export default HomePage;