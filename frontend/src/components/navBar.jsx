// In a navigation bar component
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#282c34' }}>
      <Link to="/" class='navBarButton'>Home</Link>
      <Link to="/about" class='navBarButton'>About</Link>
      <Link to="/services" class='navBarButton'>Services</Link>
      <Link to="/projects" class='navBarButton'>My Projects</Link>
      <Link to="/contact" class='navBarButton'>Contact</Link>
    </nav>
  );
}

export default NavBar;