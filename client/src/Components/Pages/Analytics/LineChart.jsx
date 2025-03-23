import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FaCheck } from "react-icons/fa6";


const data = [
  { name: "Apr 1", visitors: 1200 },
  { name: "Apr 5", visitors: 1300 },
  { name: "Apr 9", visitors: 1100 },
  { name: "Apr 13", visitors: 1400 },
  { name: "Apr 17", visitors: 1000 },
  { name: "Apr 21", visitors: 1250 },
  { name: "Apr 25", visitors: 1350 },
  { name: "Apr 29", visitors: 1100 },
  { name: "May 3", visitors: 900 },
  { name: "May 7", visitors: 1050 },
  { name: "May 11", visitors: 1200 },
  { name: "May 15", visitors: 850 },
  { name: "May 19", visitors: 950 },
  { name: "May 23", visitors: 970 },
  { name: "May 27", visitors: 990 },
  { name: "May 31", visitors: 1150 },
  { name: "Jun 4", visitors: 1000 },
  { name: "Jun 8", visitors: 1050 },
  { name: "Jun 12", visitors: 1100 },
  { name: "Jun 16", visitors: 980 },
  { name: "Jun 20", visitors: 1250 },
  { name: "Jun 24", visitors: 1320 },
  { name: "Jun 28", visitors: 1400 },
  { name: "Jul 2", visitors: 800 },
  { name: "Jul 6", visitors: 950 },
  { name: "Jul 10", visitors: 1100 },
  { name: "Jul 14", visitors: 1000 },
  { name: "Jul 18", visitors: 1200 },
  { name: "Jul 22", visitors: 1300 },
  { name: "Jul 26", visitors: 1450 },
  { name: "Jul 30", visitors: 1600 },
  { name: "Aug 3", visitors: 1700 },
  { name: "Aug 7", visitors: 1750 },
  { name: "Aug 11", visitors: 1800 },
  { name: "Aug 15", visitors: 1900 },
  { name: "Aug 19", visitors: 2000 },
  { name: "Aug 23", visitors: 2150 },
  { name: "Aug 27", visitors: 2300 },
  { name: "Aug 31", visitors: 2400 },
  { name: "Sep 4", visitors: 2500 },
  { name: "Sep 8", visitors: 2600 },
  { name: "Sep 12", visitors: 2700 },
  { name: "Sep 16", visitors: 2850 },
  { name: "Sep 20", visitors: 2900 },
  { name: "Sep 24", visitors: 2950 },
  { name: "Sep 28", visitors: 3000 },
  { name: "Oct 2", visitors: 3100 },
  { name: "Oct 6", visitors: 3200 },
  { name: "Oct 10", visitors: 3300 },
  { name: "Oct 14", visitors: 3450 },
  { name: "Oct 18", visitors: 3500 },
  { name: "Oct 22", visitors: 3600 },
  { name: "Oct 26", visitors: 3700 },
  { name: "Oct 30", visitors: 3800 },
  { name: "Nov 3", visitors: 3700 },
  { name: "Nov 7", visitors: 3650 },
  { name: "Nov 11", visitors: 3550 },
  { name: "Nov 15", visitors: 3400 },
  { name: "Nov 19", visitors: 2300 },
  { name: "Nov 23", visitors: 2200 },
  { name: "Nov 27", visitors: 2500 },
  { name: "Dec 1", visitors: 2600 },
  { name: "Dec 5", visitors: 2700 },
  { name: "Dec 9", visitors: 2500 },
  { name: "Dec 13", visitors: 2300 },
  { name: "Dec 17", visitors: 2100 },
  { name: "Dec 21", visitors: 2000 },
  { name: "Dec 25", visitors: 1900 },
  { name: "Dec 29", visitors: 1800 }
];

export default function VisitorsOverview() {

  const [yearMonth , setYearMonth] = useState(0);

  return (
    <Box>
      <Stack direction="row">
        <Box p={5}>
          <Typography color="white">Consistency</Typography>
          <Typography color='#4d6999' fontSize={13}>Number of hours per day</Typography>
        </Box>

        <Stack direction="row" p={5} ml="auto" spacing={2}>
          {!yearMonth ? <Button sx={{textTransform:"none" , height:"35px" , color:"white" , borderRadius:"15px" , backgroundColor:"#383f5d" , pr:"15px"}}><FaCheck style={{marginRight:"10px" , fontSize:"16px" }}/> Year</Button> :  <Button onClick={() => setYearMonth(0)} sx={{textTransform:"none" , height:"35px" , color:"white" , borderRadius:"15px"}}>Year</Button>}


          {yearMonth ? <Button sx={{textTransform:"none" , height:"35px" , color:"white" , borderRadius:"15px" , backgroundColor:"#383f5d" , pr:"15px"}}><FaCheck style={{marginRight:"10px" , fontSize:"16px" }}/> Month</Button> :  <Button onClick={() => setYearMonth(1)} sx={{textTransform:"none" , height:"35px" , color:"white" , borderRadius:"15px"}}>Month</Button>}
        </Stack>
      </Stack>
      

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#A0AEC0" tick={{ fontSize: 12 }} minTickGap={30} />
          <YAxis stroke="#A0AEC0" />
          <Tooltip contentStyle={{ backgroundColor: "#1A202C", color: "#E2E8F0" }} />
          <CartesianGrid strokeDasharray="3 3" stroke="#43526c" />
          <Area type="linear" dataKey="visitors" stroke="#8884d8" fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
