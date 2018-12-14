//example input
const startingLetter = 'X';
const array = [
    ['O', '', 'O'],
    ['X', 'X', 'O'],
    ['O', 'X', 'X']
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

//check if val is 'X'
function checkWinX(val) {
    return val == 'X';
}

//check if val is 'O'
function checkWinO(val) {
    return val == 'O';
}

//check if arr contains ''
function containsEmptyString(arr) {
    for (let key in arr) {
        if (arr[key] === '') {
            return true;
        }
    }
    return false;
}

//check the status of the game
function evaluate(arr) {
    //initiate variables
    let row1, row2, row3, col1, col2, col3, rex1, rex2, all, result;

    //create array for each row
    row1 = arr[0];
    row2 = arr[1];
    row3 = arr[2];

    //create array for each column
    col1 = [arr[0][0], arr[1][0], arr[2][0]];
    col2 = [arr[0][1], arr[1][1], arr[2][1]];
    col3 = [arr[0][2], arr[1][2], arr[2][2]];

    //create array for each diagonal
    rex1 = [arr[0][0], arr[1][1], arr[2][2]];
    rex2 = [arr[0][2], arr[1][1], arr[2][0]];

    //create array of all rows, columns and diagonals
    all = [row1, row2, row3, col1, col2, col3, rex1, rex2];

    //loop through all arrays and check for win, draw or undecided
    for (let key in all) {
        result = all[key].every(checkWinX);
        if (result === true) {
            return 'X';
        }
        result = all[key].every(checkWinO);
        if (result === true) {
            return 'O';
        }
    }
    for (let key in all) {
        result = containsEmptyString(all[key]);
        if (result === true) {
            return 'undecided';
        }
    }
    return 'draw';
}

//execute example
if (isValid(array, startingLetter)) {
    console.log(evaluate(array));
} else {
    console.log("Array invalid");
}