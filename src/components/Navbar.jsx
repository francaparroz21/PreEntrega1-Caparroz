import logo from "../assets/logo.png"
import cart from "../assets/cart.png"

const ListNavbar = (props) => {
    return (
        <a data-bs-target={props.target} data-bs-toggle={props.toggle} type={props.type} id={props.id} href={props.route}><img src={props.routeImg} alt="" />{props.content}</a>
    )
}

const Navbar = () => {
    return (
        <header>
            <nav className="navbar container">
                <div className="navbar-left">
                    <div>
                        <ListNavbar route="./index.html" routeImg={logo} />
                    </div>
                    <div>
                        <ListNavbar content="Inicio" route="./index.html" />
                    </div>
                    <div>
                        <ListNavbar content="Catalogo" route="./pages/catalogue.html" />
                    </div>
                    <div>
                        <ListNavbar content="Servicios" route="./pages/services.html" />
                    </div>
                </div>
                <div className="navbar-right">
                    <div>
                        <ListNavbar id='cartIconToggle' type="button" toggle="offcanvas" target="#offcanvasWithBackdrop"
                            aria-controls="offcanvasWithBackdrop" routeImg={cart} />
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar