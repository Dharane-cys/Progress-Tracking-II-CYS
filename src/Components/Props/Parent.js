import React from 'react'

import Child from "./Child";
 function App()
 {
    return(
        <div>
        <h1>This is a parent component</h1>
        <ul>
        <li>
        <Child
              gfgcolor="green"
              usercolor="blue"
              />
        </li>
        </ul>
        </div>
    )
 }
 export default App;
