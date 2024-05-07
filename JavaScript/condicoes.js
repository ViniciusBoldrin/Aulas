console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
  "São Paulo",
  "Rio de Janeiro",
  "Salvador",
  "Bahia",
  "Cuiabá"
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis: ${listaDeDestinos}`);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(1, 1);
}else{
  console.log("Compra não concluída.");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!")
} else{
    console.log("Voce não pode embarcar.")
}



console.log(listaDeDestinos);
