import { useState } from "react";
import { useFetchData } from "../auth/hooks/useFetchData";
import { NavBar } from "../components/NavBar"
import { ObtenerGastos } from "../components/ObtenerGastos";

export const ExpensesPage = () => {

    const [cantidad, setCantidad] = useState("");
        const [descripcion, setDescripcion] = useState("");
        const [password, setPassword] = useState("");
    //Custom Hook para proteger ruta y comprobar si tiene JWT
    useFetchData(); 

    return(

        <>
        <NavBar/>
        <h1 className="centerText">Gastos</h1>
        <ObtenerGastos/>
        </>
    )
}