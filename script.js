const startingLetter = 'X';
const array = [
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X']
];

// function to check if the current playfield is valid
function isValid(arr, startLetter) {

    //Initialize temp vars
    let x, o, k, d;
    //make sure they are integers
    x = o = k = d = 0;

    //loop through two-dimensional array so get the amount of 'X's and 'O's
    //loop first dimension of array
    for (let i in arr) {
        //loop second dimension of array
        for (let j in arr[i]) {
            if (arr[i][j] == 'X') {
                x++;
            } else if (arr[i][j] == 'O') {
                o++;
            } else if (arr[i][j] == '') {
                k++;
            } else {
                //log error
                console.log(`Error while checking playing field (Playfield contains invalid character: ${arr[i][j]})`);
                return false;
            }
        }
    }

    //k is 1 or 0 when field is valid
    k %= 2

    //determine computing instruction based on the startLetter
    if (startLetter == 'X') {
        d = x - o;
    } else if (startLetter == 'O') {
        d = o - x;
    } else {
        console.log(`Error while checking playing field (startLetter is invalid or empty: <${startLetter}>)`);
        return false;
    }

    //check array by values and set result according to them
    let result = (k != 0) ? ((x == o) ? true : false) : ((d <= 1 && d >= 0) ? true : false);

    //return the result as value of the function
    return result;
}


console.log("Array is valid: " + isValid(array, startingLetter));
