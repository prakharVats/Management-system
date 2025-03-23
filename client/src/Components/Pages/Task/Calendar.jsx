import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";

const StyledStaticDatePicker = styled(StaticDatePicker)({
  "& .MuiPaper-root": {
    backgroundColor: "#252529", // Dark background
    color: "#ffffff", // Text color
    borderRadius: "8px",
  },
  "& .MuiPickersDay-root": {
    color: "#ffffff", // Day text color
    "&:hover": {
      backgroundColor: "black", // Hover effect
      color:"white"
    },
    "&.Mui-selected": {
      backgroundColor: "black", // Selected day background
      color: "white", // Selected day text
    },
  },
  "& .MuiTypography-root": {
    color: "black", // Ensures text inside typography is visible
  },
  "& .MuiPickersCalendarHeader-root": {
    color: "black", // Header text color
  },
  "& .MuiButtonBase-root": {
    color: "black", // Navigation buttons (prev/next)
  },
});

export default function CalendarDemo() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledStaticDatePicker
        displayStaticWrapperAs="desktop"
        orientation="portrait"
        defaultValue={dayjs("2022-04-17")}
      />
    </LocalizationProvider>
  );
}
