import React, { useState } from 'react';
import data from '../data/Data'
import './main.css'
import Game from '../game/Game'



function Main(){
  let [start, setStart] = useState(true);
  let [gameState, setOver] =useState(false);

  const startGame = () => {
    console.log(Game.target)
    setStart(false);
  }
  const gameOver = () => {
    console.log(gameState);
    setOver(true);
    console.log(gameState);
  }


  return(
    <div id="area">
      {start === true &&
      <div id="startBox">
        <p>WHAT IS GOING ON</p>
        <button onClick={() => startGame()} classname="startButton">Start</button>
      </div>}
      {start === false && gameState === false && <Game target={gameOver}/>}
      {gameState ===true && <p><h1>GAME OVER</h1></p>}
    </div>
  )
}

export default Main;