import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"];

export default function SimpleLineChart() {
  return (
    <LineChart
      height={300}
      width={600}
      series={[
        { data: pData, label: "pv", color: "#6B5B95" }, // Dark Purple
        { data: uData, label: "uv", color: "#2E86AB" }, // Deep Blue
      ]}
      xAxis={[
        {
          scaleType: "point",
          data: xLabels,
          tickLabelStyle: { fill: "#a0aec0", fontSize: 14 }, // Light gray labels
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: { fill: "#a0aec0", fontSize: 14 }, // Light gray labels
        },
      ]}
      legend={{
        position: { vertical: "top", horizontal: "center" },
      }}
      sx={{
        "& .MuiChartsAxis-root .MuiChartsAxis-line": { stroke: "#D3D3D3" }, // Change axis color
        "& .MuiChartsAxis-root .MuiChartsAxis-tick": { stroke: "#D3D3D3" }, // Change tick color
        "& .MuiChartsGrid-root .MuiChartsGrid-line": { stroke: "#555", strokeDasharray: "4 4" }, // Grid lines
        "& .MuiChartsAxisHighlight-root": { stroke: "white", strokeDasharray: "5 5" }, // Change dotted hover line
        "& .MuiChartsLegend-root .MuiChartsLegend-series text": {
          fill: "#D3D3D3 !important", // Change legend text color
          fontWeight: "bold",
        },
      }}
    />
  );
}
