
function gameBoard(p1,p2) {
    let gameB = {

        winner:false,

        select (){
            
            const grid = document.querySelectorAll('.boardGrid')
            const winnerh1 = document.querySelector('.winner')
            return {grid,winnerh1}
        },

        draw(){

            const grid = this.select().grid
            const winnerB = this.select().winnerh1
            grid.textContent = '';
            let values = [];
            const winningCombos = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            let activePlayer = p1;

            grid.forEach(cell => {
                cell.addEventListener("click", clickx, {once:true})   
            });

            function clickx(e){
                let playerChoice = activePlayer.getPlayerChoice();
                const cell = e.target
                cell.textContent = playerChoice

                if(checkWin(playerChoice) == true){
                    console.log(playerChoice + " is the winner")
                    winnerB.textContent = 'Congratulations ' + activePlayer.getName()
                    setTimeout(resetGame,5000);
                    setTimeout(gameB.draw(),5000)
                }

                swapTurns()
            }

            function swapTurns(){
                if (activePlayer == p1){
                    activePlayer = p2;
                }else{
                    activePlayer = p1;
                }
                return activePlayer;
            }

            function resetGame(){
                grid.forEach(cell => {
                    cell.textContent = ''
                    winnerB.textContent = ''    
                })   
            }


            function checkWin(playerChoice){
                return winningCombos.some(combo => {
                    return combo.every(index => {
                        return grid[index].textContent.includes(playerChoice)
                    })
                })
            }  
        }
    }

    return gameB
}


 
export {gameBoard}