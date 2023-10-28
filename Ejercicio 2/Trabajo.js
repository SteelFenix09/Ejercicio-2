let trabajoA = new Array(12).fill(45)
let trabajoB = new Array(10).fill(56)
let trabajoC = new Array(8).fill(52)
let trabajoD = new Array(13).fill(28)

let trabajoa = 0
let trabajob = 0
let trabajoc = 0
let trabajod = 0
let suma = 0
for (let i = 0; i < trabajoA.length; i++) {
    trabajoa = trabajoa + trabajoA[i]*7
    if (i < trabajoB.length) {
        trabajob = trabajob + trabajoB[i]*7
    }
    if (i < trabajoC.length) {
        trabajoc = trabajoc + trabajoC[i]*7
    }
    if (i < trabajoD.length) {
        trabajod = trabajod + trabajoD[i]*7
    }
}

console.log("Ganancia A ", trabajoa);
console.log("Ganancia B ", trabajob);
console.log("Ganancia C ", trabajoc);
console.log("Ganancia D ", trabajod);
suma = suma+trabajoa+trabajob+trabajoc+trabajod
console.log("Ganancia total ",suma);