import { useEffect, useState } from "react";
import "./ObtenerIngresos.css"
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export const GastosAño = () => {
    const [year,setYear] = useState("")
    const [gastos, setGastos] = useState([]);
    const [mensaje,setMensaje] = useState("");

    // Estado para los datos del año del grafico
        const [chartData, setChartData] = useState( [
            { descripcion: "Enero", cantidad: 400 },
            { descripcion: "Febrero", cantidad: 360 },
            { descripcion: "Marzo", cantidad: 200 },
        ]);

        //Renderiza grafico en funcion del año consultado
        useEffect(() => {
            if (gastos.length > 0) {
                // Objeto auxiliar para agrupar ingresos por mes
                const gastosPorMes = {};
        
                gastos.forEach(({ cantidad, fecha }) => {
                    const mes = new Date(fecha).getMonth(); // Extraer número de mes (0 = Enero, 1 = Febrero)
                    gastosPorMes[mes] = (gastosPorMes[mes] || 0) + parseFloat(cantidad);
                });
        
                // Nombres de los meses
                const nombresMeses = [
                    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                ];
        
                // Convertir el objeto en un array con el formato esperado
                const nuevosDatos = Object.keys(gastosPorMes).map((mes) => ({
                    descripcion: nombresMeses[mes], 
                    cantidad: gastosPorMes[mes]   
                }));
        
                setChartData(nuevosDatos);
            }
        }, [gastos]);

         //Funcion que consulta endpoint consultar gastos
   const handleSubmit = async (e) => {
    //Resetea gastos cuando pulsas boton
    setGastos([])
    e.preventDefault();

    if ( !year) {
        setMensaje("Por favor, selecciona un año.");
        return;
    }
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(`http://localhost:3000/expenses/year?year=${year}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Gastos obtenidos:", data);
            setMensaje("Gastos obtenidos correctamente");
            setGastos(data)
            
        } else {
            console.log("Error:", data.message);
            setMensaje(data.message);
        }

    } catch (error) {
        console.error("Error al obtener gastos:", error);
        setMensaje("Error en el servidor");
    }
    console.log(gastos)

    setTimeout(() => {
        setMensaje('')
   }, 2000)
   }


    return(
        <>
        
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="descripcion" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cantidad">
            {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={["#D10808", "#E87609", "#F5D940", "#FFBB78"][index % 4]} />
            ))}
        </Bar>
        </BarChart>
      </ResponsiveContainer>

      {mensaje && <p className="centerText">{mensaje}</p>}

                
                <form onSubmit = {handleSubmit} className="logForm">
                <h3 className="textoForm">Obtener Gastos Año</h3>

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
                </div>
                
                <button className="buttonFormIngresos" type="submit"
                >Obtener Gastos</button>
                </form>
        
        </>
    )
}