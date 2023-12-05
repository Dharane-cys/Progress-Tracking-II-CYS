import React from 'react'
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
const Blog = () => {
    const navigate= useNavigate();
    const handleback1=()=>{
         navigate("/home")
    }
  return (
    <div><h1>This is Blog Page</h1>
    <Button variant="contained" onClick={handleback1}>Back</Button>
    </div>
  )
}

export default Blog