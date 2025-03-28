import { Link, useNavigate } from "react-router";
import "./LogIn.css";
import { useState } from "react";


export const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState(""); 


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password}),
            });

            const data = await response.json(); 

            if(response.ok) {
                localStorage.setItem("token", data.token); // Guardar token en localStorage
                setMensaje("Login exitoso");
            } else {
                setMensaje(data.message);
            }
            //Navega a pagina income si todo es exitoso
            navigate("/incomePage");
        } catch (error) {
            console.error("Error en el login:", error);
            setMensaje("Error en el servidor");
        }

        
        setEmail("");
        setPassword("");
        setTimeout(() => {
            setMensaje('')
       }, 2000)
 
    }
    return(
        <>
        
        <form onSubmit={handleSubmit} className="logForm">
            <h1 className="textoForm">Iniciar Sesión</h1>

            <input className="inputForm"
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            
            <input className="inputForm"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            
        
        <button className="buttonForm" type="submit"
        >Acceder</button>

        <Link to = {"/registerPage"} className="btnPagina" >Página de registro</Link>
        </form>
      
        {mensaje && <p className="centerText" style={{ color: 'green' }}>{mensaje}</p>}

        </>
    )
}