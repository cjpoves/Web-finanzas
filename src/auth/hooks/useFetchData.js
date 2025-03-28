import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

    // Custom Hook que comprueba si hay token en localStorage, si no hay devuelve al LogIn 
export const useFetchData = () => {
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
    
            if (!token) {
                setMensaje("Acceso denegado, inicia sesión");
                navigate("/")
            }


        };
        fetchData();
    }, [])

}
