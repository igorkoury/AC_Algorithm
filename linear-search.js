const arr = [2, 5, 8, 1, 4, 7, 9, 6, 3];

const key = 6;

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key){
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr, 6));