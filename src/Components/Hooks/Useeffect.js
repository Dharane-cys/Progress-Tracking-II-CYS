import {useState,useEffect} from 'react'
import React from 'react'

function Timer(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(() =>{
            setCount(count+1);
            alert("UseEffect")
        },10000 );
    });

    const update=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h1>I have rendered {count} times</h1>
        <button onClick={update}>Click</button>
        </>
    );
}

export default Timer