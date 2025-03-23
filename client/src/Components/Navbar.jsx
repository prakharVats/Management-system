
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';

// icons
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMouseEnter = () => {
    setToggle(true);
  }
  const handleMouseLeave = () => {
    setToggle(false);
  }

  return (
   <Stack direction="row" spacing="auto" borderBottom="0.5px solid lightgrey" sx={{position:"sticky" , top:"0px" , bgcolor:"white" , zIndex:"2"}}>
    <Box p={2}>
      <MenuOutlinedIcon color="black" sx={{cursor:"pointer"}}/>
    </Box>
    <Stack direction="row" p={2} spacing={2}>
      <FullscreenIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} color="black" sx={{cursor:"pointer"}}/>
      <SearchOutlinedIcon color="black" sx={{cursor:"pointer"}}/>
      <WidgetsOutlinedIcon color="black" sx={{cursor:"pointer"}}/>
      <SettingsOutlinedIcon color="black" sx={{cursor:"pointer"}}/>
      {/* <Typography color='#ffffff' bgcolor="#1e293b" fontSize={10} p={1} borderRadius={1} position="absolute" right="30px">Toggle Fullscreen</Typography> */}
    </Stack>
   </Stack>
  )
}

export default Navbar