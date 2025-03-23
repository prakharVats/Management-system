import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoAddOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Typography } from '@mui/material';
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";





export default function BasicMenu({icon , text , ML , arr , setControls}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(() => null);
    setControls(() => e)
  };
 
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{textTransform: "none" , color:"black" , mt:"4px" , ml : ML , borderRight:"1px solid lightgray" , borderRadius:"0px"}}
      >
        {icon === 1 ? <IoAddOutline style={{fontSize:"17px" , border:"1px solid black" , borderRadius:"15px" , color:"#4572a1"}}/> : ""}

        {icon === 2 ? <><FaArrowUpLong  style={{fontSize:"17px" , borderRadius:"15px"}}/><FaArrowDownLong style={{fontSize:"17px" , borderRadius:"15px" , marginTop:"2px" , color:"#4572a1" , position:"relative" , right:"7px"}}/></>: ""}

        {icon === 3 ?  <MdOutlineMenu style={{fontSize:"19px" , borderRadius:"15px"}}/>: ""}


        <Typography ml={icon === 1 || 3 ? 0.8 : 0}>{text}</Typography> 
        <IoMdArrowDropdown style={{ fontSize:"18px" , marginLeft:"6px"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {arr.map(e => <MenuItem onClick={() => handleClose(e)}>{e}</MenuItem>)}
      </Menu>
    </div>
  );
}
