import React from 'react'
import Button  from '@mui/material/Button';
import Stack  from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handle1=()=>{
    navigate("/layout")
  }
  const handle2=()=>{
    navigate("/blog")
  }
  const handle3=()=>{
    navigate("/contact")
  }
  return (
    <div>
    <Stack spacing={2} direction="row" style={{paddingLeft:'600px',paddingTop:'50px'}}>
    <Button variant="contained" onClick={handle1}>Layout</Button>
    <Button variant="contained" onClick={handle2}>Blog</Button>
    <Button variant="contained" onClick={handle3}>Contact</Button>
    </Stack>
    </div>
  )
}

export default Home