import { Box, Button, Stack, Typography } from '@mui/material'
import DropDown2 from "./DropDown2"
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"
import { useState } from 'react';

const AddProduct = ({setShow , setForm , form , action}) => {
    const [open , setOpen] = useState(1);


    // function ShowAddTasks(){
    //     setAdd(1);
    // }
    // function handleOnClick(){
    //     SetAddEditRemove((prev) => ({...prev , add : false , edit : false , remove : false , editC:false}));
    // }


    function handleOnChange(a , value){
        setForm((prev) => ({...prev , [a] : value}))
    }

    const handleOnChange2 = (field, value) => {
        const wordLimit = 6; 
        const words = value.trim().split(/\s+/); // Split input by spaces
        if (words.length <= wordLimit) {
            setForm((prev) => ({ ...prev, [field]: value }));
        }
      };

    function handleOnClose(a , value){
        setShow(()=> ({add: 0, edit: 0, remove: 0 , list : 0, task : 0}));
        setForm((prev) => ({ name : "" , start : "" , complete : "" , priority : "Priority"}))
    }


    // axios post req ::: adding the item
    const handleSubmit = async (action) => {
        if(action === "Add")
        {
            setShow((prev) => ({...prev , add : 0}));
            try {
                alert("Item Added! Reload page");
                const response = await axios.post('http://localhost:3000/task/postTask', {
                    name : `${form.name}`,
                    startTime : `${form.startTime}`,
                    endTime : `${form.endTime}`,
                    priority : `${form.priority}`,
                    time : `${form.time}`,
                    status : "Pending"
                });
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }else if(action === "Update"){
            setShow(() => ({task : 1,
                list : 0,
                add : 0,
                edit : 0,
                remove : 0}));
            try {
                alert("Item updated! Reload page");
                const response = await axios.post('http://localhost:3000/task/postUpdateTask', {
                    id : `${form._id}`,
                    name : `${form.name}`,
                    startTime : `${form.startTime}`,
                    endTime : `${form.endTime}`,
                    priority : `${form.priority}`,
                    status : `pending`,
                    time : `${2} hrs`
                });
                
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }
    }

    function handleClear(){
        setForm(() => ({
            "name" : "",
            "startTime" : "",
            "endTime" : "",
            "status" : "",
            "priority" : "Priority",
            "time" : ""
        }))
    }


    return (
        <Box pt={1} pb={1} mt={2} sx={{ bgcolor: "white" }}>
            <CloseIcon onClick={handleOnClose} sx={{cursor:"pointer" , fontWeight:"bold" , marginLeft:"710px"}}/>
            <Stack direction="row" spacing={20}>
                <Box>
                    <Box sx={{ p: "10px", borderRadius: "5px" }}>
                        <Typography color='#3d547a' fontSize={10}>Task name</Typography>
                        <input value={form.name} onChange={(e) => handleOnChange2("name" , e.target.value)} placeholder='Item' type="text" style={{ height: "20px", padding: "5px", width: "250px" }}/>
                    </Box>
                    <Box sx={{ p: "10px", borderRadius: "5px" }}>
                        <Typography color='#3d547a' fontSize={10}>Starting Time</Typography>
                        <input value={form.startTime} onChange={(e) => handleOnChange("startTime" , e.target.value)} placeholder='24 hrs' type="text" style={{ height: "20px", padding: "5px", width: "250px"}} />
                    </Box>
                    <Stack direction="row" mt="10px">
                        <Button onClick={() => handleSubmit(action)}  sx={{color: "black" , textTransform:"none"}}>{action}</Button>
                        <Button onClick={handleClear} sx={{color: "black"  , textTransform:"none"}}>Clear</Button>
                    </Stack>
                </Box> 
                <Box>
                    <Box sx={{ p: "10px", borderRadius: "5px", width: "100%" }}>
                        <DropDown2 open = {open}  setOpen = {setOpen} form={form} setForm={setForm} Text="Priority" arr={["new"]}/>
                    </Box>
                    <Box p="10px">
                        {open ? <><Typography color='#3d547a' fontSize={10}>Complete Time</Typography>
                        <input value={form.endTime} onChange={(e) => handleOnChange("endTime" , e.target.value)} placeholder='24 hrs' type="text" style={{ height: "20px", padding: "5px", width: "250px" }}/></> : ""}
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddProduct