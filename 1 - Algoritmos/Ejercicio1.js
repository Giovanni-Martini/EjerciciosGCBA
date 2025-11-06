// 1 - Dada una lista de N números positivos, intercambiar los extremos si el valor de la
// izquierda es mayor al de la derecha. Por ejemplo:
// • Dada la lista 36, 42, 8, 38, 31, 56, 59, 24, 96, 3, 88
// • Se obtiene 36, 3, 8 ,24, 31, 56, 59, 38, 96, 42, 88
// Dado que
// • 36 es menor que 88, no se intercambia
// • 42 es mayor que 3, se intercambia
// • 8 es menor que 96, no se intercambia 

function intercambiarExtremos(lista) {
    for(let i = 0; i < Math.floor(lista.length / 2); i++) {
        let aux = lista.length - 1 -i
        if(lista[i] > lista[aux]) {
            let temporal = lista[i]
            lista[i] = lista[aux]
            lista[aux] = temporal
        }
    }
    return lista
}

console.log(intercambiarExtremos([36, 42, 8, 38, 31, 56, 59, 24, 96, 3, 88]))