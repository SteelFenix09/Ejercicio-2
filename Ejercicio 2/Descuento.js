let libro = [568, 568, 568, 568]
let disco = [45, 45, 45]
let toca = [678]

let sumalibro = 0
let sumadisco = 0

for (let i = 0; i < libro.length; i++) {
    sumalibro = sumalibro + libro[i] * 0.8
    if (i < disco.length) {
        sumadisco = sumadisco + disco[i]*0.85
    }


}

console.log("Suma de los libros ", sumalibro);
console.log("Suma de los discos ", sumadisco);

let suma = sumadisco + sumalibro + toca[0]*0.98
console.log("La suma total es: ", suma);

