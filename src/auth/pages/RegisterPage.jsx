import { Link } from "react-router"
import "./LogIn.css";
import { useState } from "react";


export const RegisterPage = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [mensaje, setMensaje] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault();

        //Creamos objeto con campos del formulario
        const usuario = {nombre, email, password};

        //Funciones de validacion de los campos
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            setTimeout(() => {
                setError('')
           }, 2000)
            return;
        }

        if (!email.includes("@")) {
            setError("Debe ser un correo electrónico")
            setTimeout(() => {
                setError('')
           }, 2000)
            return; 
        }

        //Consultamos backend para ejecutar funcion de registro
        try {  
            const response = await fetch("http://localhost:3000/register",{ 
                //Enviamos datos con Post, header contenido en formato JSON, body convierte objeto usuario en JSON
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(usuario),
            });

            //Obtiene mensaje de respuesta en data
            const data = await response.json();
            setMensaje(data.message)

        } catch (error) {
            console.error("Error al registrar:", error);
            setMensaje("Error en el registro");
        }
            setEmail("");
            setPassword("");
            setNombre("");

            setTimeout(() => {
                    setError('')
               }, 2000)
            setTimeout(() => {
                setMensaje('')
           }, 2000)
           
    }



    return(
        <>

        <form onSubmit = {handleSubmit} className="logForm">
        <h1 className="textoForm">Resgistrarse</h1>

        <input className="inputForm"
        type="text"
        placeholder="Tu Nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        required/>
        <input className="inputForm"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="correo@correo"
        value={email}
        required/>
        <input className="inputForm"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Contraseña"
        value={password}
        required/>
        <button className="buttonForm" type="submit"
        >Registrarse</button>
        <Link to = {"/"} className="btnPagina"  >Página de inicio</Link>
        </form>
    
        {error && <p className="centerText" style={{ color: 'red' }}>{error}</p>}
        {mensaje && <p className="centerText" style={{ color: 'green' }}>{mensaje}</p>}
        </>
    )
}