import { Box, Button, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const style = {
 textTransform: 'none' ,
 color:"black" , 
 backgroundColor:"white" , 
 cursor:"pointer",
 border:"none" , 
 height:"35px" , 
 width:"199px" , 
 paddingLeft:"5px", 
 paddingRight:"5px",
 '&:hover' : {backgroundColor:"#eef1f6"},
 justifyContent: 'flex-start', // Aligns content to the right
 textAlign: 'left',
}

const DropDown = ({open , setOpen , handleOnChange , formValues , setFormValues}) => {
  
  const arr = ["Spent" , "Received" , "Pay"];

  function handleOnClick(e){
    setOpen(() => false);
    handleOnChange("category" , `${e}`);
  }
  return (
    <>
      <button onClick={() => setOpen(!open)} style={{cursor:"pointer",border:"1px solid #3d547a" ,textAlign:"left",height:"35px" , width:"200px" , backgroundColor:"white" , paddingLeft:"5px" , paddingRight:"5px" , display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography sx={{display:"inline" , fontSize:"14px"}}>{formValues.category}</Typography>
        {open ? <IoIosArrowUp style={{marginTop:"4px"}}/> : <IoIosArrowDown/>}
      </button>

      {open ? <Box  sx={{bgcolor:"white" , border:"1px solid black" , borderTop:"none" , width:"199px"}}>
        {arr.map(e => <Box key={e}><Button sx={style} onClick={() => handleOnClick(e)}>{e}</Button></Box>)}
      </Box> : ""}
    </>
  )
}

export default DropDown