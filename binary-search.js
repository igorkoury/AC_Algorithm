var list = [17, 20, 26, 31, 44, 54, 55, 65, 77, 93];

function binarySearch(array, iten) {
    let first = 0;
    let last = array.length - 1;
    let found = false;

    while(first <= last && !found) {
        let middleList = Math.ceil((first + last) / 2);
        if(array[middleList] == inten) {
            found = true
        } else {
            if (iten < array[middleList]) {
                last = middleList - 1
            }
            else {
                first = middleList + 1
            }
        }
    }
    return found;
}

console.log(binarySearch(list, 17));
