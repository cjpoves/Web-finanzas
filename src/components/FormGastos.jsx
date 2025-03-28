import { useState } from "react";
import "./FormIngresos.css"

export const FormGastos = () => {
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [mensaje, setMensaje] = useState(""); 
    const [fecha,setFecha] = useState("")




   const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // Pasa a mayuscula primera letra de descripcion
    const descripcionMayuscula = descripcion.charAt(0).toUpperCase() + descripcion.slice(1);

    if (!cantidad || !descripcion || !fecha) {
        setMensaje("Todos los campos son obligatorios");
        return; 
    }

    try {
        const response = await fetch("http://localhost:3000/expenses", {
            method: "POST",
             headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,  // Enviar el token como "Bearer token"
            },
            body: JSON.stringify({cantidad, descripcion: descripcionMayuscula, fecha}),
        });

        const data = await response.json(); 

        if(response.ok) {
            setMensaje("Ingreso del gasto realizado");
        } else {
            setMensaje(data.message);
        }
    } catch (error) {
        console.error("Error en el ingreso:", error);
        setMensaje("Error en el servidor");
    }

    
    setCantidad("");
    setDescripcion("");
    setTimeout(() => {
        setMensaje('')
   }, 2000)
   }
    return(
        <>
        

        <form onSubmit = {handleSubmit} className="formIngresosGastos">
        <h3 className="textoForm">Resgistrar gastos</h3>

        <input className="inputForm"
        type="number"
        placeholder="Cantidad €"
        onChange={(e) => setCantidad(e.target.value)}
        value={cantidad}
        required/>

        <input className="inputForm"
        type="text"
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
        value={descripcion}
        required/>

        <input className="inputForm"
        type="date"
        onChange={(e) => setFecha(e.target.value)}
        placeholder="Dia"
        value={fecha}
        required/>

        <button className="buttonFormIngresos" type="submit"
        >Enviar Gasto</button>
        </form>
        {mensaje && <p className="centerText">{mensaje}</p>}
        </>
    )
}