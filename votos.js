let ps = [];
let psd = [];
let ch = [];
let il = [];
let be = [];
let pcp = [];
let l = [];
let nulo = [];

while (true) {
  let voto = prompt("Qual é o seu voto?");

  alert("Seu voto foi:" + " " + voto);

  if (voto.toLowerCase() === "fim") {
    break;
  }

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
    case "nulo":
      nulo.push(voto);
      break;

    default:
      console.log(
        "Opção inválida. Por favor tente outro partido ou vote nulo."
      );
  }
}
console.log("Número de votos para o PS:", ps.length);
console.log("Número de votos para o PSD:", psd.length);
console.log("Número de votos para o CH:", ch.length);
console.log("Número de votos para o il:", il.length);
console.log("Número de votos para o BE:", be.length);
console.log("Número de votos para o PCP:", pcp.length);
console.log("Número de votos para o L:", l.length);
console.log("Número de votos nulos:", nulo.length);
