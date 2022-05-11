const cell = Array.from(document.getElementsByClassName('cell'));
console.log(cell);

const playerX ='X';
const playerO = 'O';
var currPlayer = playerX; 

const winCombos = [
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
           gameTitle = `${currPlayer} won the game!`
        }
      })
}

cell.forEach(function(cell, index){
    cell.addEventListener('click', function(){
        console.log(index)
        if(cell.innerText != ""){
            return
        }
        cell.innerText = currPlayer; 
        if (currPlayer == playerX){
            currPlayer = playerO
        } else {
           currPlayer = playerX
        }
        checkForWinner()
    })
})


//// reset button
cell.forEach(function(cell){
var button = document.getElementById('button');
button.addEventListener('click', function(){
    cell.innerText = "";
  })
})



/*const id = e.target.id
        if(!cells[id]){
            cells[id] = currPlayer
            e.target.innerText = currPlayer
        }


function checkForWinner(){
  if((cells[0] == cells[1] == cells[2]) || (cells[3] == cells[4] == cells[5]) || (cells[6] == cells[7] == cells[8])
  || (cells[0] == cells[4] == cells[8]) || (cells[2] == cells[4] == cells[6]) || (cells[2] == cells[5] == cells[8]
  || (cells[1] == cells[4] == cells[7])|| (cells[0] == cells[3] == cells[6]))){
         console.log('winner')
      }
}*/

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