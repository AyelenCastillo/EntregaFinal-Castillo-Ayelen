import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
      <nav className="navbar">
        <div className="navbar-brand">Paw Paw</div>
        <div className="nav-links">
        <Link to={"/"}>
        <button className="nav-link">Home</button>
          </Link>
          <Link to={"/category/accesorios perro"}>  
          <button className="nav-link" >Accesorios Perros</button>
          </Link>
          <Link to={"/category/accesorios gato"}> 
          <button className="nav-link" >Accesorios Gatos</button>
          </Link>
          <Link to={"/category/alimento para gato"}> 
          <button className="nav-link" >Alimento para Gato</button>
          </Link>  
          <Link to={"/category/alimento para perros"}> 
          <button className="nav-link">Alimento para Perros</button> 
          </Link>
        </div>
        <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
    </>
    );
  };