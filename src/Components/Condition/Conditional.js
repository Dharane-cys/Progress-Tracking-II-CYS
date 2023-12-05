import React, {useState} from 'react'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const Conditional = () => {
    const [state,setState] = useState({isLogged:true});

  return (state.isLogged ? <Login/> : <Signup/>)
}

export default Conditional;