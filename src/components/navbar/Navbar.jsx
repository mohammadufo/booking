import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <FontAwesomeIcon icon={faEarth} />
          &nbsp; UFO Booking
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
