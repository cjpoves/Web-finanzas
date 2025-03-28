import { useState } from "react";
import  './IngresoMap.css'

export const IngresoMap = ({ingreso, onDelete}) => {
    const {id, usuario_id, cantidad, descripcion, fecha} = ingreso;
    const [mensaje,setMensaje] = useState("")


    const handleClick = async () => {
        const token = localStorage.getItem("token"); // Si tu API requiere autenticación

        try {
            const response = await fetch(`http://localhost:3000/incomes/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (response.ok) {
                onDelete(id); //Llama a funcion de componente padre que actualiza estado ingresos para que no aparezca cuando se elimina
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
          <p >Cantidad: {cantidad}</p>          
        <button onClick={handleClick}>Eliminar</button>
        </li>
        {mensaje && <p className="centerText">{mensaje}</p>}

      </>
    );
  };
  