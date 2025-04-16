// // cronômetro exemplo 

// for (let contador= 0; contador < 60; contador++){
//     for( let contador1=0; contador1 < 60; contador1++){
//         for ( let contador2=0; contador2 <60; contador2++){
        

//     console.log(contador + "  min   " + contador1 +"  Segundo " + contador2)
//         }
//     }
    

// }
let horas

let min

let seg


// perguntar ao usuario a hora, minutos e segundos que deseja começar seu temporizador//


horas = parseInt(prompt("digite o valor em Horas : "))

min= parseInt(prompt("digite o valor em min "))

seg= parseInt(prompt("digite o valor em segundo "))

// laço de repetição "para" até o número chegar a 0 e ser atualizado  //
for (horas ; horas >-1; horas--){
    for( min ; min >-1 ; min--){
        for( seg; seg >-1 ; seg--){
    console.log("Horas "+horas + " Min :" +min + " segundos :" +seg  ) 
       


        }
        seg=59

    }
    min=59
}