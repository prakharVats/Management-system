import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const style = {
 textTransform: 'none' ,
 color:"black" , 
 backgroundColor:"white" , 
 cursor:"pointer",
 border:"none" , 
 height:"35px" , 
 width:"260px",
 paddingLeft:"5px", 
 paddingRight:"5px",
 '&:hover' : {backgroundColor:"#eef1f6"},
 justifyContent: 'flex-start', // Aligns content to the right
 textAlign: 'left',
}

const DropDown = ({form , setForm , open , setOpen }) => {
  const arr = ["High" , "Medium" , "Low"];

  function handleDropDown(){
    setOpen(!open)
  }
  function handleOnPriority(e){
    setForm((prev)=>({...prev , priority : e}))
    setOpen(1)
  }
  return (
    <>
      <button onClick={handleDropDown}  style={{cursor:"pointer" , border:"1px solid #3d547a" ,textAlign:"left",height:"35px" , width:"263px" , backgroundColor:"white" , paddingLeft:"5px" , paddingRight:"5px" , display: 'flex', alignItems: 'center', justifyContent: 'space-between' , marginTop:"15px"}}>
        <Typography  sx={{display:"inline" , fontSize:"14px"}}>{form.priority}</Typography>
        {open ? <IoIosArrowUp style={{marginTop:"4px"}}/> : <IoIosArrowDown/>}
      </button>

      {!open ? <Box  sx={{bgcolor:"white" , border:"1px solid black" , borderTop:"none" , width:"260px"}}>
        {arr.map(e => <Box key={e}><Button sx={style} onClick={() => handleOnPriority(e)}>{e}</Button></Box>)}
      </Box> : ""}
    </>
  )
}

export default DropDown