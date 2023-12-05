import React from 'react'
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
const Layout = () => {
    const navigate=useNavigate();
    const handleback2=()=>{
         navigate("/home")
    }
  return (
    <div><h1>This is Layout Page</h1>
    <Button variant="contained" onClick={handleback2}>Back</Button>
    </div>
  )
}

export default Layout