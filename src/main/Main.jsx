import React, { useState } from 'react';
import data from '../data/Data'
import './main.css'



function Main(){
    let [skid, setSkid] = useState(0);

    const nextQuestion = (buttonid) => {
      if (buttonid === true){
        const next = skid + 1;
        setSkid(next);
        console.log(buttonid)
      }
      else{
        alert("Fuck off")
        console.log(buttonid)
      }
    }
  return(
    <div className="box">
      <div className="text">{data[skid].text}</div>
      <div className="btnbox">
      {data[skid].buttons.map((button) => {
        return <button onClick={() => nextQuestion(button.buttonid)} className="btn">{button.buttont}</button>
      })}
  </div>
  </div>
  )
}

export default Main;