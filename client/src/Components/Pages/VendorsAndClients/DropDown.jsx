import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function BasicSelect({CurrData , setCurrData}) {

  const handleChange = (event) => {
    setCurrData((prev)=>({...prev , amountCategory : event.target.value}));
  };

  return (
    <Box sx={{ minWidth: 210 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" style={{color:"#3d547a" , fontSize:"15px" , marginTop:"-5px"}}>Category</InputLabel>
        <Select
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
          value={CurrData.amountCategory}
          onChange={handleChange}
          sx={{height:"40px" }}
        >
          <MenuItem value="Client">Client</MenuItem>
          <MenuItem value="Vendor">Vendor</MenuItem>
          <MenuItem value="Ordinary">Ordinary</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
