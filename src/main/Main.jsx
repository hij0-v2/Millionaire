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
    <div classname="area">
      {start === true &&
      <div>
        <div classname="startBox">
        <button onClick={() => startGame()}>Start</button>
        </div>
      </div>}
      {start === false && <Game/>}
    </div>
  )
}

export default Main;