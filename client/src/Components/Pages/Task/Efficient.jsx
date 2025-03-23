import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Efficient = () => {
  return (
    <Box p={2} pt={0}>
        <Box p={2} bgcolor="white" sx={{borderRadius:"5px"}}>
            <Typography fontSize={14} fontWeight="bold">Work Efficiency</Typography>
            <Typography fontSize={12} mt={1}>You are 34% more Efficient! You took 2.3 hrs less then the allocated time!</Typography>
            <Typography fontSize={12} mt={1}>Time req : 6.5 hrs &nbsp; Time taken : 4.1 hrs</Typography>
            <Stack direction="row" >
            
            </Stack>
        </Box>
    </Box>
  )
}

export default Efficient