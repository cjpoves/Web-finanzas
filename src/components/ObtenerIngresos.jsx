import { useEffect, useState } from "react"
import { IngresoMap } from "./IngresoMap";  
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Legend } from 'recharts'; // Importo libreria para hacer graficos

import "./ObtenerIngresos.css"

export const ObtenerIngresos = () => {
    const [month,setMonth] = useState("2025")
    const [year,setYear] = useState("01")
    const [ingresos, setIngresos] = useState([]);
    const [mensaje,setMensaje] = useState("")

    // Estado para los datos de ingreso del grafico
    const [chartData, setChartData] = useState([
        { descripcion: "Salario", cantidad: 1200 },
        { descripcion: "Activos", cantidad: 1100 },
        { descripcion: "Acciones", cantidad: 700 },
    ]);

   
    //Actualiza el grafico ante cada consulta
    useEffect(() => {
        if (ingresos.length > 0) {
            const nuevosDatos = ingresos.map((ingreso) => {
                const { cantidad, descripcion } = ingreso; // Extraer valores
                return {
                    descripcion: descripcion || "Sin descripción",
                    cantidad: parseFloat(cantidad) || 0, //Tranforma a numero ya que viene como string en la base de datos
                };
            });
            setChartData(nuevosDatos);
        }
    }, [ingresos]); // Se ejecuta cada vez que cambian los ingresos
    

    

        //Funcion que consulta endpoint para obtener ingresos de la base de datos
   const handleSubmit = async (e) => {
    //Resetea ingresos cuando pulsas boton
    setIngresos([])
    e.preventDefault();

    if (!month || !year) {
        setMensaje("Por favor, selecciona un mes y un año.");
        return;
    }
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(`http://localhost:3000/incomes/month?month=${month}&year=${year}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Ingresos obtenidos:", data);
            setMensaje("Ingresos obtenidos correctamente");
            //Establece la consulta en el state
            setIngresos(data)
            
        } else {
            console.log("Error:", data.message);
            setMensaje(data.message);
        }

    } catch (error) {
        console.error("Error al obtener ingresos:", error);
        setMensaje("Error en el servidor");
    }

    setTimeout(() => {
        setMensaje('')
   }, 2000)
   }

    // Funcion que se pasa a componente hijo para actualizar ingresos si se borra alguno
   const handleDelete = (id) => {
    setIngresos(ingresos.filter((ingreso) => ingreso.id !== id));
};

    return(
        <>
            {/* Grafico de donut libreria Recharts */}
            <div className="ag-chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="cantidad"
                            nameKey="descripcion"
                            innerRadius="40%" 
                            outerRadius="80%" 
                            fill="#8884d8"
                            label
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        <form onSubmit = {handleSubmit} className="logForm">
        <h3 className="textoForm">Obtener Ingresos Mes</h3>


        <div className="ingresosSelect">
        <select id="year" onChange={(e) => setYear(e.target.value)}
        value={year} class="inputForm">
                        <option value="" >--Selecciona año--</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                    </select>

                    <select id="month" onChange={(e) => setMonth(e.target.value)}
                     value={month} class="inputForm">
                        <option value="">--Selecciona mes--</option>
                        <option value="01">Enero</option>
                        <option value="02">Febrero</option>
                        <option value="03">Marzo</option>
                        <option value="04">Abril</option>
                        <option value="05">Mayo</option>
                        <option value="06">Junio</option>
                        <option value="07">Julio</option>
                        <option value="08">Agosto</option>
                        <option value="09">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
            
        </div>
        
        
        <button className="buttonFormIngresos" type="submit"
        >Obtener Ingresos</button>
        </form>

        {mensaje && <p className="centerText">{mensaje}</p>}


        <ul className="IngresosContainer">
        {ingresos.map((ingreso) => (
                        <IngresoMap key={ingreso.id} ingreso={ingreso} onDelete={handleDelete}/>
                        
                ))}

        </ul>
        </>
    )
}