
import { CartWidget } from './CartWidget';
import '../App.css'

export const NavBar = () => {
    return (
        <>
      <nav className="navbar">
        <div className="navbar-brand">Paw Paw</div>
        <div className="nav-links">
          <a className="nav-link" href="#accesorios-perros">Accesorios Perros</a>
          <a className="nav-link" href="#accesorios-gatos">Accesorios Gatos</a>
          <a className="nav-link" href="#alimento-gatos">Alimento para Gato</a>
          <a className="nav-link" href="#alimento-perros">Alimento para Perros</a>  
        </div>
        <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
    </>
    );
  };