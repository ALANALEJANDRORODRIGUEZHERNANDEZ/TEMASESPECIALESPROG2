let cuadrantes = [[2, 4], [1, -1], [-10, 5], [-10, -2], [3, 3], [10, 0]];
function cuadrantesCercanos(cuadrantes) {
    const cuadrantesD = {};
    let distancia = "";
    let ii = 1;
    for (let i = 0; i < cuadrantes.length; i++) {
            distancia = Math.abs(cuadrantes[i][0]) + Math.abs(cuadrantes[i][1]) 
            if (distancia in cuadrantesD){
                distancia +="."+String(ii);
                ii++;
            }
            cuadrantesD[distancia] = cuadrantes[i];
    }
    return cuadrantesD;
}
console.log(cuadrantesCercanos(cuadrantes));