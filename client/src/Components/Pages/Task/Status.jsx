import { Box, Stack, Typography } from '@mui/material'
import ProgressComponent from "./ProgressComponent"

const Status = ({statusData}) => {

    const temp = statusData.complete * 100 / (statusData.notComplete + statusData.complete);

    function timeUntilMidnight() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Set to midnight (00:00 of the next day)
      
      const diffMs = midnight - now; // Difference in milliseconds
      const diffMins = Math.floor(diffMs / (1000 * 60)); // Convert to minutes
      
      const hrs = Math.floor(diffMins / 60); // Extract hours
      const mins = diffMins % 60; // Extract remaining minutes

      return `${hrs} hr${hrs !== 1 ? "s" : ""} ${mins} min${mins !== 1 ? "s" : ""}`;
  }
    const DayEndsIn = timeUntilMidnight();


  return (
    <Box p={2} pt={0}>
        <Stack p={1} direction="row" sx={{bgcolor:"white" , borderRadius:"5px"}}>
            <ProgressComponent temp={temp}/>
            <Box p={2}>
                <Typography fontSize={13}>We can do better than this!</Typography>
                <Typography fontSize={13} mt={0.5}> <span style={{color:"red"}}>{temp.toFixed(1)} %</span> of the total task is complete.</Typography>
                <Typography color='green' fontSize={13} mt={0.5}>Total hrs spent : {statusData.totalHrs}</Typography>
            </Box>
        </Stack>
        <Stack bgcolor="white" direction="row" p={2} pb={0} pt={0.5}>
              <Typography fontSize={13}>Pending Tasks  : {statusData.notComplete}</Typography>
              <Typography fontSize={13} ml={4}>Tasks completed  : {statusData.complete}</Typography>
        </Stack>

        <Box bgcolor="white" p={2}>
          <Typography color='#3d547a'>Your day ends in {DayEndsIn} and Time required to finish all remaining tasks is {statusData.reqHrs}</Typography>
        </Box>
    </Box>
  )
}

export default Status