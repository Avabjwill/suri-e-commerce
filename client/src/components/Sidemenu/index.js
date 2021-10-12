import "./SideMenu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideMenu = ({ show, click }) => {
  const sideMenuClass = ["sidemenu"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideMenuClass.push("show");
  }

  return (
    <div className={sideMenuClass.join(" ")}>
      <ul className="sidemenu_links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidemenu_cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/me">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;