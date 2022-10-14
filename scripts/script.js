let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne}g de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebidas</p>`

// Esse de baixo é se caso voce queira fazer de outro jeito, tipo se voce nao quiser deixar 1000 g e sim 1kg
//     resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne<p>`
//     resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`                                                                                                                                               
//     resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} ml de bebidas </p>`
// 
}

function carnePP(duracao){
  if (duracao >= 6){
    return 650;
  } else {
    return 400;
  }
}
function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
 }
 function bebidasPP(duracao){
    if (duracao >= 6){
      return 1500;
    } else {
      return 1000;
    }
  }
