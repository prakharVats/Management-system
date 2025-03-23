import { Box, Button, Stack, Typography } from "@mui/material"

const AddProducts = ({setSearchbar , addEditRemove , SetAddEditRemove ,setFormValues}) => {
  function handleOnClick(){
    SetAddEditRemove((prev) => ({ ...prev, add: !addEditRemove.add, edit: false, remove: false , editC:false}));

    setFormValues((prev) => ({...prev , name : "",
      price : "",
      category : "Categories",
      date : "",
      id : ""}));
  }
  
  function handleEdit(){
    SetAddEditRemove((prev) => ({...prev , edit : !addEditRemove.edit , add : false , remove : false , editC:false}));
  }

  function handleRemove(){
    SetAddEditRemove((prev) => ({...prev , remove : !addEditRemove.remove , add : false , edit : false , editC:false}));
  }

  function handleOnChange(e){
    setSearchbar(() => e);
  }

  return (
    <>
        <Stack p={2} direction="row" bgcolor="white" sx={{borderRadius:"5px"}}>
            <input onChange={(e) => handleOnChange(e.target.value)} placeholder="search..." type="text" style={{height:"10px" , padding : "10px" , width : "250px"}}/>

            <Button onClick={() => handleOnClick()} variant="contained" sx={{ml:"200px" , textTransform: "none" , borderRadius: "5px", color: "#0c413d", height: "34px" , backgroundColor:"#71f4d8" , boxShadow:"none"}}><Typography >Add</Typography></Button>

            <Button onClick={() => handleEdit()} variant="contained" sx={{ml:"10px" , textTransform: "none" , borderRadius: "5px", color: "#312b90", height: "34px" , backgroundColor:"#aabdff"}}><Typography>Edit</Typography></Button>

            <Button onClick={() => handleRemove()} variant="contained" sx={{ml:"10px" , textTransform: "none" , borderRadius: "5px", color: "#821717", height: "34px" , backgroundColor:"#fcadad"}}><Typography >Remove</Typography></Button>
        </Stack>
    </>
  )
}

export default AddProducts