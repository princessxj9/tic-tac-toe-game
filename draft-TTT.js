const cell = Array.from(document.getElementsByClassName('cell'));
console.log(cell);

const playerX ='X';
const playerO = 'O';
var currPlayer = playerX; 

let winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [1,4,7],
    [0,3,6],
]

cell.forEach(function(cell){
    cell.addEventListener('click', function(){
        cell.innerText = currPlayer;

        if (currPlayer == playerX) {
            currPlayer = playerO;
        }
        else {
            currPlayer = playerX;
        }
    })
})






/*
let gameOver = false;
window.onload = function() {
    startGame();
}

function clearBoard(){
    document.getElementsByClassName('cell').reset();
}*/