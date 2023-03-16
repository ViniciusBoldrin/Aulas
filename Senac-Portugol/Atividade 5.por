programa {

  inclua biblioteca Matematica

  funcao inicio() {

    real:dinheiro , dolar
    cadeia:nome

    escreva("Ola, qual seu nome?: ")
    leia(nome)
    escreva("Qual o valor da sua carteira atualmente? ")
    leia(dinheiro)

    dolar= dinheiro/5.35
    dolar= Matematica.arredondar(dolar,2)

    escreva("Voce pode comprar: ", dolar)
  


  
  
  }
  
}
