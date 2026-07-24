function nivel(score){

 if(score <= 25)
   return "Baixo";

 if(score <= 50)
   return "Moderado";

 if(score <= 75)
   return "Alto";

 return "Crítico";

}

function cor(score){

 if(score <= 25)
   return "#4caf50";

 if(score <= 50)
   return "#ffeb3b";

 if(score <= 75)
   return "#ff9800";

 return "#f44336";

}

export default function CustomTooltip({

 active,
 payload,
 label

}) {

 if(!active || !payload)
    return null;

 return (

  <div
   style={{
    background:"#fff",
    padding:12,
    borderRadius:10,
    border:"1px solid #ddd"
   }}
  >

   <strong>{label}</strong>

   {payload.map(item => (

    <div
      key={item.dataKey}
      style={{
       color:cor(item.value)
      }}
    >

      {item.name}

      {" : "}

      {item.value}

      {" - "}

      {nivel(item.value)}

    </div>

   ))}

  </div>

 );

}