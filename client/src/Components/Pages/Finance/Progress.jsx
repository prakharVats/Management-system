import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';





export default function CustomizedProgressBars({BG , color , val}) {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    width:120,
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: BG,
     
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 4,
      backgroundColor: color,
    },
  }));

  return (
    <Stack mt={0.5} spacing={2} sx={{ flexGrow: 1}}>
      <BorderLinearProgress variant="determinate" value={val} />
    </Stack>
  );
}
