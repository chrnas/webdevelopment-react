import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <img className="logo" src="/images/vallastadenpizzeria_logo.png" alt="logo" />  
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