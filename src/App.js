import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import "./assets/index.css";
import "fontsource-roboto";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm"></Container>
    </>
  );
}

export default App;
