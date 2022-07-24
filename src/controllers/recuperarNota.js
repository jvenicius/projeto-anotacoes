function recuperarNota() {
  const titulos = JSON.parse(localStorage.getItem("titulo"));
  const conteudos = JSON.parse(localStorage.getItem("conteudo"));

  let nota = {};
  let notas = [];

  for (let i = 0; i < titulos.length; i++) {
    nota = {
      titulo: titulos[i],
      conteudo: conteudos[i],
    };
    console.log(nota);
    notas.push(nota);
  }

  console.log(notas);
  return notas;
}

export default recuperarNota;
