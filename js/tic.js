let turncounter = 0;

function startGame() {

    // turn & winner are global variables, access from everywhere
    document.turn = "TicTac";
    document.winner = null;
    setMessage("<span id='tic'>" + document.turn + "</span>" + " starts");
}

// the function to set the "whos turn is it"-message.
function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

function nextMove(square) {

    if (document.winner === null) {
        turncounter++;


        if (square.innerHTML === '') {
            square.innerHTML = document.turn;
            square.classList.remove("clickable");
            if (document.turn === "TicTac") {
                square.style.backgroundImage = "url('../img/tictac.png')";
            }
            if (document.turn === "Toe") {
                square.style.backgroundImage = "url('../img/toe.png')";
            }

            switchTurn();
        } else {
            setMessage("not this!");
            turncounter--;
        }
    }
    if (document.winner === null && turncounter === 9) {
        setMessage("Draw!");
        document.winner = "draw";
    }


}
// switch turn and turn message

function switchTurn() {

    if (checkForWinner(document.turn)) {
        setMessage(document.turn + " wins!!")
        document.winner = document.turn;
        document.getElementById("message").className += "win";
    } else if (document.turn == "TicTac") {
        document.turn = "Toe";
        setMessage("<span id='toe'>" + document.turn + "</span>" + "'s turn");
    } else {
        document.turn = "TicTac";
        setMessage("<span id='tic'>" + document.turn + "</span>" + "'s turn");
    }

}


// and here`s the whole logic:
// a, b, c in checkRow() are equal to the square class names --> check the getBox function!
// move equals "TicTac" or "Toe" 

function checkForWinner(move) {
    let result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    let result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    // cool way to get id`s!!!!! check it!!!!!
    return document.getElementById("s" + number).innerHTML;
}
// again: cool way to get id`s! This time in a "for loop" check it!!!!!
function clear() {
    for (let i = 1; i < 10; i++) {

        document.getElementById("s" + i).innerHTML = "";
        document.getElementById("s" + i).style.backgroundImage = "none";
        document.getElementById("s" + i).className = "Square clickable";
        document.getElementById("message").className = "";
        turncounter = 0;
        startGame();
    }
}
