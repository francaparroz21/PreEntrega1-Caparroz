import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="navbar-left">
                <div>
                    <ItemListContainer route="./index.html" routeImg={logo} />
                </div>
                <div className="collapse navbar-collapse" id="options">
                    <ul className="navbar-nav">
                        <ItemListContainer className="nav-item" content="Inicio" route="./index.html" />
                        <ItemListContainer className="nav-item" content="Catalogo" route="./" />
                        <ItemListContainer className="nav-item" content="Servicios" route="./" />
                    </ul>
                </div>
            </div>
            <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#options">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-right">
                <div>
                    <CartWidget id='cartIconToggle' type="button" toggle="offcanvas" target="#offcanvasWithBackdrop"
                        ariacontrols="offcanvasWithBackdrop" routeImg={cart} />
                </div>
            </div>
        </nav>
    );
}
export default Navbar