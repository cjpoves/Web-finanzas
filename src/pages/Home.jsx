import { useFetchData } from "../auth/hooks/useFetchData";
import { Link } from "react-router";
import { HomeSecciones } from "../components/HomeSecciones";
import { NavBarAdmin } from "../components/NavBarAdmin";

export const Home = () => {
    //Custom Hook para proteger ruta y comprobar si tiene JWT
   useFetchData(); 

    return(
        <>
        <NavBarAdmin/>
        <HomeSecciones/>
        </>
    )
}