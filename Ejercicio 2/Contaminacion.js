function medir(indice){
    if (indice<=37){
        console.log("El indice de contaminacion es acpetable")
    }else if (indice>37 && indice<=55){
        console.log("El indice de contaminacion es desagradable")
    }else if (indice > 55){
        console.log("El indice de contaminacion es peligroso")
    }
}

medir(40)