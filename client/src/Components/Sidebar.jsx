import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Stack, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { HiOutlineBell } from "react-icons/hi2";
import Avatar from '@mui/material/Avatar';
import logo from "../assets/logo.svg"
import profile2 from "../assets/pfp.jpg"

import { GrTasks } from "react-icons/gr";
import { GrPieChart } from "react-icons/gr";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";



const Sidebar = () => {
    const [click , setClick] = useState("Task");

    function handleOnClick(e){
        setClick(e);
    }
  return (
    <Box sx={{height:"96.5vh", position:"sticky" , top:"0px" , bgcolor:"#0f172a" , pt:"25px"}}>

        <Stack direction="row" spacing="auto" pl={3} pr={3} >
            <img src={logo} alt="error" style={{height:"30px"}}/>
            <Box sx={{ display: 'flex', gap: 2}}>
                <HiOutlineBell cursor="pointer" style={{fontSize:"26px" , color:"#94a3b8" , borderRadius:"12px"}}/>
                <AccountCircleOutlinedIcon cursor="pointer" sx={{fontSize:"26px" , color:"#94a3b8"}}/>
            </Box>
        </Stack>
        <Box>
        <Avatar alt="Remy Sharp" src={profile2} sx={{ml:"auto" , mr:"auto" , height:"95px" , width:"95px" , mt:"30px"}}/>
        <Typography color="white" mt={2} ml={12.5} fontSize={14}>
        User C4 621
        </Typography>
        <Typography color="#94a3b8" ml={7} fontSize={14}>
        vatsprakhar91@gmail.com
        </Typography>
        </Box>

        {/* sidebar contents */}
        <Box p={2} pl={3}>
            {/* dashboard -- head */}
            <Head heading = "DASHBOARDS" sub = "Unique dashboard designs" Mt = {40}/>

            <Box mt={2}>

                {/* <Link to = "/" style={{textDecoration:"none"}}>
                    <Stack direction="row" mt={1} p={1}  sx={{"&:hover":{bgcolor:"#1c2a4d"}, cursor:"pointer"}}>
                        <GrPieChart style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                        <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>Analytics</Typography>
                    </Stack>
                </Link> */}


                <Link onClick={() => handleOnClick("Task")} to="/" style={{textDecoration:"none"}}>
                <Stack  direction="row" p={1}  sx={{"&:hover":{bgcolor:"#1c2a4d" , cursor:"pointer"} , bgcolor:`${click  === "Task"? "#1c2a4d" : ""}`}}>
                    <GrTasks style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                    <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>
                        Task
                    </Typography>
                </Stack>
                </Link>

                {/* <Link to = "/" style={{textDecoration:"none"}}>
                <Stack direction="row" mt={1} p={1}  sx={{"&:hover":{bgcolor:"#1c2a4d"}, cursor:"pointer"}}>
                    <GrPieChart style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                    <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>Analytics</Typography>
                </Stack>
                </Link> */}
                
                <Link onClick={() => handleOnClick("Finance")} to = "/finance" style={{textDecoration:"none"}}>
                <Stack direction="row" mt={1} p={1}  sx={{"&:hover":{bgcolor:"#1c2a4d"}, cursor:"pointer" , bgcolor:`${click  === "Finance"? "#1c2a4d" : ""}`}}>
                    <FaRegMoneyBillAlt style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                    <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>Finance</Typography>
                </Stack>
                </Link>
            </Box>

            {/* others */}
            <Head heading = "OTHERS" sub = "Managing media and files" Mt = {20}/>
            <Box mt={2}>
                <Link onClick={() => handleOnClick("Projects and Docs")} to = "/projects" style={{textDecoration:"none"}}>
                <Stack  direction="row" p={1}  sx={{"&:hover":{bgcolor:"#1c2a4d" , cursor:"pointer"} , bgcolor:`${click === "Projects and Docs" ? "#1c2a4d" : ""}`}}>
                    <FaRegFolder style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                    <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>Projects and Docs</Typography>
                </Stack>
                </Link>
                
                <Link onClick={() => handleOnClick("Clients and Vendors")} to = "/clients&vendors" style={{textDecoration:"none"}}>
                <Stack direction="row" mt={1} p={1} sx={{"&:hover":{bgcolor:"#1c2a4d"}, cursor:"pointer" , bgcolor:`${click === "Clients and Vendors" ? "#1c2a4d" : ""}`}}>
                    <RiContactsLine style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                    <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>Clients and Vendors</Typography>
                </Stack>
                </Link>
                
                <Link onClick={() => handleOnClick("Notes")} to = "/notes" style={{textDecoration:"none"}}>
                <Stack direction="row" mt={1} p={1} sx={{"&:hover":{bgcolor:"#1c2a4d"}, cursor:"pointer" , bgcolor:`${click === "Notes" ? "#1c2a4d" : ""}`}}>
                    <PiNotePencilBold style={{color:"#c0c4cf" , fontSize:"20px"}}/>
                    <Typography color='#c0c4cf' sx={{ml:"15px" , fontSize:"15px"}}>Notes</Typography>
                </Stack>
                </Link>
            </Box>

        </Box>
    </Box>
  )
}

const Head = ({heading , sub , Mt}) =>{
    return <Box sx={{mt:`${Mt}px`}}>
    <Typography color='#2DD4BF' fontSize={13}>
        {heading}
    </Typography>
    <Typography color='#858992' fontSize={11}>
        {sub}
    </Typography>
</Box>
}
export default Sidebar