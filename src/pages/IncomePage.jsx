import { useEffect, useState } from "react"
import { NavBar } from "../components/NavBar"
import { useFetchData } from "../auth/hooks/useFetchData";
import { ObtenerIngresos } from "../components/ObtenerIngresos";

export const IncomePage = () => {
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [password, setPassword] = useState("");
    //Custom Hook para proteger ruta y comprobar si tiene JWT
   useFetchData(); 

    return(
        <>
        <NavBar/>
        <h1 className="centerText">Ingresos</h1>
        <ObtenerIngresos/>
        </>
    )
}