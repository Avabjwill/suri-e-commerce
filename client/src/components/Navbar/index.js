import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>Suri</h2>
      </div>

      <ul className="navbar_links">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/me">Profile</Link>
        </li>
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span><span className="cartlogo_badge"></span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;