// In a navigation bar component
import { Link } from 'react-router-dom';

function NavBar() { 
  return (
    <nav 
      style={{
        width: '100vw',
        position: 'fixed',
        backgroundColor: '#282c34',
        padding: '10px 20px',
        height: '50px',
        display: 'flex',
        alignItems: 'center'
      }}
    >

      {/* Left Title */}
      <p style={{ color: 'white', marginLeft: 60, fontSize: '25px' }}>
        JFerguson-dev.com
      </p>

      {/* Perfect Center Area */}
      <div style={{ backgroundColor: "#282c34", width: "30px", height: "5px", marginLeft: "auto", marginRight: "auto"
       }}></div>


      <div style={{}}>
        <Link to="/" className='navBarButton'>Home</Link>
        <Link to="/projects" className='navBarButton'>My Projects</Link>
        <Link to="/about" className='navBarButton'>About Me</Link>
        {/*<Link to="/services" className='navBarButton'>Services</Link>*/}
        <Link to="/contact" className='navBarButton'>Contact</Link>
        <Link to='/resume' className='navBarButton'>Resume</Link>
      </div>

    </nav>
  );
}


export default NavBar;