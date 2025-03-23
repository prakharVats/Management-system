import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"



// removing the data
function handleAction(action , data , setFormValues , SetAddEditRemove){
  if(action === "remove"){
    alert("Item removed! Reload page");
    axios.post('https://management-system-jwp8.onrender.com/finance/removeItem', {
      id : data._id,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }else if (action === "edit"){
    setFormValues((prev) => ({...prev , name : data.name , price : data.price , category : data.category , date:data.date , id : data._id}));
    SetAddEditRemove(()=>({add : false,
      edit : false,
      editC : true,
      remove : false}))
  }
}


// fetching the data
export default function DenseTable({setCount , searchbar , addEditRemove , SetAddEditRemove , setFormValues , billIncSav , setBillIncSav}) {
  const [rows , setRows] = useState([]);
  const [temp , setTemp] = useState([]);
  useEffect(() => {
    axios
      .get('https://management-system-jwp8.onrender.com/finance/getfinancelist')
      .then((response) => {
        setRows(() => response.data);
        setTemp(() => response.data);
        setCount(() => response.data);
  
        // Validate and calculate totals using reduce
        const totals = response.data.reduce(
          (acc, e) => {
            const price = Number(e.price); // Ensure price is a valid number
  
            if (!isNaN(price)) {
              switch (e.category?.toLowerCase().trim()) { // Handle case and spaces
                case 'spent':
                  acc.spending += price;
                  break;
                case 'received':
                  acc.income += price;
                  break;
                case 'pay':
                  acc.bill += price;
                  break;
                default:
                  console.warn(`Unexpected category: ${e.category}`);
              }
            } else {
              console.warn(`Invalid price for entry:`, e);
            }
  
            return acc;
          },
          { spending: 0, income: 0, bill: 0 } // Initial state for totals
        );
  
        // Update state once
        setBillIncSav((prev) => ({
          ...prev,
          spending: totals.spending,
          income: totals.income,
          bill: totals.bill,
        }));
  
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);
  
  
  

  useEffect(() => {
    if(searchbar?.length > 0){
      const x = rows.filter(e => {
        if(e.name.toLowerCase().includes(searchbar.toLowerCase())){
          return e;
        }
      })
      setTemp(() => x);
    }else {
      setTemp(() => rows);
    }

  }, [searchbar]);

 return (
    <TableContainer component={Paper} sx={{mt:"20px" , overflow:"auto" , maxHeight:"450px" , minHeight:"300px" , scrollbarWidth:"none"}} >
      <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="right"><strong>Amount</strong></TableCell>
            <TableCell align="right"><strong>Category</strong></TableCell>
            <TableCell align="right"><strong>Date</strong></TableCell>
           {/* {addEditRemove.edit || addEditRemove.remove ? <TableCell align="right"><strong>Action</strong></TableCell> : ""} */}
          </TableRow>
        </TableHead>
        <TableBody>

          {(!addEditRemove.remove && !addEditRemove.edit) ? temp.map((row) => (<TableRowCompo cursor = "" bgcolor = "" key = {row._id} row = {row} action = "none"/>)) : ""}

          {/* remove */}
          {(addEditRemove.remove && !addEditRemove.edit) ? rows.map((row) => (<TableRowCompo SetAddEditRemove="" setFormValues=""  cursor = "pointer" bgcolor="#fcadad" key = {row._id} row = {row} action = "remove"/>)) : ""}

          {/* edit */}
          {(!addEditRemove.remove && addEditRemove.edit) ? rows.map((row) => (<TableRowCompo SetAddEditRemove={SetAddEditRemove} setFormValues={setFormValues}  cursor = "pointer" bgcolor="#aabdff" key = {row._id} row = {row} action = "edit"/>)) : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TableRowCompo = ({row  ,action, bgcolor , cursor , setFormValues , SetAddEditRemove}) =>{
  return <TableRow
  onClick={() => handleAction(action , row , setFormValues , SetAddEditRemove)}
  key={row.name}
  sx={{'&:last-child td, &:last-child th': { border: 0 } , "&:hover" : {backgroundColor:`${bgcolor}` , cursor:`${cursor}`}}}>
  <TableCell component="th" scope="row">
    {row.name ? row.name : "NA"}
  </TableCell>
  <TableCell align="right">{row.price ? row.price : "NA"}</TableCell>
  <TableCell align="right">{row.category === "Categories" ? "NA" : row.category}</TableCell>
  <TableCell align="right">{row.date ? row.date  : "NA"}</TableCell>

  {/* {addEditRemove.edit ? <TableCell align="right"> <Typography sx={{color:"lightgrey" , cursor:"pointer" , '&:hover': {color: 'black'}}}>edit</Typography> </TableCell> : ""}
  {addEditRemove.remove ? <TableCell align="right"> <Typography sx={{color:"lightgrey" , cursor:"pointer" , '&:hover': {color: '#821717'}}}>delete</Typography> </TableCell> : ""} */}

</TableRow>
}