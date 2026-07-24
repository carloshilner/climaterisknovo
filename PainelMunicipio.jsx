    import {

Card,
CardContent,
Typography,
LinearProgress,
Button,
Chip

}
from "@mui/material";

export default function PainelMunicipio({
 municipio
}) {

 if(!municipio){

  return (
   <Card>
    <CardContent>

      Selecione um município

    </CardContent>
   </Card>
  );

 }

 return (

  <Card>

   <CardContent>

    <Typography variant="h5">

      {municipio.nome}

    </Typography>

    <Chip
      label="ODS 11"
      sx={{mr:1}}
    />

    <Chip
      label="ODS 13"
    />

    <br/>
    <br/>

    <Typography>

      População:
      {municipio.populacao}

    </Typography>

    <Typography>

      Área:
      {municipio.area} km²

    </Typography>

    <br/>

    <Typography>

      Score Geral

    </Typography>

    <Typography variant="h4">

      {municipio.scoreFinal}

    </Typography>

    <br/>

    <Typography>

      Seca

    </Typography>

    <LinearProgress
      value={municipio.scoreSeca}
      variant="determinate"
    />

    <br/>

    <Typography>

      Incêndio

    </Typography>

    <LinearProgress
      value={municipio.scoreIncendio}
      color="warning"
      variant="determinate"
    />

    <br/>

    <Typography>

      Enchente

    </Typography>

    <LinearProgress
      value={municipio.scoreEnchente}
      color="info"
      variant="determinate"
    />

    <br/>

    <Button
      variant="contained"
      fullWidth
    >

      Gerar Relatório ESG

    </Button>

   </CardContent>

  </Card>

 );

}
``