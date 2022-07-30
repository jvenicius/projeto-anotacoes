import CardNota from "../CardNota";
import recuperarNota from "../../controllers/recuperarNota";

export function CardsNotas() {
  const notas = recuperarNota();

  const listaNotas = notas.map((nota, index) => {
    return (
      <li key={index}>
        <CardNota nota={nota} />
      </li>
    );
  });

  console.log(notas);
  console.log(listaNotas);

  return <ul>{listaNotas}</ul>;
}
