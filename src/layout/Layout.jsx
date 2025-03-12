import { Outlet, Link } from "react-router-dom";
import logo from '../../src/assets/vallastadenpizzeria_logo.png'

const Layout = () => {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="logo" />  
        <Link to="/">Hem</Link>
        <Link to="/daily-lunch">Dagens Lunch</Link>
        <Link to="/menu">Meny</Link>
        <Link to="/find-us">Hitta oss</Link>
        <Link to="/order">Beställ</Link>
        <Link to="/gallery">Galleri</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;