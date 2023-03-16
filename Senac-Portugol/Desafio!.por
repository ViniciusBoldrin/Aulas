programa {
  funcao inicio() {

    inteiro: cigarros, anos, totalcigarros, minutosperdidos, diasperdidos
    real: anosperdidos

    escreva("Quantos cigarros voce fuma por dia?: ")
    leia(cigarros)
    escreva("Voce fuma a quantos anos?: ")
    leia(anos)

    totalcigarros= anos*365*cigarros

    escreva("Total de cigarros: ", totalcigarros)

  

    minutosperdidos= totalcigarros*10
    diasperdidos= minutosperdidos/1440

    escreva("\nVoce perdeu: ", diasperdidos "dias perdidos")



    
  }
}
