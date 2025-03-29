import { Link } from "react-router";
import "./InicioNav.css"

export const InicioNav = () => {


    return(
        <>
        <nav className="navegacionBody" >
        <Link className="InicioNavBarBody" to={"/logIn"}> LogIn  </Link>
        </nav>

        </>
    )
}