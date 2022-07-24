function salvarNota(dados) {
  console.log(dados);
  localStorage.setItem(
    "titulo",
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem("titulo")) || ""),
      dados.titulo,
    ])
  );
  localStorage.setItem(
    "conteudo",
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem("conteudo")) || ""),
      dados.conteudo,
    ])
  );
}

export default salvarNota;
