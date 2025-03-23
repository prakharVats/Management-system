import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMdArrowDropdown } from "react-icons/io";
import { Typography } from '@mui/material';



export default function BasicMenu({arr , Text}) {
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
        color="black"
        sx={{ borderRadius:"0px"}}
      >
        <Typography sx={{textTransform:"none"}}>{Text}</Typography>
        
        <IoMdArrowDropdown style={{ fontSize:"18px" , marginLeft:"6px"}}/>
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
