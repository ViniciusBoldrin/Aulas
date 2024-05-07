const listaDeDestinos = new Array(
  "São Paulo",
  "Rio de Janeiro",
  "Salvador",
  "Bahia",
  "Cuiabá"
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador"

console.log(`Destinos possíveis: ${listaDeDestinos}`);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
let destinoExiste = false;
while(contador < 5){

    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, tivemos um erro.")
}



for(let cont = 0; cont < 3; cont ++){

    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}
