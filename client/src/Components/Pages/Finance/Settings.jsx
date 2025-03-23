import { Box, Button, Stack, Typography } from '@mui/material'
import { FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import DropDown2 from "./DropDown2"

import React from 'react'
import { BsCreditCard2Front } from 'react-icons/bs';
import { IoBulbOutline } from 'react-icons/io5';
import axios from 'axios';


const Settings = ({settingFields , setSettingFields , setSettings}) => {

    const handleSubmit = async (action) => {
        if(action === "update")
        {
            setSettings(() => 0);
            try {
                alert("Settings updated! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/finance/settingsUpdate', {
                    id : settingFields._id ,
                    month : settingFields.month,
                    savingGoals : settingFields.savingGoals,
                    expenseLimit : settingFields.expenseLimit,
                    billExpectation : settingFields.billExpectation,
                });
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }
    }
    function handleOnChange(field , value){
        setSettingFields((prev) => ({...prev , [field] : value}))
        
    }
    function handleClear(){
        setSettingFields({
            id : "",
            month : "",
            savingGoals : "",
            expenseLimit : "",
            billExpectation : ""
        })
    }

  return (
    <Box sx={{position:"absolute" , top:"200px" , bgcolor:"white" , height:"400px" , width:"400px" , border:"1px solid" , left:"600px" ,  borderRadius:"10px"}}>
        <Typography textAlign="center" width="100%"  sx={{bgcolor: "#2f4884",borderTopRightRadius : "10px" ,borderTopLeftRadius:"10px", height:"50px" , color:"white" , alignContent:"center"}}>Settings</Typography>

        <Box sx={{ml:"25px" , mt:"25px"}}>
            <Stack direction="row" sx={{alignItems:"center" , p:"20px"}}>
                <FaRegCalendarAlt style={{fontSize:"20px"}}/> &nbsp; : 
                <input value={settingFields.month} onChange ={(e) => handleOnChange("month" ,  e.target.value)} placeholder='Month' style={{marginLeft:"10px" , padding:"4px" , width:"71%"}}/>
            </Stack>
            
            <Stack direction="row" sx={{alignItems:"center" , p:"20px" , pt:"5px" }}>
                <FaRegMoneyBillAlt style={{fontSize: "22px",  color: "#3730A3", ml:"10px"}} />
                <Typography sx={{color:"#3730A3" , ml:"5px"}}>Saving goals : </Typography>
                <input value={settingFields.savingGoals} onChange ={(e) => handleOnChange("savingGoals" ,  e.target.value)} type='number' placeholder='xxx' style={{marginLeft:"10px" , padding:"4px" , width:"42%"}}/>
            </Stack>

            <Stack direction="row" sx={{alignItems:"center" , p:"20px" , pt:"5px"}}>
                <BsCreditCard2Front style={{fontSize: "22px",  color: "#991b1b"}}/><Typography sx={{color:"#991b1b" , ml:"5px"}}>Expense limit : </Typography>
                <input value={settingFields.expenseLimit} onChange = {(e) => handleOnChange("expenseLimit" ,  e.target.value)} type='number' placeholder='xxx' style={{marginLeft:"10px" , padding:"4px" , width:"41%"}}/>
            </Stack>
            
            <Stack direction="row" sx={{alignItems:"center" , p:"20px" , pt:"5px"}}>
                <IoBulbOutline style={{fontSize: "25px",  color: "#115E59" , marginLeft:"-3px"}} /><Typography sx={{color:"#115E59" , ml:"5px"}}>Bill Expectation : </Typography>
                <input value={settingFields.billExpectation} onChange = {(e) => handleOnChange("billExpectation" ,  e.target.value)} type='number' placeholder='xxx' style={{marginLeft:"10px" , padding:"4px" , width:"37%"}}/>
            </Stack>

            <Stack direction="row" sx={{pl:"20px" , mt:"20px"}}>
                <Button onClick={handleClear} variant='contained' sx={{textTransform:"none" , color:"white" , bgcolor:"#2f4884" , height:"30px"}}>Clear</Button>
                <Button onClick={() => handleSubmit("update")} variant='contained' sx={{textTransform:"none" , color:"white" , bgcolor:"#2f4884" , ml:"10px", height:"30px"}}>Done</Button>
                <Button onClick={() => setSettings(false)} variant='contained' sx={{textTransform:"none" , color:"white" , bgcolor:"#2f4884" , ml:"80px", height:"30px"}}>Close</Button>
            </Stack>
        </Box>
        
    </Box>
  )
}

export default Settings