import React, { useState } from 'react';
import data from '../data/Data'
import './main.css'
import Game from '../game/Game'



function Main(){
  let [start, setStart] = useState(true);

  const startGame = () => {
    setStart(false);
  }

  return(
    <div id="area">
      {start === true &&
      <div id="startBox">
        <p>WHAT IS GOING ON</p>
        <button onClick={() => startGame()} classname="startButton">Start</button>
      </div>}
      {start === false && <Game/>}
    </div>
  )
}

export default Main;