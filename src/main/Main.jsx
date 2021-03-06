import React, { useState } from 'react';
import data from '../data/Data'
import './main.css'



function Main(){
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
    const createShines = () => {
      let table = []
      for (let i = 1; i <= score; i++) {
        let children = []
        //Inner loop to create children
        children.push(<img src="https://i.imgur.com/aw7b039.png"/>)
        //Create the parent and add the children
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
        console.log(buttonid)
      }
      else{
        alert("Fuck off")
        console.log(buttonid)
      }
    }
  return(
    <div className="bigBox">
      <div className="lightsbox">
        {createLights()}
        {createShines()}
      </div>
    <div className="box">
      <h1 classname="questionNr">Question {skid+1}</h1>
      <div className="text">{data[skid].text}</div>
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

export default Main;