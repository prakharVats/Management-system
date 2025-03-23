import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({formValues , handleOnChange}) {

 
  const handleDateChange = (newValue) => {
    if (newValue) {
      const formattedDate = dayjs(newValue).format('DD/MM/YYYY');
      handleOnChange("date" , formattedDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          onChange={handleDateChange}
          sx={{
            width: '200px', // Width of the DatePicker
            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
              backgroundColor: 'white',
              height: '50px', // Height of the DatePicker
              fontSize: '12px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3d547a',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3d547a',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3d547a',
            },
            '& .MuiInputLabel-root': {
              fontSize: '15px', // Custom label font size
              color: '#3d547a', // Custom label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#1e3a5f', // Focused label color
            },
          }}
          label={`${formValues.date === ""? "Select date" : formValues.date }`}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
