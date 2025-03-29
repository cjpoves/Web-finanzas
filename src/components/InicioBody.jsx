import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./InicioBody.css"

export const InicioBody = () => {
    const data = [
        { name: 'Salario', value: 1300 },
        { name: 'Inversiones', value: 500 },
        { name: 'Acciones', value: 300 },
        { name: 'Extra', value: 200 },
      ];

      const dataPerdidas = [
        {
          name: 'Enero',
          uv: 5000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Febrero',
          uv: 4200,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Marzo',
          uv: 3800,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Abril',
          uv: 3000,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Mayo',
          uv: 2000,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Junio',
          uv: 1500,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Julio',
          uv: 800,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Agosto',
            uv: 100,
            pv: 4300,
            amt: 2100,
          },
      ];

      const dataCirculo = [
        { descripcion: "Enero", cantidad: 400 },
        { descripcion: "Febrero", cantidad: 360 },
        { descripcion: "Marzo", cantidad: 200 },
        { descripcion: "Abril", cantidad: 200 },
        { descripcion: "Mayo", cantidad: 200 },
      ];

      const dataBarraMes = [
        { descripcion: "Alquiler", cantidad: 400 },
        { descripcion: "Luz", cantidad: 60 },
        { descripcion: "Comida", cantidad: 200 },
    ]

    return(
        <>
        
        <div class="parent">
            <div class="div1">
                <h1>Controla tus ingresos y gastos</h1>
                 {/* Grafico de donut libreria Recharts */}
                            <div className="ag-chart-container">
                                <ResponsiveContainer width="100%" height={400}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            dataKey="value"
                                            nameKey="name"
                                            innerRadius="40%" 
                                            outerRadius="80%" 
                                            fill="#8884d8"
                                            label
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                
                </div>


            <div class="div2">
                <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M162.3 611.8c-13.6 0-24.6 11.3-24.6 25.2v260.7c0 13.9 11 25.2 24.6 25.2 13.6 0 24.6-11.3 24.6-25.2V637c0-13.9-11-25.2-24.6-25.2zM391.6 710c-13.6 0-24.6 10.6-24.6 23.7v165.5c0 13.1 11 23.7 24.6 23.7 13.6 0 24.6-10.6 24.6-23.7V733.7c-0.1-13.1-11.1-23.7-24.6-23.7z m212.8-131c-13.6 0-24.6 10.9-24.6 24.3v295.2c0 13.4 11 24.3 24.6 24.3 13.6 0 24.6-10.9 24.6-24.3V603.4c0-13.5-11-24.4-24.6-24.4z m211.9-120.5c-13.6 0-24.6 11-24.6 24.6V902c0 13.6 11 24.6 24.6 24.6 13.6 0 24.6-11 24.6-24.6V483c-0.1-13.5-11-24.5-24.6-24.5z m88.6-364.3H658.3c-13.6 0-24.6 11-24.6 24.6 0 13.6 11 24.6 24.6 24.6h188.9L466.4 524 311.1 368.7c-9.2-9.2-25.5-9.2-34.7 0l-175 174.9c-9.6 9.6-9.6 25.1 0 34.7 4.8 4.8 11.1 7.2 17.4 7.2 6.3 0 12.6-2.4 17.4-7.2l157.5-157.5L449 576.1c9.6 9.6 25.1 9.6 34.7 0l396.5-396.5v185.7c0 13.6 11 24.6 24.6 24.6 13.6 0 24.6-11 24.6-24.6V118.7c0-13.5-11-24.5-24.5-24.5z" fill="#0088FE"></path></g></svg>
                </div>


            <div class="div3">
                <h1>Evita las perdidas </h1>


                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                    width={500}
                    height={400}
                    data={dataPerdidas}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#9F273E" fill="#9F273E" />
                    </AreaChart>
                </ResponsiveContainer>
                
                </div>


            <div class="div4">
            <div>
                <h3> Consulta tus ingresos por Año</h3>
                
                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={dataCirculo} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <XAxis dataKey="descripcion" />
                                    <YAxis />
                                    <Tooltip />   
                                    <Bar dataKey="cantidad">
                                        {dataCirculo.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
                                        ))}
                                    </Bar>
                                    </BarChart>
                                  </ResponsiveContainer>
                            
                </div>
            </div>


            <div class="div5">
            <div>
                    <h3> Consulta tus ingresos por Mes</h3>
                    <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={dataBarraMes}
                            dataKey="cantidad"
                            nameKey="descripcion"
                            innerRadius="40%" 
                            outerRadius="80%" 
                            fill="#8884d8"
                            label
                        >
                            {dataBarraMes.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={["#D10808", "#E87609", "#F5D940", "#FFBB78"][index % 4]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
                            
                </div>

            </div>


        </div>
    
    
    
        </>
    )
}