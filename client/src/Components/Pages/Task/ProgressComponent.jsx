import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

// temp.toFixed(0)
// low :: #df4848
// mid :: #5675c2
// high :: #198c84
export default function GaugeValueRangeNoSnap({temp}) {
  // const color = temp.toFixed(0) < 30  ? "#df4848" : (temp.toFixed(0) > 30 && temp.toFixed(0) < 70) ? "#5675c2" : "#198c84" ; 
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={temp.toFixed(0)}  sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 25,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: `${temp.toFixed(0) <= 30  ? "#df4848" : (temp.toFixed(0) > 30 && temp.toFixed(0) < 70) ? "#5675c2" : "#198c84"}`,
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: "#f1f5f9",
    },
  })}/>
      {/* <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} /> */}
    </Stack>
  );
}
