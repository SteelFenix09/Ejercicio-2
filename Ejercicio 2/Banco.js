let saldo=250000
let interes=0

function calcularInteres(saldo){
    if (saldo < 200000){
        interes = saldo*0.05
    } else if (saldo >= 200000 && saldo <= 500000){
        interes = saldo*0.06
    } else if (saldo > 500000){
        interes = saldo*0.07
    }
    return interes
}
interes=calcularInteres(saldo)

console.log("El interes de la cuenta es ", interes);