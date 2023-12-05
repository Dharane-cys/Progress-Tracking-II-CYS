import React, {useState}from 'react'

const Usestate = () => {
    const [count,setcount] = useState(0);
  return (
    <div>
    <p>count:{count}</p>
    <button onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default Usestate