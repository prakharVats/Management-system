import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'


const style = {
        
        cursor:"pointer",
        "&:hover" : {
            textDecoration : "underline"
        }
    }



const Complete = ({data = ["" , ""]}) => {
    const [selected , setSelected] = useState("High");
    function handleOnClick(e){
        setSelected(e);
    }

// #dbe6f0
  return (
  <Box p = {2}>
    {data ? <>
    <Stack direction="row" bgcolor="white"  p={2} sx={{ borderRadius:"5px"}}>
            <Typography onClick={() => handleOnClick("High")} p={1} sx={{...style , bgcolor:`${selected === "High" ? "#dbe6f0" : "#f8fafc"}` , "&:hover" : {textDecoration:`${selected === "High" ? "none" : "underline"}`}}}>
                High
            </Typography>
            <Typography onClick={() => handleOnClick("Medium")} p={1} sx={{...style ,  borderLeft:"none" , bgcolor:`${selected === "Medium" ? "#dbe6f0" : "#f8fafc"}`, "&:hover" : {textDecoration:`${selected === "Medium" ? "none" : "underline"}`}}}>
                Medium
            </Typography>
            <Typography onClick={() => handleOnClick("Low")} p={1} sx={{...style ,  borderLeft:"none" , bgcolor:`${selected === "Low" ? "#dbe6f0" : "#f8fafc"}` , "&:hover" : {textDecoration:`${selected === "Low" ? "none" : "underline"}`}}}>
                Low
            </Typography>
            <Typography onClick={() => handleOnClick("complete")} p={1} sx={{...style ,  borderLeft:"none" , bgcolor:`${selected === "complete" ? "#dbe6f0" : "#f8fafc"}` , "&:hover" : {textDecoration:`${selected === "complete" ? "none" : "underline"}`}}}>
                Completed
            </Typography>
        </Stack>

        <Box bgcolor="white" height={170} p={2} sx={{overflow:"auto" , scrollbarWidth:"none"}}>
            {data.filter(e => e.priority === `${selected}`).map(e => <Stack direction="row"  sx={{color:"black" , bgcolor:"#f1f5f9" , mt:"1px" , borderRadius:"5px" , cursor:"pointer" , "&:hover" : {
                backgroundColor:"#dbe6f0"}}}>
                <Typography p={1}>{e.name}</Typography>
                <Typography ml={2} p={1}>{e.startTime[0] > 12 ? `${e.startTime[0] - 12} pm` : `${e.startTime[0]} am`}</Typography>
            </Stack>)}

            {selected === "complete" ?data.filter(e => e.status === `complete`).map(e => <Stack direction="row"  sx={{color:"black" , bgcolor:"#f1f5f9" , mt:"1px" , borderRadius:"5px" , cursor:"pointer" , "&:hover" : {
                backgroundColor:"#dbe6f0"}}}>
                <Typography p={1}>{e.name}</Typography>
                <Typography ml={2} p={1}>{e.startTime[0] > 12 ? `${e.startTime[0] - 12} pm` : `${e.startTime[0]} am`}</Typography>
            </Stack>) : ""}
        </Box>
    </> : "loading..."}
        
    </Box>
  )
}

export default Complete