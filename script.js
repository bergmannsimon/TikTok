
function isValid(arr) {

    let n, m, g, k;

    for (let i in arr) {
        for (let j in arr[i]) {
            if (arr[i][j] == 'X'){
                n++;
            } else if (arr[i][j] == 'O') {
                m++;
            } else if (arr[i][j] == '') {
                k++;
            } else {
                console.log("Error with two-dimensional playfield array");
            }
        }
    }
}
