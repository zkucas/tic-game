import { gameBoard } from "./gameboard";
import styles from "../src/style.css";


const Player = (playerType, playerName, token, choice) => {

    const getName = () => playerName;

    const getToken = () => token;

    const getPlayerChoice = () => choice;

    const aiMove = () => {
        const availableChoice = [];
        const rand = Math.floor(Math.random() * availableChoice.length);
        return availableChoice[rand]
        
    }

    return {getPlayerChoice, getName, getToken}
}



function Game (){

        const p1 = Player('human', 'Ziggy', 1, 'X');
        const p2 = Player('ai', 'Computer', 2, 'O');

        const test = gameBoard(p1,p2);
        const t2 = test.draw()
        
      
    }

const game = Game()













