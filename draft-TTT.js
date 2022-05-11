const cell = Array.from(document.getElementsByClassName('cell'));
console.log(cell);

const playerX ='X';
const playerO = 'O';
var currPlayer = playerX; 

/*const pos0 = cell[0]
const pos1 = cell[1]
const pos2 = cell[2]
const pos3 = cell[3]
const pos4 = cell[4]
const pos5 = cell[5]
const pos6 = cell[6]
const pos7 = cell[7]
const pos8 = cell[8]*/

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

function checkForWinner(){
    winCombos.forEach(function(combination){
        let check = combination.every(cell => cell.innerText == currPlayer)
        if(check){
            alert(currPlayer + " has won")
        }
      })
}

cell.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText != ""){
            return
        }
        cell.innerText = currPlayer; 
        if (currPlayer == playerX){
            currPlayer = playerO
        } else {
           currPlayer = playerX
        }
        console.log(checkForWinner());
    })
})




cell.forEach(function(cell){
var button = document.getElementById('button');
button.addEventListener('click', function(){
    cell.innerText = "";
  })
})




/*
       //vertically
 if((pos0!= " ") && (pos0 == pos1) && (pos1 == pos2)){
    console.log("winner")
}
//var pos = cell.forEach(( cell, index) => console.log(`${index}`))

winCombos.forEach(function(combo){
      let check = combo.every(index => cell[index].innerText.trim() == currPlayer)
      if(check){
          alert(currPlayer + " has won")
      }
    })

   return winCombos.some(combinations =>{
        return combinations.every(c =>{
            if (cell[c].classList.contains(currPlayer)){
                return true;
            }
            return false;
        })
    })

let gameOver = false;
window.onload = function() {
    startGame();
}

*/