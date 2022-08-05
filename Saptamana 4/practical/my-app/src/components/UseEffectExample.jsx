import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const UseEffectExample = () => {
    const [query, setQuery ] = useState("");
    const [random, setRandom] = useState(0);
    // useEffect( () => {}, []);

    // 1 )
    // useEffect( () => {
    //     console.log("Se apeleaza useEffect!")
    //     console.log("Se apeleaza la fiecare modificare a state-ului, oricare state!")
    // });

    

    // // 2 )
    // useEffect( () => {
    //     console.log("Se apeleaza useEffect!")
    //     console.log("Se apeleaza la fiecare modificare a state-ului din lista de parametrii!!")
    // }, [ random , query]);


    // 3 )
    useEffect( () => {
        console.log("Se apeleaza useEffect!")
        console.log("Se apeleaza o singura data la inceput !")
        console.log("Se comporta ca si componentDidMount!")
    }, []);
   
    return (
        <div>
            <input type="text" 
                     onChange={ (event) => setQuery(event.target.value)}
            />
            <p>{query}</p>
            <button onClick={ () => setRandom(Math.random()) }> UseEffect - Random Listener</button>
        </div>
      
    )
}

export default UseEffectExample;


