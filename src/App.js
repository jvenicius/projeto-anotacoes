import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Container, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import "fontsource-roboto";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Projeto Anotações
      </Typography>
      <AddCircleOutlinedIcon />
      <Formulario aoEnviar={aoEnviarForm} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
