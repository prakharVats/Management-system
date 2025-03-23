import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";
import { FaCheck } from "react-icons/fa6";

const data = [
  { name: "Jan", expenses: 1200, savings: 800  , bills : 300},
  { name: "Feb", expenses: 1300, savings: 900 , bills : 600},
  { name: "Mar", expenses: 1100, savings: 850 , bills : 250},
  { name: "Apr", expenses: 1400, savings: 950 , bills : 330},
  { name: "May", expenses: 1300, savings: 700 , bills : 560},
  { name: "Jun", expenses: 1200, savings: 750 , bills : 760},
  { name: "Jul", expenses: 1700, savings: 600 , bills : 360},
  { name: "Aug", expenses: 1367, savings: 380 , bills : 160},
  { name: "Sep", expenses: 756, savings: 1700 , bills : 60},
  { name: "Oct", expenses: 978, savings: 760 , bills : 260},
  { name: "Nov", expenses: 1000, savings: 550 , bills : 360},
  { name: "Dec", expenses: 1100, savings: 700 , bills : 160},
  // ... continue for the rest of your data
];


export default function VisitorsOverview() {
  const [yearMonth, setYearMonth] = useState(0);

  return (
    <Box>
      <Stack direction="row">
        <Box p={5}>
          <Typography color="white">Consistency</Typography>
          <Typography color="#4d6999" fontSize={13}>
            Number of hours per day
          </Typography>
        </Box>

        <Stack direction="row" p={5} ml="auto" spacing={2}>
          {!yearMonth ? (
            <Button
              sx={{
                textTransform: "none",
                height: "35px",
                color: "white",
                borderRadius: "15px",
                backgroundColor: "#383f5d",
                pr: "15px"
              }}
            >
              <FaCheck style={{ marginRight: "10px", fontSize: "16px" }} />
              Year
            </Button>
          ) : (
            <Button
              onClick={() => setYearMonth(0)}
              sx={{
                textTransform: "none",
                height: "35px",
                color: "white",
                borderRadius: "15px"
              }}
            >
              Year
            </Button>
          )}

          {yearMonth ? (
            <Button
              sx={{
                textTransform: "none",
                height: "35px",
                color: "white",
                borderRadius: "15px",
                backgroundColor: "#383f5d",
                pr: "15px"
              }}
            >
              <FaCheck style={{ marginRight: "10px", fontSize: "16px" }} />
              Last 6 month
            </Button>
          ) : (
            <Button
              onClick={() => setYearMonth(1)}
              sx={{
                textTransform: "none",
                height: "35px",
                color: "white",
                borderRadius: "15px"
              }}
            >
              Last 6 month
            </Button>
          )}
        </Stack>
      </Stack>
{/* 8884d8 */}
{/* 82ca9d */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8d1919" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8d1919" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#332f93" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#332f93" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBills" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            stroke="#A0AEC0"
            tick={{ fontSize: 12 }}
            minTickGap={30}
          />
          <YAxis stroke="#A0AEC0" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1A202C", color: "#E2E8F0" }}
          />
          <Legend verticalAlign="top" height={36} />
          
          <CartesianGrid strokeDasharray="3 3" stroke="#43526c" />

          {/* First Area for Visitors */}
          <Area
            type="linear"
            dataKey="expenses"
            stroke="#d92626"
            fill="url(#colorVisitors)"
          />

          {/* Second Area for Sales */}
          <Area
            type="linear"
            dataKey="savings"
            stroke="#8884d8"
            fill="url(#colorSales)"
          />
          <Area
            type="linear"
            dataKey="bills"
            stroke="#82ca9d"
            fill="url(#colorBills)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
