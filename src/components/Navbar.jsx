import logo from "../assets/logo.png"
import cart from "../assets/cart.png"

const ListNavbar = (props) => {
    return (
        <li className={props.className}><a className="nav-link" href={props.route}>{props.content}</a></li>
    )
}

const LogoItem = (props) => {
    return (
        <a aria-controls={props.ariacontrols} data-bs-target={props.target} data-bs-toggle={props.toggle} type={props.type} id={props.id} href={props.route}><img src={props.routeImg} alt={props.alt} /></a>
    )
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="navbar-left">
                <div>
                    <LogoItem route="./index.html" routeImg={logo} />
                </div>
                <div className="collapse navbar-collapse" id="options">
                    <ul className="navbar-nav">
                        <ListNavbar className="nav-item" content="Inicio" route="./index.html" />
                        <ListNavbar className="nav-item" content="Catalogo" route="./" />
                        <ListNavbar className="nav-item" content="Servicios" route="./" />
                    </ul>
                </div>
            </div>
            <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#options">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-right">
                <div>
                    <LogoItem id='cartIconToggle' type="button" toggle="offcanvas" target="#offcanvasWithBackdrop"
                        ariacontrols="offcanvasWithBackdrop" routeImg={cart} />
                </div>
            </div>
        </nav>
    );
}
export default Navbar