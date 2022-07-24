import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import CardsNotas from "./components/CardsNotas";
import "./assets/index.css";
import "fontsource-roboto";

function App() {
  return (
    <>
      <NavBar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <CardsNotas />
      </Container>
    </>
  );
}

export default App;
