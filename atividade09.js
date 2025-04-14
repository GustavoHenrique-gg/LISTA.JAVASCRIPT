let num= parseFloat(prompt("digite um número "))

let fatorial = 1

let contador = num


do{

    fatorial= fatorial * contador

    contador = contador - 1



}while(contador > 0)

alert(" o número fatorial de " +num  + " igual a "+ fatorial)
