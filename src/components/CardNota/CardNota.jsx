import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import recuperarNota from "../../controllers/recuperarNota";

const styleCard = {
  minWidth: 275,
  maxWidth: 300,
  maxHeight: 250,
  mt: 2,
  outlined: 2,
};

export function CardNota({ nota }) {
  return (
    <Card sx={styleCard} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {nota.titulo}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {nota.conteudo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={recuperarNota}>
          Expandir
        </Button>
      </CardActions>
    </Card>
  );
}
