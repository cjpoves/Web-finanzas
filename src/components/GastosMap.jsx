import { useState } from "react";
import  './IngresoMap.css'

export const GastosMap = ({gasto, onDelete}) => {
    const {id, usuario_id, cantidad, descripcion, fecha} = gasto;
    const [mensaje,setMensaje] = useState("")

    const handleClick = async () => {
        const token = localStorage.getItem("token"); // Si tu API requiere autenticación

        try {
            const response = await fetch(`http://localhost:3000/expenses/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (response.ok) {
                onDelete(id); //Llama a funcion de componente padre que actualiza estado gastos para que no aparezca cuando se elimina
            } else {
                setMensaje(data.message)
            }
        } catch (error) {
            setMensaje("Error en el servidor");
        }

        setTimeout(() => {
            setMensaje('')
       }, 2000)
    }

    return (
      <>



        <li className="ingresoContainer">
          <h4>Concepto: {descripcion}</h4>
          <p >Cantidad: {cantidad}€</p>          
        <button onClick={handleClick}><svg width="64px" height="64px" viewBox="-6.24 -6.24 36.48 36.48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
        </li>
        {mensaje && <p className="centerText">{mensaje}</p>}
        

      </>
    );
  };