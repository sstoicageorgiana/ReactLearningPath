import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const UseEffectTest = (props) => {
    const [test, setTest] = useState();
    const [test2, setTest2] = useState();

    useEffect(()=>{
        console.log("1.Se apeleaza la fiecare modificare a state-ului, oricare state!")
    });

    useEffect(()=>{
        console.log("2.Se apeleaza o singura data la inceput ; Se comporta ca si componentDidMount!")
    }, []);

    useEffect(()=>{
        console.log("3.Se apeleaza la fiecare modificare a state-ului din lista de parametrii!!")
    },[test2])

    

    return (
      <div>
        <p>{props.infoText}</p>
        <input type= "text" onChange={((e)=> {setTest(e.target.value)})}/>
        <p>{test}</p>

        <input type= "text" onChange={((e)=> {setTest2(e.target.value)})}/>
        <p>{test2}</p>
      </div>
    )
  }

export default UseEffectTest;