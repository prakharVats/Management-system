import { Box, Button, Stack, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const NewFileFolder = ({type , setControls , controls , Home}) => {

  const [name , SetName] = useState();

  function handleOnClick(){
    setControls("");
  }

  function handleOnChange(e){
    SetName(() => e);
  }

  const handleCreate = async () =>{
    try {
      alert("Item Added! Reload page");
      const response = await axios.post('http://localhost:3000/project/postProject', {
          name : `${name}`,
          belongs : `${Home.key}`,
          type : `${controls.toLowerCase()}`
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Box sx={{height:"150px" , width:"450px" , position:"absolute" , top:"300px" , left:"600px", zIndex : 5 , bgcolor:"#f8fafc" , p:2 , borderRadius:"15px" , boxShadow:"5px 5px 15px rgba(0, 0, 0, 0.3)"}}>
      <Typography sx={{mt:"10px" , ml:"10px"}}>{type} Name</Typography>
      <input onChange={(e) => handleOnChange(e.target.value)} placeholder='name' style={{outline:"none" , border:"none" , backgroundColor:"white" , padding:"10px" , fontSize:"17px" , borderRadius:"7px" , width:"90%" , marginTop:"15px" , marginLeft:"10px"}}/>
      <Stack direction="row" mt={2}>
        <Button onClick={handleCreate} sx={{textTransform:"none" , color:"black"}}>Create</Button>
        <Button onClick = {handleOnClick} sx={{textTransform:"none" , color:"black"}}>Close</Button>
      </Stack>
    </Box>
  )
}

export default NewFileFolder