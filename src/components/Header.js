import { Link,NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContest";

export const Header = () => {
  const {cartList} = useCart();

  return (
    <header>
      <Link to="/" className="logo">
      <img src={Logo} alt="" />
      <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
      <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
