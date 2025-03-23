import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#22335e",
    color: "#f1f5f9"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  }
}));


export default function CustomizedTables({type , data , setForm , setShow , setAction}) {
  // component={Paper}
  return (
    <TableContainer component={Paper} sx={{mt:"20px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Task</StyledTableCell>
            <StyledTableCell align="right">Time Period</StyledTableCell>
            <StyledTableCell align="right">Hours Taken</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Priority</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody >
          {data.map((row) => (
            <TableRowCompo row = {row} type={type} setForm={setForm} setShow={setShow} setAction={setAction}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const TableRowCompo = ({row , type , setForm , setShow , setAction}) =>{

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


  const time = getTimeDifference(row.startTime, row.endTime);

  function handleSelected(type , e){
    if(type === "edit"){
      setForm(() => e);
      setShow(() => ({add: 1, edit: 0, remove: 0 , list : 0, task : 0}))
    }else if(type === "remove"){
      alert("Item removed! Reload page");
        axios.post('https://management-system-jwp8.onrender.com/task/removeTask', {
          id : row._id,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    setAction(() => "Update");
  }
  
  return <TableRow
  onClick = {() => handleSelected(type , row)}
  // onClick={() => handleAction(action , row , setFormValues , SetAddEditRemove)}
  key={row.name}
  sx={{'&:last-child td, &:last-child th': { border: 0 } , "&:hover" : {backgroundColor:`${type === "remove" ? "#fcadad" : type === "edit" ? "#aabdff" : ""}` , cursor:`${type === "remove" || type === "edit" ? "pointer" : ""}`}}}>
    <TableCell component="th" scope="row">
    {row.name}
    </TableCell>
    <TableCell align="right">{time}</TableCell>
    <TableCell align="right">--</TableCell>
    <TableCell align="right">{row.status}</TableCell>
    <TableCell align="right">{row.priority}</TableCell>
</TableRow>
}