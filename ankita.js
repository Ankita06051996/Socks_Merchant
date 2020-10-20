const n = 17;
const socks = [1, 2, 1, 1, 1, 3, 3, 3 ,3 ,4 ,3 ,3 , 4, 3, 4, 4, 4];
function socks_Merchant( n, arr ) {
    let sorted = arr.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}


console.group('Sorted and counted');
console.log(`There is a total of ${socks_Merchant(n, socks)} pairs`);
console.groupEnd();
