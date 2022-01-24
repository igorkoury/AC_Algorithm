const myArray = [2, 1, 4, 5, 3, 6, 7];

const min = Math.min(...myArray);
const max = Math.max(...myArray);

console.log("O valor mínimo do array é: " + min);
console.log("O valor máximo do array é: " + max);

/*
pseudo código
busca linear:
- definior o primeiro valor do array como o maior
- comparar com o seguinte
- se o seguinte for maior, substituí-lo
- fazer isso até percorrer todo o array
*/

var maior = myArray[0];
for (i=0; i<myArray.length; i++) {
    if (myArray[i] > maior) {
        maior == myArray[i];
    }
}

console.log(maior);
