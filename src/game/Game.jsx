import React, { useState } from 'react';
import data from '../data/Data'
import './game.css'
import Main from '../main/Main'
import dyingAnim from '../resources/images/dyingAnim.gif'
import dyingSound from '../resources/sound/dyingSound.mp3'




function Game(target){
    let [skid, setSkid] = useState(0);
    let [score, setScore] =useState(0);
    let [lights, setLights] =useState(15);
    const createLights = () => {
      let table = []
      for (let i = 0; i < lights; i++) {
        let children = []
        //Inner loop to create children
        children.push(<img src="https://i.imgur.com/r4roZFo.png"/>)
        //Create the parent and add the children
        table.push(<tr>{children}</tr>)
      }
      return table
    }

    const gameOver = () => {
      target.target()
      /*pls insert image and audio cus i have no fucking clue how to do that in to the game over screen ty
      <img src = {dyingAnim}/>
      <audio id="audio" autoplay loop onloadeddata="setHalfVolume()">
      <source src= {dyingSound}>
      </audio> */
       
    }

    const setHalfVolume = () => {
      let myAudio = document.getElementById("audio");  
      myAudio.volume = 0.2;
    }


    const createShines = () => {
      let table = []
      for (let i = 1; i <= score; i++) {
        let children = []
        children.push(<img src="https://i.imgur.com/aw7b039.png"/>)
        table.push(<tr>{children}</tr>)
      }
      return table
    }

    const nextQuestion = (buttonid) => {
      if (buttonid === true){
        let lightCount=lights - 1;
        setLights(lightCount);
        const next = skid + 1;
        const nextScore = score + 1;
        setScore(nextScore);
        setSkid(next);
      }
      else if (buttonid === false){
        gameOver();
      }
    }


  return(
    <div className="bigBox">
      <div className="lightsbox">
        {createLights()}
        {createShines()}
      </div>
    <div className="box">
      <div className="boxbox">
      <h1 classname="questionNr">Question {skid+1}</h1>
      <div className="text">{data[skid].text}</div></div>
      
      <div className="btnbox">
      {data[skid].buttons.map((button) => {
        return <button onClick={() => nextQuestion(button.buttonid)} className="btn">{button.buttont}</button>
      })}
      </div>
    </div>
      <div className="lightsbox">
        {createLights()}
        {createShines()}
      </div>
  </div>
  )
}

export default Game;