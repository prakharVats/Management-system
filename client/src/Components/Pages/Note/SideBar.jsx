import { Box, Stack, Typography } from '@mui/material';
import { SlNote } from "react-icons/sl";
import { IoArchiveOutline } from "react-icons/io5";
import { BsTag } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";

const SideBar = ({barData , setBarData}) => {
    function handleClick(text){
        setBarData(() => text)
    }
  return (
    <Box p={2} mt={2}>
        <Stack onClick={() => handleClick("Notes")} direction="row" p={1} pl={2} sx={{"&:hover":{backgroundColor:"rgb(226 232 240)" , cursor:"pointer"} , bgcolor:`${barData === "Notes" ? "rgb(226 232 240)" : ""}` , borderRadius:"20px"}}>
            <SlNote style={{fontSize:"23px" , color:"#94A3B8"}}/>
            <Typography ml={1.5} mt={0.1} fontSize={15} color='#1E293B'>
                Notes
            </Typography>
        </Stack>
        {/* <Stack onClick={() => handleClick("Archive")} direction="row" p={1} pl={2} mt={1} sx={{"&:hover":{backgroundColor:"rgb(226 232 240)" , cursor:"pointer"} , borderRadius:"20px" , bgcolor:`${barData === "Archive" ? "rgb(226 232 240)" : ""}`}}>
            <IoArchiveOutline style={{fontSize:"23px" , color:"#94A3B8"}}/>
            <Typography ml={1.5} mt={0.1} fontSize={15} color='#1E293B'>
                Archive
            </Typography>
        </Stack> */}
        <Row handleClick={handleClick} barData={barData} text = "Family"/>
        <Row handleClick={handleClick} barData={barData} text = "Work"/>
        <Row handleClick={handleClick} barData={barData} text = "Tasks"/>
        <Row handleClick={handleClick} barData={barData} text = "Priority"/>
        <Row handleClick={handleClick} barData={barData} text = "Personal"/>
        <Row handleClick={handleClick} barData={barData} text = "Friends"/>

        {/* <Stack direction="row" p={1} pl={2} mt={1} sx={{"&:hover":{backgroundColor:"rgb(226 232 240)" , cursor:"pointer" , borderRadius:"20px"}}}>
            <MdOutlineModeEditOutline style={{fontSize:"23px" , color:"#94A3B8" }}/>
            <Typography ml={1.5} mt={0.1} fontSize={15} color='#1E293B'>
            Edit labels
            </Typography>
        </Stack> */}
    </Box>
  )
}


const Row = ({barData , text , handleClick}) =>{
    return <Stack onClick={() => handleClick(text)} p={1} pl={2} mt={1} direction="row" sx={{"&:hover":{backgroundColor:"rgb(226 232 240)" , cursor:"pointer"} , borderRadius:"20px" , bgcolor:`${barData === text ?"rgb(226 232 240)" : "" }`}}>
    <BsTag style={{fontSize:"23px" , color:"#94A3B8"}}/>
    <Typography ml={1.5} mt={0.1} fontSize={15} color='#1E293B'>
        {text}
    </Typography>
</Stack>
}
export default SideBar