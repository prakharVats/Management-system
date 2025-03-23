import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";
import { PiDotsThreeOutlineBold } from "react-icons/pi";


export default function BasicMenu({arr , text}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ borderRadius:"0px" , paddingBottom:"10px" , marginLeft:"-17px"}}
      >
        <BsThreeDots style={{fontSize:"22px" , color:"black" , height:"28px"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {arr.map(e => <MenuItem onClick={handleClose}>{e}</MenuItem>)}
      </Menu>
    </div>
  );
}
