let ps = [];
let psd = [];
let ch = [];
let il = [];
let be = [];
let pcp = [];
let l = [];

function votar() {
  let voto = document.getElementById("voto").value.toLowerCase();

  switch (voto) {
    case "ps":
      ps.push(voto);
      break;
    case "psd":
      psd.push(voto);
      break;
    case "ch":
      ch.push(voto);
      break;
    case "il":
      il.push(voto);
      break;
    case "be":
      be.push(voto);
      break;
    case "pcp":
      pcp.push(voto);
      break;
    case "l":
      l.push(voto);
      break;

    default:
      alert("Opção inválida. Por favor, tente outro partido ou vote nulo.");
      return;
  }

  document.getElementById("voto").value = "";
  document.getElementById("voto").disabled = true;

  exibirResultado();
}

function exibirResultado() {
  let resultadoContent = document.getElementById("resultadoContent");
  resultadoContent.innerHTML = "";

  let resultados = [
    { partido: "PS", votos: ps.length },
    { partido: "PSD", votos: psd.length },
    { partido: "CH", votos: ch.length },
    { partido: "IL", votos: il.length },
    { partido: "BE", votos: be.length },
    { partido: "PCP", votos: pcp.length },
    { partido: "L", votos: l.length },
  ];

  resultados.sort((a, b) => b.votos - a.votos);

  let resultadosHTML = "";
  resultados.forEach((resultado) => {
    resultadosHTML += `<p>Número de votos para o ${resultado.partido}: ${resultado.votos}</p>`;
  });

  resultadoContent.innerHTML = resultadosHTML;

  if (resultados.some((resultado) => resultado.votos > 0)) {
    document.getElementById("resultado").style.display = "block";
  } else {
    document.getElementById("resultado").style.display = "none";
  }
}
