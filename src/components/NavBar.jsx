import { Link, useNavigate } from 'react-router'
import  './NavBar.css'
export const NavBar = () => {

    //Funcion cerrar sesion y remover el JWT
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("token");
    navigate("/")
    }

    return(

        <>
        <nav className="navegacion">
        <Link to={"/dashboard"}> Panel de control</Link>

        <Link to={"/incomePage"}> Ingresos</Link>
        <Link to={"/expensesPage"}>Gastos</Link>
        <button className='btnLogOut' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path> <path d="M9 12h12l-3 -3"></path> <path d="M18 15l3 -3"></path> </svg> </button>
        </nav>
        </>
    )
}