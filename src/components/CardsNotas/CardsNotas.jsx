import CardNota from "../CardNota";
import recuperarNota from "../../controllers/recuperarNota";

export function CardsNotas() {
  const notas = recuperarNota();
  const listaNotas = notas.map((nota) => {
    return <CardNota nota={nota} />;
  });

  console.log(notas);
  console.log(listaNotas);

  return <div>{listaNotas}</div>;
}
