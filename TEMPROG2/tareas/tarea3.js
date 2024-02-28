let cuadrantes= [ [3, 5], [-2, 4], [0, -7], [8, 2], [-1, -3]];
function cuadranteSuperiores(array) {
    let aceptados = [];
    for(let i = 0; i < array.length; i++) {
    if(array[i][1] > 0 && array[i][0] > 0)
    aceptados.push(array[i]);
        else if(array[i][1] < 0 && array[i][0] < 0)
            aceptados.push(array[i]);
    }
    return aceptados;
}
console.log(cuadranteSuperiores(cuadrantes));

