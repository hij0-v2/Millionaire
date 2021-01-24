import React, { useState } from 'react';
import data from '../data/Data'
import './main.css'
import Game from '../game/Game'
import dyingAnim from '../resources/images/dyingAnim.gif'
import dyingSound from '../resources/sound/dyingSound.mp3'




function Main(){
  let [start, setStart] = useState(true);
  let [gameState, setOver] =useState(false);
  

  const startGame = () => {
    setStart(false);
  }
  const gameOver = () => {
    setOver(true);
  }

  const setHalfVolume = () => {
    setTimeout(() => {      let myAudio = document.getElementById("audio");  
    myAudio.volume=0.2 ; }, 1);
  }



  return(
    <div id="area">
      {start === true &&
      <div id="startBox">
        <p>WHO WANTS TO BE A WEB DEVELOPER</p>
        <button onClick={() => startGame()} classname="startButton">Start</button>
      </div>}
      {start === false && gameState === false && <Game target={gameOver}/>}
      {gameState ===true && <div>
      <img src = {dyingAnim}/>
      <audio id="audio" autoPlay="autoplay" onLoadedData={setHalfVolume()}>
      <source src= {dyingSound} type="audio/mpeg"/>
      </audio>
        <p><h1>GAME OVER</h1></p>
        </div>}
    </div>
  )
}

export default Main;