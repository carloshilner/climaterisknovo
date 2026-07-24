import { useState } from "react";

import {
 Grid,
 Container
}
from "@mui/material";

import MapaMunicipios
 from "../components/MapaMunicipios";

import PainelMunicipio
 from "../components/PainelMunicipio";

import GraficoTemporal
 from "../components/GraficoTemporal";

export default function Dashboard() {

 const [municipio,
        setMunicipio] =
        useState(null);

 return (

  <Container maxWidth="xl">

   <Grid container spacing={2}>

    <Grid item xs={12} md={8}>

      <MapaMunicipios
        onSelect={setMunicipio}
      />

    </Grid>

    <Grid item xs={12} md={4}>

      <PainelMunicipio
        municipio={municipio}
      />

    </Grid>

    <Grid item xs={12}>

      <GraficoTemporal
        municipio={municipio}
      />

    </Grid>

   </Grid>

  </Container>

 );

}
