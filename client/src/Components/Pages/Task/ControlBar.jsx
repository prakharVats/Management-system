import { Box, Button, Stack, Typography } from "@mui/material"

const AddProducts = ({show , setShow , setAction}) => {
  

  function showAddTask(e){
    setShow((prev) => ({ add: 0, edit: 0, remove: 0 , list : 0, task : 0 , [e] : !show[e]}));
      if(e === "add"){
        setAction(() => "Add");
      }
  }

  function handleTaskList(e){
    setShow((prev) => ({ add: 0, edit: 0, remove: 0 , list : 0, task : 0 , [e] : 1}));
  }
  
  return (
    <>
        <Stack p={2} direction="row" bgcolor="white" sx={{borderRadius:"5px"}}>
            {/* <input placeholder="search..." type="text" style={{height:"10px" , padding:"10px" , width:"250px"}}/> */}
            <Stack direction="row">
              <Typography onClick = {() => handleTaskList("task")} sx={{textDecoration:`${show.task || show.add || show.edit || show.remove || !show.list ? "underline" : "none"}` , cursor:"pointer"}}>Actions</Typography>
              <Typography onClick = {() => handleTaskList("list")} sx={{textDecoration:`${show.list ? "underline" : "none"}` , ml : "10px"  , cursor:"pointer"}}>Tasks</Typography>
            </Stack>

            <Button onClick={() => showAddTask("add")} variant="text" sx={{ml:"auto" , textTransform: "none" , borderRadius: "5px", color: "black", height: "34px" , boxShadow:"none"}}><Typography>Add</Typography></Button>

            <Button onClick={() => showAddTask("edit")} variant="text" sx={{ml:"10px" , textTransform: "none" , borderRadius: "5px", color: "black", height: "34px"}}><Typography>Edit</Typography></Button>

            <Button onClick={() => showAddTask("remove")} variant="text" sx={{ml:"10px" , textTransform: "none" , borderRadius: "5px", color: "black", height: "34px"}}><Typography >Remove</Typography></Button>
        </Stack>
    </>
  )
}

export default AddProducts