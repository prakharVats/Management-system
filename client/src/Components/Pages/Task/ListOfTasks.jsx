import { Box, Button, Stack, Typography } from '@mui/material'
import DropDown from "./DropDown"
import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import TaskCard2 from './TaskCard2'
import axios from 'axios'

const styling = {
  fontSize:"15px"
}
 
const ListOfTasks = ({data , currentTask , setCurrentTask , form , setForm}) => {

  const filteredData = data.filter(item => item.status !== "complete");
  const filteredDataCompleted = data.filter(item => item.status === "complete");
  const [showCurrentTask , setShowCurrentTask] = useState(false);
  const [task , setTask] = useState(); 


  


  function handleDrop(){
    setCurrentTask(0);
    setShowCurrentTask(() => 0);
  }




  const handleComplete = async() =>{
    const timeTaken = prompt("how many hours did you take to complete this task?!");
      try {
        alert("Item updated! Reload page");
        const response = await axios.post('http://localhost:3000/task/postUpdateTask', {
            id : `${task._id}`,
            name : `${task.name}`,
            startTime : `${task.startTime}`,
            endTime : `${task.endTime}`,
            priority : `${task.priority}`,
            status : `complete`,
            time : `${timeTaken}`
        });
        // window.location.reload(()=> {console.log("refreshed")});
      } catch (error) {
        console.error('Error:', error);
      }
  }


  // time difference
  function getTimeDifference(time1, time2) {
    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };
  
    let diff = timeToMinutes(time2) - timeToMinutes(time1);
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
  
    return `${hours} hrs ${minutes} mins`;
  }
  const time = getTimeDifference(data[`${currentTask}`].startTime, data[`${currentTask}`].endTime);

  return (
    <Box sx={{mt:2 , p : 2 , bgcolor:"white"}}>
        {showCurrentTask ? <>
        <Typography>Ongoing task :</Typography>
          <Box sx={{ height:"200px" , mt:"10px" }}>

            <Stack direction="row" pl={4} >
              <Box>
                <Stack direction="row" spacing={1} mt={4}>
                  <Typography sx={{...styling}}>Task name : </Typography>
                  <Typography sx={{...styling}}>{data[`${currentTask}`].name}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} mt={1}>
                  <Typography sx={{...styling}}>Time Allotted : </Typography>
                  <Typography sx={{...styling}}>{time}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} mt={1}>
                  <Typography sx={{...styling}}>Priority : </Typography>
                  <Typography sx={{...styling}}>{data[`${currentTask}`].priority}</Typography>
                  <Typography style={{...styling , marginLeft:"20px"}}>Progress : </Typography>
                  <Typography sx={{...styling}}>30%</Typography>
                </Stack>

                <Stack direction="row" mt={1}>
                  <Button onClick={handleComplete} variant='contained' sx={{fontSize:"12px" , height:"30px" , width:"80px" , textTransform:"none" , bgcolor:"#2f4884"}}>Completed</Button>

                  <Button onClick={handleDrop} variant='contained' sx={{fontSize:"12px" , height:"30px" , textTransform:"none" , ml:"10px" , bgcolor:"#2f4884"}}>Drop</Button>
                </Stack>
              </Box> 
              <img style={{marginLeft:"100px" , marginTop:"-20px"}} src="../../../../public/animation.gif" alt="Animated GIF" width="220"/>
            </Stack>

          </Box>
          </> : ""}
          
          {filteredData.length ? <Box mt={2}>
            <DropDown Text="Time" arr={["Priority" , "Time"]}/>
            {filteredData.map((e , index) => <TaskCard e = {e} index = {index} setCurrentTask={setCurrentTask} setShowCurrentTask={setShowCurrentTask} setTask={setTask}/>)}
          </Box> :<Typography sx={{color:"#3d547a" , fontWeight:700}}>No task pending! 100% Completed</Typography> }

          {filteredDataCompleted.length ? <><Typography fontWeight={700} sx={{color:"#3d547a" , mt:"30px" , ml:"5px"}}>{filteredDataCompleted.length} {filteredDataCompleted.length > 1 ? "Tasks" : "Task"} Completed : </Typography>
          {filteredDataCompleted.map((e , index) => <TaskCard2 e = {e} index = {index} setCurrentTask={setCurrentTask} setShowCurrentTask={setShowCurrentTask} setTask={setTask}/>)}</> : ""}
    </Box>
  )
}

export default ListOfTasks