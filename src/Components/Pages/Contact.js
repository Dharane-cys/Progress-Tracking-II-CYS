import React from 'react'
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate= useNavigate();
    const handle=()=>{
         navigate("/home")
    }
  return (
    <div><h1>This is Contact Page</h1>
    <Button variant="contained" onClick={handle}>Back</Button>
    </div>
  )
}

export default Contact