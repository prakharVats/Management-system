import { Box, Stack, Typography } from '@mui/material'
import React from 'react'



const Report = ({settingFields , billIncSav , BillPercentage , Savings , ExpensePercentage , reportRef}) => {
  const x = billIncSav.income - billIncSav.spending;
  return (
    <Box ref={reportRef}  p={2} bgcolor="white" mt={2} height={420} sx={{borderRadius:"5px" , border:"1px dotted"}}>
        <Typography sx={{textAlign:"center"}}>{settingFields.month} Financial Report</Typography>
        <Typography sx={{textAlign:"center"}}>2025</Typography>
       
       <Stack direction="row" spacing={15} mt={5}>
            <Box style={{marginLeft:"50px"}}>

                {billIncSav.spending - settingFields.expenseLimit > 0 ? <Typography>Expense limit exceeded by {ExpensePercentage}% ({billIncSav.spending}₹)</Typography> : <Typography>Expenses are under control {100 - ExpensePercentage}% ({billIncSav.spending} ₹)</Typography>}

                {((x > 0 ? x : -1 * x) - settingFields.savingGoals) > 0 ? <Typography>Savings increased by {Savings}% ({x > 0 ? x : -1 * x} ₹)</Typography> : <Typography>Savings decreased by {Savings}% ({x > 0 ? x : -1 * x} ₹)</Typography>}

                <Typography>Bill increased by 17%(736 ₹)</Typography>
            </Box>
            <Box>
                <Typography>Expense limit : {settingFields.expenseLimit} ₹</Typography>
                <Typography>Savings goal : {settingFields.savingGoals} ₹</Typography>
                <Typography>Bill Expectations : {settingFields.billExpectation} ₹</Typography>
            </Box>
       </Stack>

        <Typography sx={{marginLeft:"50px" , mt:"40px" , mr:"90px"}}>This financial period saw a 12% expense overage ($3,254) and a 3% decline in savings ($4,512), indicating the need for better financial planning. Bill payments also rose by 17% ($736).</Typography>
        <Typography sx={{marginLeft:"50px", mr:"90px" , mt:"10px"}}> A total of 32 items were purchased, while total income stood at $90,000, providing a solid financial base for adjustments.</Typography>
    </Box>
  )
}

export default Report