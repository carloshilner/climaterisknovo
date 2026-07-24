import {

MapContainer,
TileLayer,
Marker,
Popup

}
from "react-leaflet";

const municipios = [

{
 id:1,
 nome:"Sobral",
 lat:-3.688,
 lng:-40.348,
 populacao:210711,
 area:2122,
 scoreFinal:60,
 scoreSeca:82,
 scoreIncendio:68,
 scoreEnchente:31
},

{
 id:2,
 nome:"Crato",
 lat:-7.234,
 lng:-39.409,
 populacao:131050,
 area:1176,
 scoreFinal:48,
 scoreSeca:55,
 scoreIncendio:42,
 scoreEnchente:47
}

];

export default function MapaMunicipios({
 onSelect
}) {

 return (

  <MapContainer
    center={[-5.2,-39.5]}
    zoom={7}
    style={{
      height:"500px"
    }}
  >

   <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />

   {municipios.map(municipio => (

    <Marker
      key={municipio.id}
      position={[
       municipio.lat,
       municipio.lng
      ]}
      eventHandlers={{
       click: () => onSelect(municipio)
      }}
    >

     <Popup>
       {municipio.nome}
     </Popup>

    </Marker>

   ))}

  </MapContainer>

 );

}