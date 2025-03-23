import { Box, Button, Stack, Typography } from '@mui/material'
import DropDown from "./DropDown"
import BasicDatePicker from './DatePicker'
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"
import { useState } from 'react';

const AddProduct = ({SetAddEditRemove , formValues , setFormValues , btn}) => {
    const [open, setOpen] = useState(false);
 
    function handleOnClick(){
        SetAddEditRemove((prev) => ({...prev , add : false , edit : false , remove : false , editC:false}));
    }

    function handleOnChange(a , value){
        setFormValues((prev) => ({...prev , [a] : value}))
    }

    // axios post req ::: adding the item
    const handleSubmit = async (action) => {
        if(action === "Add")
        {
            SetAddEditRemove((prev) => ({...prev , add : false}));
            try {
                alert("Item Added! Reload page");
                const response = await axios.post('http://localhost:3000/finance/postfinancelist', {
                    name : `${formValues.name}`,
                    price : `${formValues.price}`,
                    category : `${formValues.category}`,
                    date : `${formValues.date}`
                })
               
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }else if(action === "Update"){
            SetAddEditRemove((prev) => ({...prev , editC : false}));
            try {
                alert("Item updated! Reload page");
                const response = await axios.post('http://localhost:3000/finance/postupdate', {
                    id : `${formValues.id}`,
                    name : `${formValues.name}`,
                    price : `${formValues.price}`,
                    category : `${formValues.category}`,
                    date : `${formValues.date}`
                    
                });
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }
    }

    function handleClear(){
        setFormValues(() => ({
            name : "",
            price : "",
            category : "Categories",
            date : ""
        }))
    }
 

    return (
        <Box pt={1} pb={1} mt={2} sx={{ bgcolor: "white" }}>
            <CloseIcon onClick={() => handleOnClick()} sx={{cursor:"pointer" , fontWeight:"bold" , marginLeft:"710px"}}/>
            <Stack direction="row" spacing={20}>
                <Box>
                    <Box sx={{ p: "10px", borderRadius: "5px" }}>
                        <Typography color='#3d547a' fontSize={10}>Name of the item</Typography>
                        <input value={formValues.name} onChange={(e) => handleOnChange("name" , e.target.value)} placeholder='Item' type="text" style={{ height: "20px", padding: "5px", width: "250px" }}/>
                    </Box>
                    <Box sx={{ p: "10px", borderRadius: "5px" }}>
                        <Typography color='#3d547a' fontSize={10}>Total Price</Typography>
                        <input value={formValues.price} onChange={(e) => handleOnChange("price" , e.target.value)} placeholder='Amount' type="text" style={{ height: "20px", padding: "5px", width: "250px" }} />
                    </Box>
                    <Stack direction="row" mt="10px">
                <Button onClick={() => handleSubmit(`${btn}`)} sx={{ color: "black" }}>{btn}</Button>
                <Button onClick={handleClear} sx={{ color: "black" }}>Clear</Button>
            </Stack>
                </Box>
                <Box>
                    <Box sx={{ p: "10px", borderRadius: "5px", width: "100%" }}>
                        <Typography color='#3d547a' fontSize={10}>Choose category</Typography>
                        <DropDown formValues = {formValues} setFormValues = {setFormValues} handleOnChange = {handleOnChange} open={open} setOpen={setOpen} />
                    </Box>
                    <Box p="10px">
                        {!open ? <BasicDatePicker formValues = {formValues} handleOnChange = {handleOnChange}/> : ""}
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddProduct