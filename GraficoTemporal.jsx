import {

ResponsiveContainer,
LineChart,
Line,
CartesianGrid,
XAxis,
YAxis,
Tooltip,
Legend

}
from "recharts";

import CustomTooltip
 from "./CustomTooltip";

export default function GraficoTemporal({

 municipio

}) {

 if(!municipio) return null;

 const dados = [

 {
   mes:"Jan",
   seca:70,
   incendio:30,
   enchente:20,
   scoreGeral:40
 },

 {
   mes:"Fev",
   seca:75,
   incendio:40,
   enchente:25,
   scoreGeral:46
 },

 {
   mes:"Mar",
   seca:82,
   incendio:55,
   enchente:31,
   scoreGeral:56
 }

 ];

 return (

  <ResponsiveContainer
   width="100%"
   height={400}
  >

   <LineChart data={dados}>

    <CartesianGrid
      strokeDasharray="4 4"
    />

    <XAxis
      dataKey="mes"
    />

    <YAxis
      domain={[0,100]}
    />

    <Tooltip
      content={<CustomTooltip/>}
    />

    <Legend/>

    <Line
      dataKey="scoreGeral"
      stroke="#2e7d32"
      strokeWidth={4}
      name="Score Geral"
    />

    <Line
      dataKey="seca"
      stroke="#f44336"
      strokeWidth={3}
      name="Seca"
    />

    <Line
      dataKey="incendio"
      stroke="#ff9800"
      strokeWidth={3}
      name="Incêndio"
    />

    <Line
      dataKey="enchente"
      stroke="#2196f3"
      strokeWidth={3}
      name="Enchente"
    />

   </LineChart>

  </ResponsiveContainer>

 );

}