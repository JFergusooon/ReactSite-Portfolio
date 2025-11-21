// In a navigation bar component
import { Link } from 'react-router-dom';

function NavBar() { 
  return (
    <nav 
      style={{
        width: '100%',
        position: 'relative',
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
      <div 
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1px'
        }}
      >
        <Link to="/" className='navBarButton'>Home</Link>
        <Link to="/projects" className='navBarButton'>My Projects</Link>
        <Link to="/about" className='navBarButton'>About Me</Link>
        {/*<Link to="/services" className='navBarButton'>Services</Link>*/}
        <Link to="/contact" className='navBarButton'>Contact</Link>
      </div>

    </nav>
  );
}


export default NavBar;