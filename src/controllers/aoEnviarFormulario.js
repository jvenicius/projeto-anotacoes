function aoEnviarFormulario(dados) {
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
  const titulos = JSON.parse(localStorage.getItem("titulo"));
  const conteudos = JSON.parse(localStorage.getItem("conteudos"));
  console.log(titulos, conteudos);
}

export default aoEnviarFormulario;
