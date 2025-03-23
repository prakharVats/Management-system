import { Box, Button, Stack, Typography } from '@mui/material'
import FinanceGraph from "./FinanceGraph"
import TaskGraph from "./TaskGraph"
import LineChart from "./LineChart"
import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { TfiExport } from 'react-icons/tfi'
import { BsExclamationCircle } from "react-icons/bs";
import DoubleLineChart from "./DoubleLineChart"

import Payment from "../../../../public/Payment.png"
import Paid from "../../../../public/Paid.png"
import Contacts from "../../../../public/Contacts.png"
const Analytics = () => {
  return (
    <Box sx={{bgcolor: "#f1f5f9"}}>

      {/* Heading */}
      <Stack direction="row">
            <Box p={5}>
              <Typography variant='h5' fontWeight={500}>
                Analytics dashboard
              </Typography>
              <Typography color='#3d547a'>
                Monitor metrics, check reports and review performance
              </Typography>
            </Box>

            <Stack direction="row" ml="auto" mr={5} mt={5} spacing={2}>
              <Button  variant="outlined" sx={{ textTransform: "none",border: "1px solid #3d547a", borderRadius: "15px", color: "black", height: "40px"}}><IoSettingsOutline fontSize={18} color='#353e4a' />&nbsp;<Typography>Settings</Typography></Button>
              {/* 2f4884 */}
              <Button  variant="contained" sx={{ textTransform: "none",borderRadius: "15px", color: "white", bgcolor: "#2f4884", height: "40px" }}><TfiExport fontSize={18} color='white' />&nbsp;&nbsp;<Typography>Export</Typography></Button>
            </Stack>
      </Stack>
      
      {/* consistency */}
      <Box sx={{bgcolor:"#1e293b" , width:"92.5%" , borderRadius:"10px" , ml:5}}>
        <LineChart/>
      </Box>

      {/* <Stack direction = "row" bgcolor = "black" sx={{bgcolor:"#1e293b" , width:"90%" , borderRadius:"10px" , ml:5 , mt:4 , p:2}}>
        <Box>
          <TaskGraph/>
        </Box>
        <Box sx={{height:"300px" , width:"500px"}}>
        <FinanceGraph/>
        </Box>
      </Stack> */}

        {/* <Box mt={5}>
          <Typography textAlign="center" width="100%" fontSize={20} fontWeight={600}>Clients & Payments</Typography>
        </Box> */}

        <Stack direction="row" mt={5} ml={5} spacing={10}  pl={6}>
          <Box sx={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)" , borderRadius:"10px" , width:"300px"}}>
            <img src={Payment} style={{height:"300px"}}/>
              <Typography fontWeight={600} sx={{width:"90%" , textAlign:"center"}}>Pending Payments : 24</Typography>
              <Typography fontWeight={600} sx={{width:"90%" , textAlign:"center" , mb:"20px"}}>Total Amount : 34,567$</Typography>
          </Box>


          <Box mb={10} sx={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)" , borderRadius:"10px", width:"300px"}}>
            <img src={Paid} style={{height:"250px" , width:"250px" , marginLeft:"25px" , marginTop:"20px"}}/>
              <Typography fontWeight={600} sx={{width:"100%" , textAlign:"center" , mt:"20px"}}>Payments Concluded : 24</Typography>
              <Typography fontWeight={600} sx={{width:"100%" , textAlign:"center"}}>Total Amount : 50,567$</Typography>
          </Box>
          

          <Box sx={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)" , borderRadius:"10px", width:"300px"}}>
            <img src={Contacts} style={{height:"300px"}}/>
              <Typography fontWeight={600} sx={{width:"100%" , textAlign:"center"}}>No. of contacts : 345</Typography>
              <Typography fontWeight={600} sx={{width:"100%" , textAlign:"center"}}>Engaged : 15</Typography>
          </Box>
        </Stack>

          <Box sx={{border:"1px solid" , backgroundColor: "#1e293b" , p:"10px" , width:"92.5%" , borderRadius:"10px" , ml:5 , mt:5}}>
            <DoubleLineChart/>
          </Box>
    </Box>
  )
}

export default Analytics