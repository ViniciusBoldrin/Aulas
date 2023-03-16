programa {
  funcao inicio() {

    real: km, precokm, total
    inteiro: diaria, precodiaria

    escreva("Informe o numero de km's rodados: ")
    leia(km)

    escreva("Informe os dias usados: ")
    leia(diaria)

    precokm= km*0.20
    precodiaria= 90*diaria
    total= precodiaria+precokm

    escreva("O valor total da diaria foi: ", precodiaria)
    
    escreva(" O valor total da kilometragem foi: ", precokm)
    

    escreva("O valor total foi de: ", total)
    
  }
}
