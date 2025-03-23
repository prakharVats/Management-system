import { Box, Button, Stack, Typography } from '@mui/material'
import { BiSolidReport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiExport } from "react-icons/tfi";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import Table from "./Table"
import Progress from "./Progress"
import ControlBar from './ControlBar';
import { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import Report from './Report';

import { useRef } from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Settings from './Settings';
import axios from 'axios';


const Finance = () => {
  const [report , setReport] = useState(0)
  const [settings , setSettings] = useState(false);
  const [count , setCount] = useState();
  const [settingFields , setSettingFields] = useState({
    _id : "",
    month : "",
    savingGoals : "",
    expenseLimit : "",
    billExpectation : ""
  });

  // fetching settings data
  useEffect(() => {
      axios.get("http://localhost:3000/finance/getSettings")
        .then((response) => {
          setSettingFields(() => response.data[0]);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

  // pdf handling
  const reportRef = useRef();
  const summaryRef = useRef();

  const downloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Financial_Report.pdf");
    });
  };

  const downloadSummary = () => {
    const input = summaryRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Summary.pdf");
    });
  };


  const [addEditRemove , SetAddEditRemove] = useState({
    add : false,
    edit : false,
    editC : false,
    remove : false
  });

  const [formValues , setFormValues] = useState({
    name : "",
    price : "",
    category : "Categories",
    date : "",
    id : ""
})
  const [billIncSav , setBillIncSav] = useState({
    spending : 0,
    bill : 0,
    income : 0
  });
  
  function handleReport(){
    setReport(!report);
  }
  const [searchbar , setSearchbar] = useState();

  // calculating and handling % 
  const ExpensePercentage = (((billIncSav.spending - settingFields.expenseLimit)*100)/settingFields.expenseLimit).toFixed(2) < 0 ? (((billIncSav.spending - settingFields.expenseLimit)*100)/settingFields.expenseLimit).toFixed(2) * -1 : (((billIncSav.spending - settingFields.expenseLimit)*100)/settingFields.expenseLimit).toFixed(2); 


  const x = billIncSav.income - billIncSav.spending;
  const Savings = (((x > 0 ? x : -1 * x) - settingFields.savingGoals)*100/settingFields.savingGoals).toFixed(2) > 0 ? ((((x > 0 ? x : -1 * x) - settingFields.savingGoals)/settingFields.savingGoals)*100).toFixed(2) : ((((x > 0 ? x : -1 * x) - settingFields.savingGoals)/settingFields.savingGoals)*100).toFixed(2) * -1;


  const BillPercentage = (((billIncSav.bill - settingFields.billExpectation)/settingFields.billExpectation)*100).toFixed(2) > 0 ? (((billIncSav.bill - settingFields.billExpectation)/settingFields.billExpectation)*100).toFixed(2) : (((billIncSav.bill - settingFields.billExpectation)/settingFields.billExpectation)*100).toFixed(2) * -1;

  const [number , setNumber] = useState({
    NoExpenses : 0,
    NoBill : 0,
    NoSaving : 0
  });
  useEffect(() => {
     let NoExpenses = count?.filter(e => (e.category === "Spent"));
     let NoBill = count?.filter(e => (e.category === "Pay"));
     let NoSaving = count?.filter(e => (e.category === "Received"));
     setNumber(() => ({
      NoExpenses : NoExpenses,
      NoBill : NoBill ,
      NoSaving : NoSaving
     }))
  }, [count])
  
  return (
    <Box p={3} sx={{bgcolor: "#f1f5f9" }}>
      <Stack direction="row" spacing="auto">
        {/* Heading */}
        <Box>
          <Typography variant='h5'>
            Finance Records
          </Typography>
          <Typography color='#3d547a'>
            Keep track of your financial status
          </Typography>
        </Box>

        {/* Report and Settings */}
        <Stack direction="row" spacing={2}>
          <Button onClick={handleReport} variant="outlined" sx={{textTransform: "none" , border: "1px solid #3d547a", borderRadius: "15px", color: "black", height: "40px" }}><BiSolidReport fontSize={18} color='#64748b' />&nbsp;<Typography>Report</Typography></Button>

          <Button onClick={() => setSettings(!settings)} variant="outlined" sx={{ textTransform: "none",border: "1px solid #3d547a", borderRadius: "15px", color: "black", height: "40px"}}><IoSettingsOutline fontSize={18} color='#353e4a' />&nbsp;<Typography>Settings</Typography></Button>
          {/* 2f4884 */}
          <Button onClick={downloadPDF} variant="contained" sx={{ textTransform: "none",borderRadius: "15px", color: "white", bgcolor: "#2f4884", height: "40px" }}><TfiExport fontSize={18} color='white' />&nbsp;&nbsp;<Typography>Export</Typography></Button>
        </Stack>
      </Stack>
 

      {/* mid section */}
      <Stack direction="row" mt={5} >
        <Box >
          <ControlBar setSearchbar={setSearchbar} setFormValues={setFormValues} addEditRemove = {addEditRemove} SetAddEditRemove={SetAddEditRemove}/>
          {addEditRemove.add ? <AddProduct btn="Add"   formValues={formValues} setFormValues={setFormValues} addEditRemove = {addEditRemove} SetAddEditRemove={SetAddEditRemove}/> : ""}

          {addEditRemove.edit?<Typography sx={{color:"#3d547a" , mt:"15px" , ml:"15px" , fontWeight:"bold"}}>Select an item to edit :</Typography> : ""}

          {/* Edit component rendering */}
          {addEditRemove.editC?<><Typography sx={{color:"#3d547a" , mt:"15px" , ml:"15px" , fontWeight:"bold"}}>Update the fields :</Typography><AddProduct btn = "Update" formValues={formValues} setFormValues={setFormValues} addEditRemove = {addEditRemove} SetAddEditRemove={SetAddEditRemove}/></> : ""}

          {addEditRemove.remove? <Typography sx={{color:"#3d547a" , mt:"15px" , ml:"15px" , fontWeight:"bold"}}>Select an item to remove :</Typography> : ""}

          {report ? <Report settingFields={settingFields} billIncSav={billIncSav} BillPercentage={BillPercentage} Savings={Savings} ExpensePercentage = {ExpensePercentage} reportRef = {reportRef}/> : <Table setCount={setCount} searchbar={searchbar} billIncSav={billIncSav} setBillIncSav={setBillIncSav} setFormValues={setFormValues} addEditRemove = {addEditRemove} SetAddEditRemove = {SetAddEditRemove}/>}
        </Box>

        <Box ref={summaryRef} borderRadius={2} bgcolor="rgb(255 255 255)" ml={4} p={3} width={450} sx={{height:"490px" }}>
          <Typography ><strong>Budget</strong></Typography>
          <Typography color='#3d547a'>Monthly Budget Summary</Typography>
          <Typography fontSize={13} mt={3}>Last month; you had <strong>{number.NoExpenses?.length}</strong> expense transactions,<strong>{number.NoBill?.length}</strong> savings entries and <strong>{number.NoSaving?.length}</strong> bills.</Typography>

          {/* Expense */}
          <Stack direction="row" mt={3}>
            {/* Icon */}
            <Box>
              <BsCreditCard2Front style={{ backgroundColor: "#fee2e2", fontSize: "25px", height: "30px", width: "30px", padding: "15px", color: "#991b1b", borderRadius: "5px" }} />
            </Box>
            {/* mid of the row */}
            <Box ml={2}>
              <Typography color='#3d547a' fontSize={13}>
                Expenses
              </Typography>
              <Typography mt={0.5} fontSize="15px">
                <strong>{`$${billIncSav.spending}`}</strong>
              </Typography>
              <Progress BG="#fee2e2" color="#e46767" val={billIncSav.spending - settingFields.expenseLimit > 0 ? ExpensePercentage > 100 ? 100 : ExpensePercentage : 100-ExpensePercentage} />
            </Box>

            {/* right most */}
            <Stack direction="row" ml={9}>
              <Typography direction="row" mt={4.5}>
                {ExpensePercentage}%
              </Typography>
              {billIncSav.spending - settingFields.expenseLimit < 0 ? <FaArrowDownLong style={{ color: "#50ba77", fontSize: "15px", marginTop: "39px", marginLeft: "5px" }} /> : <FaArrowUpLong style={{ color: "#e46767", fontSize: "15px", marginTop: "39px", marginLeft: "5px" }} />}
            </Stack>
          </Stack>


          {/* Savings */}
          <Stack direction="row" mt={3}>
            {/* Icon */}
            <Box>
              <FaRegMoneyBillAlt style={{ backgroundColor: "#E0E7FF", fontSize: "25px", height: "30px", width: "30px", padding: "15px", color: "#3730A3", borderRadius: "5px" }} />
            </Box>
            {/* mid of the row */}
            <Box ml={2}>
              <Typography color='#3d547a' fontSize={13}>
                Savings
              </Typography>
              <Typography mt={0.5} fontSize="15px">
                <strong>{`$${billIncSav.income - billIncSav.spending > 0 ? billIncSav.income - billIncSav.spending : -billIncSav.income + billIncSav.spending}`}</strong>
              </Typography>

              <Progress BG="#E0E7FF" color="#7b75d6" val={((x > 0 ? x : -1 * x) - settingFields.savingGoals) > 0 ? Savings > 100 ? 100 : Savings : 100 - Savings} />
            </Box>

            {/* right most */}
            <Stack direction="row" ml={9}>
              <Typography direction="row" mt={4.5}>
               {Savings}%
              </Typography>
              {((x > 0 ? x : -1 * x) - settingFields.savingGoals) > 0 ? <FaArrowUpLong style={{ color: "#50ba77", fontSize: "15px", marginTop: "39px", marginLeft: "5px" }} /> : <FaArrowDownLong style={{ color: "#e46767", fontSize: "15px", marginTop: "39px", marginLeft: "5px" }} />}
            </Stack>
          </Stack>

          {/* Bills */}
          <Stack direction="row" mt={3}>
            {/* Icon */}
            <Box>
              <IoBulbOutline style={{ backgroundColor: "#CCFBF1", fontSize: "25px", height: "30px", width: "30px", padding: "15px", color: "#115E59", borderRadius: "5px" }} />
            </Box>
            {/* mid of the row */}
            <Box ml={2}>
              <Typography color='#3d547a' fontSize={13}>
               Bill
              </Typography>
              <Typography mt={0.5} fontSize="15px">
                <strong> {`$${billIncSav.bill}`}</strong>
              </Typography>
              <Progress BG="#CCFBF1" color="#115E59" val={billIncSav.bill - settingFields.billExpectation > 0 ? BillPercentage > 100 ? 100 : BillPercentage : 100 - BillPercentage} />
            </Box>

            {/* right most */}
            <Stack direction="row" ml={9}>
              <Typography direction="row" mt={4.5}>
                {BillPercentage}%
              </Typography>
              {billIncSav.bill - settingFields.billExpectation > 0 ? <FaArrowUpLong style={{color: "#e46767", fontSize: "15px", marginTop: "39px", marginLeft: "5px" }} /> : <FaArrowDownLong style={{ color: "#50ba77", fontSize: "15px", marginTop: "39px", marginLeft: "5px" }} />}
            </Stack>
          </Stack>
          {/* #64748B */}
          <Typography color='#64748B' fontSize={14} mt={2} >
            {(billIncSav.bill - settingFields.billExpectation > 0 || billIncSav.spending - settingFields.expenseLimit > 0) ? "Exceeded your personal limit! Be careful next month." : "Expenses are under control!"}
            
          </Typography>

          <Button onClick={downloadSummary} variant="outlined" sx={{border: "1px solid #3d547a", borderRadius: "25px", color: "black", height: "40px", fontSize:"13px",textTransform: "none" , mt:"30px"}}><Typography >Download Summary</Typography></Button>
        </Box>
      </Stack>
      {settings ? <Settings settingFields = {settingFields}  setSettingFields = {setSettingFields} setSettings={setSettings}/> : ""}
    </Box>
  )
}

export default Finance