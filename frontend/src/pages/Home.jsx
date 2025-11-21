// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import ProjectsGrid from '../components/ProjectsGrid';
import ModernFooter from '../Modern Components/ModernFooterComponent';

function HomePage() {
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '250px', textAlign: 'center', marginTop: '2px', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Welcome to the Home Page!</h1>
    </div>

    <div style={{height: '500px'}} className="bg-gradient-to-br from-orange-500 to-red-800">
    </div>














    <div style={{display: 'flex', width: '100%', background: 'gray', alignContent: 'center'}}>
      <div style={{background: 'slategray', width: '1000px', gap: '100px', margin: 'auto'}}>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '15%', gap: '20px'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src='images/KeyboardIcon.png' alt='^' style={{width: '50px', height: '50px', marginTop: '50%'}}/>
        </div>
        



        <div style={{display: 'flex', flexDirection: 'column', height: '290px', padding: '20px', color: '#fff', alignItems: 'center', textAlign: 'left', gap: "10px", justifyContent: 'center'}}>
          <p style={{width: "320px", marginBottom: '25px', color: 'yellow'}}>Software Development</p>
          <p style={{width: '320px', textAlign: 'left',}}>Ferguson Software Solutions has a rich history developing both server side and web based software solutions. We pride ourselves on our clean, professional and scalable software that functions as expected while being delivered on time. Stop dealing with excuses.</p>
        </div>
        </div>
        
      </div>
    </div> 
      
    
































    {/*Why Choose Me Section*/}
    <div style={{border: '2px solid black', width: '1000px', alignItems: 'center', margin: 'auto'}}>
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

    <ModernFooter />
  </>
}


export default HomePage;