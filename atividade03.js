let num

let soma=0


do{
   

    num=parseFloat(prompt("digite um número "))
    if (num>0){

    soma= num + soma
    }



} while(num>0)

alert("a soma total dos número é   "+ soma)