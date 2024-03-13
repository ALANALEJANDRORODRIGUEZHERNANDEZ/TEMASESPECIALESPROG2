function combinarArrays(arr1, arr2) {
    let c = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            c.push(arr1[i]);
            i++;
        } else {
            c.push(arr2[j]);
            j++;
        }
    }

    
    while (i < arr1.length) {
        c.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        c.push(arr2[j]);
        j++;
    }

    return c;
}

let a = [3, 7, 11, 13];
let b = [2, 5, 6, 14, 15, 17];

let c = combinarArrays(a, b);
console.log(c);
