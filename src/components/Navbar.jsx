import logo from "../assets/logo.png"
import cart from "../assets/cart.png"

const ListNavbar = (props) => {
    return (
        <li className={props.className}><a className="nav-link" aria-controls={props.ariacontrols} data-bs-target={props.target} data-bs-toggle={props.toggle} type={props.type} id={props.id} href={props.route}><img src={props.routeImg} alt={props.alt} />{props.content}</a></li>
    )
}

const Navbar = () => {
    return (
        <header>
            <nav className="fixed-top bg-body-tertiary navbar navbar-expand-md">
                <div className="navbar-left">
                    <div>
                        <ListNavbar route="./index.html" routeImg={logo} />
                    </div>
                    <div id="collapse_items" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-3">
                            <div>
                            <ListNavbar className="nav-item" content="Inicio" route="./index.html" />
                            </div>
                            <div>
                            <ListNavbar className="nav-item" content="Catalogo" route="./pages/catalogue.html" />
                            </div>
                            <div>
                            <ListNavbar className="nav-item" content="Servicios" route="./pages/services.html" />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="navbar-right">
                    <div>
                        <ListNavbar id='cartIconToggle' type="button" toggle="offcanvas" target="#offcanvasWithBackdrop"
                            ariacontrols="offcanvasWithBackdrop" routeImg={cart} />
                    </div>
                </div>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse modal" data-bs-target="#collapse_items">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
            </nav>
        </header>
    );
}
export default Navbar