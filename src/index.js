import { gameBoard } from "./gameboard";

// import your function
import myName from './gameboard';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  return element;
}

document.body.appendChild(component());