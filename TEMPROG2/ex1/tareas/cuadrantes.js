let cuadrantes = [ [-5,9],[-3,-2],[1,9],[2,-4]];
function cuadranteSuperiores(array) {
    let aceptados = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i][1] > 0)
            aceptados.push(array[i]);
    }
    return aceptados;
}
console.log(cuadranteSuperiores(cuadrantes));

