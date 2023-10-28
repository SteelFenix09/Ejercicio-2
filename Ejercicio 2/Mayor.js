let numeros = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,85,90,95,100]

let maximo = numeros[0]
let posicion = 0

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maximo) {
        maximo = numeros[i]
        posicion = i
    }
}

console.log("El numero mayor esta en la posicion: ", posicion)
