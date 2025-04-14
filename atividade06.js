
let nota
let soma=0 


do{
    nota=parseFloat(prompt(" digite sua nota "))

    soma=soma+nota

    segui=prompt("Deseja Coninuar? ")
}while(segui=="s" )

let media= soma/2

alert(" a média das suas notas é "+ media )
