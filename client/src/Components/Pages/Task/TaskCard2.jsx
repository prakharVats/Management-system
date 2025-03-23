import { Box , Stack , Typography } from '@mui/material'
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import CheckBox from "./CheckBox"
import React from 'react'


// fee2e2 E0E7FF #fff7cc 
const TaskCard = ({e , setCurrentTask , index , setShowCurrentTask , setTask}) => {
  function handleOnCLick(){
    setCurrentTask(() => index);
    setTask(() => e);
    setShowCurrentTask(() => true);
  }

  return (
    <Stack spacing="auto" direction="row" sx={{bgcolor:`${e.priority === "High" ? "#fee2e2" : e.priority === "Medium" ? "#E0E7FF" : "#fff7cc"}`, borderRadius:"7px" , mt:2}}>
       
          <Box p={2} sx={{ml:"10px" , mt:"10px" , borderRadius:"7px", width:"80%"}}>
            <Stack direction = "row">
                <Typography sx={{textDecoration:"underline"}} fontWeight={700} fontSize={15}>{e.name}</Typography>
                <Typography fontSize={15} sx={{ml:"20px"}}>Time Period : {e.startTime} - {e.endTime}</Typography>
            </Stack>

            <Stack direction="row" mt={2}>
                <Typography fontSize={15}>Hours Taken : {e.time}</Typography>
                <Typography fontSize={15} sx={{ml:"20px"}}>Status : {e.status}</Typography>
                <Typography fontSize={15} sx={{ml:"20px"}}>Priority : {e.priority}</Typography>
            </Stack>

            {/* <Typography onClick = {handleOnCLick} sx={{ width:"40px" , fontWeight:600 , mt:"30px", cursor:"pointer" , "&:hover" : {textDecoration:"underline"}}}>start</Typography> */}
          </Box>

      {/* color:"#e56a6a"  #198c84*/}
      <Box sx={{position:"relative", overflow:"hidden" , height:"130px" }}>
          {/* <CheckBox/> */}
          {/* <IoMdCheckmarkCircleOutline style={{height:"150" , width:"150" , color:"#075544" , position:"relative" , top:"30" , left:"20"}}/> */}
      </Box>
    </Stack>
    
  )
}

export default TaskCard;