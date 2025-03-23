import { Box, Grid2, Typography } from '@mui/material'
import Table from "./Table"
import ControlBar from "./ControlBar"
import Complete from './Complete'
import Status from './Status'
import Efficient from './Efficient'
import ListOfTasks from './ListOfTasks'
import { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import axios from 'axios'

// const data1 = [
//   {
//     "name" : "milk and breakfast",
//     "startTime" : "9:00",
//     "endTime" : "10:00",
//     "status" : "pending",
//     "priority" : "medium"
//   },
//   {
//     "name" : "Book reading",
//     "startTime" : "12:00",
//     "endTime" : "13:00",
//     "status" : "pending",
//     "priority" : "medium"
//   },
//   {
//     "name" : "coding",
//     "startTime" : "10:00",
//     "endTime" : "12:00",
//     "status" : "pending",
//     "priority" : "high"
//   },
//   {
//     "name" : "book reading",
//     "startTime" : "13:00",
//     "endTime" : "14:00",
//     "status" : "pending",
//     "priority" : "medium"
//   },
//   {
//     "name" : "Morning Exercise",
//     "startTime" : "8:00",
//     "endTime" : "9:00",
//     "status" : "pending",
//     "priority" : "high"
//   },
//   {
//     "name" : "Sunlight exposure",
//     "startTime" : "7:30",
//     "endTime" : "8:00",
//     "status" : "pending",
//     "priority" : "medium"
//   },
//   {
//     "name" : "Work on your project",
//     "startTime" : "15:00",
//     "endTime" : "18:00",
//     "status" : "pending",
//     "priority" : "high"
//   },
//   {
//     "name" : "Lunch and rest",
//     "startTime" : "14:00",
//     "endTime" : "15:00",
//     "status" : "pending",
//     "priority" : "high"
//   },
//   {
//     "name" : "Gym",
//     "startTime" : "18:00",
//     "endTime" : "19:00",
//     "status" : "pending",
//     "priority" : "high"
//   },
//   {
//     "name" : "Youtube / research etc",
//     "startTime" : "20:00",
//     "endTime" : "22:00",
//     "status" : "pending",
//     "priority" : "low"
//   },
//   {
//     "name" : "Bath",
//     "startTime" : "19:00",
//     "endTime" : "20:00",
//     "status" : "pending",
//     "priority" : "medium"
//   },
//   {
//     "name" : "End the day",
//     "startTime" : "22:00",
//     "endTime" : "23:00",
//     "status" : "pending",
//     "priority" : "high"
//   },
// ]


// sorting logic
// const data = data1.sort((a, b) => {
//   const timeToMinutes = (time) => {
//     const [hours, minutes] = time.split(":").map(Number);
//     return hours * 60 + minutes;
//   };
//   return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
// });


const Task = () => {
const [data , setData] = useState();


const [statusData , setStatusData] = useState({
  complete : 1,
  notComplete : 1,
  totalHrs : 0,
  reqHrs : 0
});




//  time handling 
function parseTime(timeStr) {
  let hours = 0, minutes = 0;

  let hrMatch = timeStr.match(/(\d+)\s*hrs?/);
  let minMatch = timeStr.match(/(\d+)\s*min/);

  if (hrMatch) hours = parseInt(hrMatch[1]); 
  if (minMatch) minutes = parseInt(minMatch[1]);

  return hours * 60 + minutes; // Convert everything to minutes
}

function sumTimes(timeArr) {
  let totalMinutes = timeArr.reduce((sum, timeStr) => sum + parseTime(timeStr), 0);

  let finalHours = Math.floor(totalMinutes / 60);
  let finalMinutes = totalMinutes % 60;

  return finalHours > 0 
      ? `${finalHours} hrs ${finalMinutes > 0 ? finalMinutes + " min" : ""}`.trim() 
      : `${finalMinutes} min`;
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


  // fetching data
  useEffect(() => {
    axios.get("http://localhost:3000/task/getTask")
      .then((response) => {
        const normalizeTime = (time) => {
          const [hours, minutes] = time.split(":").map(Number);
          return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        };
        const sortedData = response.data.sort((a, b) => 
          normalizeTime(a.startTime).localeCompare(normalizeTime(b.startTime))
        );
        setData(() => [...sortedData]); // Ensures re-render
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  useEffect(() => {
    //  time handling
    let temp = data?.filter(item => item.time !== "") ?? [];
    temp = temp.map((e) => e.time);
    let temp2 = data?.filter(item => item.status !== "complete") ?? []

    if(temp.length && temp2.length){
      let total = sumTimes(temp);

      let total2 = temp2.map(e => getTimeDifference(e.startTime, e.endTime))
      total2 = sumTimes(total2);
      setStatusData(() => ({
        complete : data?.filter(item => item.status === "complete").length,
        notComplete : data?.filter(item => item.status !== "complete").length,
        totalHrs : total,
        reqHrs : total2
      }))
    }
  }, [data])

  const [action , setAction] = useState("");
  const [currentTask , setCurrentTask] = useState(0);
  const [form , setForm] = useState({
    "name" : "",
    "startTime" : "",
    "endTime" : "",
    "priority" : "Priority",
    "time" : "",
    "_id" : "",
    "status" : "pending"
  });

  const [show , setShow] = useState({
    task : 1,
    list : 0,
    add : 0,
    edit : 0,
    remove : 0
  });
  
  return (
    <Grid2 container sx={{bgcolor:"#f1f5f9"}}>
      <Grid2 size={7.5} p={2} pr={0}>
        <ControlBar show = {show} setShow={setShow} setAction={setAction}/>

        {/* one of the most messy state management ever written! */}
        {data ? <>
        {show.task ? <Table data={data} type = "normal"/> : ""}
        {show.list ? <ListOfTasks setStatusData={setStatusData} form={form} setForm={setForm} data = {data} currentTask = {currentTask} setCurrentTask = {setCurrentTask} /> : ""}
        {show.add ? <><AddProduct action={action} setShow = {setShow} form = {form} setForm={setForm}/><Table data={data} type="normal"/></>: ""}
        {show.edit ? <><Typography sx={{color:"#3d547a" , mt:"15px" , ml:"15px" , fontWeight:"bold"}}>Select an item to edit :</Typography><Table setAction={setAction} setShow={setShow} setForm={setForm} data={data} type="edit"/></>: ""}
        {show.remove ? <><Typography sx={{color:"#3d547a" , mt:"15px" , ml:"15px" , fontWeight:"bold"}}>Select an item to remove :</Typography><Table setShow={setShow} setForm={setForm} data={data} type = "remove"/></>: ""}
        {!show.remove && !show.task && !show.list && !show.add && !show.edit? <Table data={data} type = "normal"/>: ""}
       </> : "Loading..."}
        
      </Grid2>
      <Grid2 size={4.5}>
        <Box sx={{position:"sticky" , top:"60px" , overflow:"auto"}}>
          <Complete data={data}/>
          <Status statusData = {statusData}/>
          <Efficient/>
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default Task;