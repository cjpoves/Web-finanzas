import { useEffect, useState } from "react"
import { NavBar } from "../components/NavBar"
import { useFetchData } from "../auth/hooks/useFetchData";
import { FormIngresos } from "../components/FormIngresos";
import { ObtenerIngresos } from "../components/ObtenerIngresos";
import { FormGastos } from "../components/FormGastos";

export const Dashboard = () => {
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [password, setPassword] = useState("");
    //Custom Hook para proteger ruta y comprobar si tiene JWT
   useFetchData(); 

    return(
        <>
        <NavBar/>
        <div className="FormIngresoGastos__Contenedor">
        <FormIngresos/>
        <FormGastos/>
        </div>
       
        </>
    )
}