import { Box, Button, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { MdAccountCircle } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi2";
import { RiFileEditLine } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { BsTagFill } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { VscListFlat } from "react-icons/vsc";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoIosCheckbox } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import Date from "./Date"
import DropDown from './DropDown';
import axios  from 'axios';
import { useState } from 'react';

// {setEdit , setOpenProfile , addControl , setAddControl , CurrData , setCurrData}
const EditForm = ({setTags , tags , setEdit , setOpenProfile , addControl , setAddControl , CurrData , setCurrData}) => {

    const [taglist , setTaglist] = useState(1);
    const [showDone , setShowDone] = useState(0);
    const [editOption , setEditOption] = useState(0);
    const [temptags , setTemptags] = useState(tags[0].array);
    const [currTag , setCurrTag] = useState("");


    function handleTagArr(action){
        if(action === "Edit"){
            setEditOption(() => 1);
        }else if(action === "Close"){
            setTaglist(() => 1);
            setShowDone(() => 0);
            setEditOption(() => 0);
            setCurrTag(() => "");
        }
        
    }

    function handleTagChange(e){
        setCurrTag(() => e);
    }

    function handleAddTags(e){
        if(!CurrData.tags.includes(e)){
            setCurrData((prev) => ({...prev , tags : [...CurrData.tags , `${e}`]}));
            // setShowDone(() => 1);
            setTaglist(() => 1);
        }
    }

    function handleRemoveTags(e){
        if(CurrData.tags.includes(e)){
            const arr = CurrData.tags.filter(item => item !== e);
            setCurrData((prev) => ({...prev , tags : [...arr]}));
            // setShowDone(() => 1);
            setTaglist(() => 1);
        }
    }

    const handleAddRemoveTag = async(e , action) => {
        if(action === "remove"){
            const arr = temptags.filter(item => item !== e);
            setTemptags(() => arr);
            setShowDone(() => 1);
        }else if(action === "add"){
            setTemptags((prev) => [...prev , e]);
            setCurrTag(() => "");
            setShowDone(() => 1);
        }
        
    }

    const handleSubmitDone = async() =>{
        try {
            alert("Item updated! Reload page");
            const response = await axios.post('https://management-system-jwp8.onrender.com/clientsAndvendors/postCVUpdate', {
                id : tags[0]._id,
                array : temptags
            })
            
            // window.location.reload(()=> {console.log("refreshed")});
          } catch (error) {
            console.error('Error:', error);
          }
    }


    const handleReq = async (action) =>{
        if(action === "Add"){
            try {
                alert("Item Added! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/clientsAndvendors/postAddCV', {
                    name : CurrData.name,
                    title : CurrData.title,
                    tags : CurrData.tags,
                    email : CurrData.email,
                    emailTag : CurrData.emailTag,
                    company : CurrData.company,
                    phone : CurrData.phone,
                    phoneTag : CurrData.phoneTag,
                    amount : CurrData.amount,
                    amountCategory : CurrData.amountCategory,
                    address : CurrData.address,
                    birthday : CurrData.birthday,
                    description : CurrData.description,
                })
              } catch (error) {
                console.error('Error:', error);
              }
        }else if(action === "Update"){
            try {
                alert("Item updated! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/clientsAndvendors/postUpdateCV', {
                    id : CurrData._id,
                    name : CurrData.name,
                    title : CurrData.title,
                    tags : CurrData.tags,
                    email : CurrData.email,
                    emailTag : CurrData.emailTag,
                    company : CurrData.company,
                    phone : CurrData.phone,
                    phoneTag : CurrData.phoneTag,
                    amount : CurrData.amount,
                    amountCategory : CurrData.amountCategory,
                    address : CurrData.address,
                    birthday : CurrData.birthday,
                    description : CurrData.description,
                })
                
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }else if(action === "Delete"){
            try {
                alert("Item Deleted! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/clientsAndvendors/postRemoveCV', {
                    id : CurrData._id,
                })
                // window.location.reload(()=> {console.log("refreshed")});
              } catch (error) {
                console.error('Error:', error);
              }
        }
    }


    function handleOnCancel(){
        setOpenProfile(() => 0);
        setEdit(() => 0);
        setAddControl(() => 1);
        setCurrData(() => ({
            _id : "",
            name: "", 
            tags : [],
            title: "" , 
            email : "" , 
            emailTag : "" , 
            company : "",
            phone : "" , 
            phoneTag : "" ,
            amount: "",
            amountCategory: "",
            address : "",
            birthday : "" , 
            description : ""
        }))
    }
    function handleClear(){
        setCurrData(() => ({
            _id : "",
            name: "", 
            tags : [],
            title: "" , 
            email : "" , 
            emailTag : "" , 
            company : "",
            phone : "" , 
            phoneTag : "" ,
            amount: "",
            amountCategory: "",
            address : "",
            birthday : "" , 
            description : ""
      }))
    }
    function handleTextInputs(field , text){
        setCurrData((prev) => ({...prev , [field] : text}))
    }

    function controlTaglist(){
        setTaglist(!taglist);
    }

  return (
    <>
        <Avatar sx={{height:"130px", width:"130px", bgcolor:"#a6bfd9" , color:"#324463" , fontSize:"60px" , fontWeight:700 , position:"relative" , bottom:"60px" , left:"50px" , border:"5px solid white"}} alt={CurrData.name} src="/static/images/avatar/1.jpg"/>

        <Box sx={{borderRadius: "5px" , ml:7 , mt:"-40px"}}>
            <Box>
                <Typography color='#3d547a' fontSize={13}>Name*</Typography>
                <Stack direction="row">
                    <MdAccountCircle color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                    <input value = {CurrData.name} onChange={(e) => handleTextInputs("name" , e.target.value)} placeholder='Name' type="text" style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                </Stack>
            </Box>


            <Stack direction="row" mt={2}>
                
                <Stack direction="row" sx={{display:"flex" , flexWrap: "wrap" , width:"400px"}}>
                    {CurrData.tags.map((e) => 
                        <Typography fontSize={15} mt={1} ml={1} color='#3d547a' bgcolor="#f1f5f9"  display= "inline-block" whiteSpace = "nowrap" p={.5} pl={1.5} pr={1.5} borderRadius={20}>{e}</Typography>
                    )}
                </Stack>
                

                <Button onClick={editOption ? () => handleTagArr("Close") : () => handleTagArr("Edit")} variant="outlined" sx={{textTransform: "none", backgroundColor:"#f1f5f9" ,  border: "1px solid #3d547a", borderRadius: "15px", color: "black" , mt:"10px" , ml:"auto" , height:"30px" , mr:"110px"}}><RiFileEditLine fontSize={18} color='#353e4a' />&nbsp;&nbsp;<Typography fontSize={15}>{editOption ? "Close" : "Edit"}</Typography></Button>
            </Stack>


            {/* list */}
            {editOption ? <Box sx={{bgcolor:"white" , p:1 , width:"200px" , height:"300px" , overflow:"auto" , scrollbarWidth:"none" , position:"absolute" , bottom:"250px" , left:"1090px" , boxShadow: "4px 4px 10px 2px rgba(0,0,0,0.3)" , zIndex:10 }}>
                <Stack p={1} direction="row" spacing={1} sx={{alignItems:"center" , borderBottom:"1px solid lightgray" , mb:1}}>
                    <FaMagnifyingGlass style={{height:"20px" , width:"20px" , color:"#2f4884"}}/>
                    <input placeholder='Enter Tag Name' value={currTag} onChange={(e) => handleTagChange(e.target.value)} style={{ border:"none" , width:"100px" , height:"30px" , outline:"none" , marginLeft:"15px" , color:'#3d547a'}}/>
                    
                    {!taglist && !showDone? <FaCheck onClick={controlTaglist} style={{height:"20px" , width:"20px" , marginLeft:"auto" , cursor:"pointer" , color:"#2f4884"}}/> : showDone ? <Typography  onClick={() => handleSubmitDone(taglist)} fontSize={12} sx={{bgcolor:"#f1f5f9" , p:0.3 , borderRadius:"10px" , pr:0.7 , pl:0.7 , cursor:"pointer" , "&:hover" : {bgcolor:"#dbe6f0"}}}>Done</Typography> : <MdEditSquare onClick={controlTaglist} style={{height:"20px" , width:"20px" , marginLeft:"auto" , cursor:"pointer" , color:"#2f4884"}}/>}
                </Stack>


                {taglist ? <>{temptags.map(e => <Stack onClick={!CurrData.tags.includes(e) ? () => handleAddTags(e) : () => handleRemoveTags(e)} spacing={2} p={1} pl={2} pr={2} mt={1.5} direction="row" alignItems="center" sx={{"&:hover" : {bgcolor:"#e8edf7"} , cursor:"pointer" , bgcolor:"white"}}>{CurrData.tags.includes(e) ? <IoIosCheckbox style={{height:"20px" , width:"20px" , color:"#2f4884"}}/> : <MdOutlineCheckBoxOutlineBlank style={{height:"20px" , width:"20px" }}/>}<Typography color='#3d547a' fontSize={17}>{e}</Typography></Stack>)}</> : <>
                
                {temptags.map(e =><Box p={1}><Stack direction ="row" p={1} sx={{border:"1px solid lightgray", borderRadius:"10px"}}> 
                    <Typography color='#3d547a'>{e}</Typography><RiDeleteBinFill onClick={() => handleAddRemoveTag(e , "remove")} style={{marginLeft:"auto" , marginRight:"2px" , height:"20px" , width:"20px" , cursor:"pointer" , color:"#2f4884"}}/>
                </Stack></Box>)}
                </>}

                {currTag ? <Stack onClick={() => handleAddRemoveTag(currTag , "add")} direction="row" sx={{alignItems:"center" , pl:1 , "&:hover" : {bgcolor:"#e8edf7"} , cursor:"pointer"}}>
                    <IoIosAddCircle style={{height:"18px" , width:"18px" , color:"#2f4884"}}/>
                    <Typography color='#3d547a' fontWeight={600} sx={{ml:"10px"}}>Create</Typography>
                    <Typography color='black' fontWeight={700} sx={{ml:"10px"}}>"{currTag}"</Typography>
                </Stack> : ""}
            </Box> : ""}

            <Box mt={4}>
                <Typography color='#3d547a' fontSize={13}>Title*</Typography>
                <Stack direction="row">
                    <HiBriefcase color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                    <input value = {CurrData.title} onChange={(e) => handleTextInputs("title" , e.target.value)} placeholder='Title' type="text" style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                </Stack>
            </Box>

            <Box mt={4} >
                <Typography color='#3d547a' fontSize={13}>Company*</Typography>
                <Stack direction="row" >
                    <HiBuildingOffice2 color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                    <input value = {CurrData.company} onChange={(e) => handleTextInputs("company" , e.target.value)} placeholder='Company' type="text" style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                </Stack>
            </Box>

            <Box mt={4} >
                <Stack direction="row">
                <Box sx={{width:"300px"}}>
                    <Typography color='#3d547a' fontSize={13}>Email</Typography>
                    <Stack direction="row">
                        <HiMail color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                        <input value={CurrData.email} onChange={(e) => handleTextInputs("email" , e.target.value)} placeholder='Email' type="text" style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                    </Stack>
                </Box>

                <Box sx={{ml:"15px"}}>
                    <Typography color='#3d547a' fontSize={13}>Label</Typography>
                    <Stack direction="row" >
                        <BsTagFill color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"12px" , fontSize:"25px"}}/>
                        <input value = {CurrData.emailTag} onChange={(e) => handleTextInputs("emailTag" , e.target.value)} placeholder='Label' type="text" style={{height: "30px", padding: "5px" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                    </Stack>
                </Box>
                </Stack>

                {/* <Stack direction="row" mt={2} sx={{color:"#4d6998"}}>
                    <MdOutlineAddCircle style={{marginTop:"3px"}}/>
                    <Typography sx={{ml:"5px","&:hover" : {textDecoration:"underline" , cursor:"pointer"}}} fontSize={15}>Add an email address</Typography>
                </Stack> */}
            </Box>


            {/* phone number + address + birthday + description */}
            <Box mt={4} >
                <Stack direction="row">
                    {/* phone */}
                <Box sx={{width:"300px"}}>
                    <Typography color='#3d547a' fontSize={13}>Phone</Typography>
                    <Stack direction="row">
                        <FaPhoneAlt color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                        <input value = {CurrData.phone} onChange={(e) => handleTextInputs("phone" , e.target.value)} placeholder='Phone' type="number" style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                    </Stack>
                </Box>

                {/* phone label */}
                <Box sx={{ml:"15px"}}>
                    <Typography color='#3d547a' fontSize={13}>Label</Typography>
                    <Stack direction="row" >
                        <BsTagFill color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                        <input value = {CurrData.phoneTag} onChange={(e) => handleTextInputs("phoneTag" , e.target.value)} placeholder='Label' type="text" style={{height: "30px", padding: "5px" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                    </Stack>
                </Box>
                </Stack>


                {/* add a phone number ----- Label*/}
                {/* <Stack direction="row" mt={2} sx={{color:"#4d6998"}}>
                    <MdOutlineAddCircle style={{marginTop:"3px"}}/>
                    <Typography sx={{ml:"5px","&:hover" : {textDecoration:"underline" , cursor:"pointer"}}} fontSize={15}>Add a phone number</Typography>
                </Stack> */}


                {/* Amount -- pending -- paid -- category */}
                <Stack direction="row" mt={4}>
                <Box sx={{width:"300px"}}>
                    <Typography color='#3d547a' fontSize={13}>Amount</Typography>
                    <Stack direction="row">
                        <RiMoneyRupeeCircleFill color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                        <input value = {CurrData.amount} onChange={(e) => handleTextInputs("amount" , e.target.value)} type = "number" placeholder='0' style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                    </Stack>
                </Box>

                <Box sx={{ml:"15px" , pt:"20px"}}>
                {/* <Typography color='#3d547a' fontSize={13}>Category</Typography> */}
                    <DropDown CurrData={CurrData} setCurrData={setCurrData}/>
                </Box>
                </Stack>


                {/* address */}
                <Box mt={4}>
                    <Typography color='#3d547a' fontSize={13}>Address</Typography>
                    <Stack direction="row">
                        <FaLocationDot color='#a6bfd9' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>
                        <input value = {CurrData.address} onChange={(e) => handleTextInputs("address" , e.target.value)} placeholder='Address' type="text" style={{height: "30px", padding: "5px", width: "75%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px"}}/>
                    </Stack>
                </Box>

                {/* birthday */}
                <Box mt={4}>
                    <Date setCurrData={setCurrData}/>
                </Box>

              {/* decription box */}
                <Box mt={4}>
                    <Typography color='#3d547a' fontSize={13}>Notes</Typography>
                    <Stack direction="row">
                        <VscListFlat color='#3c5177' style={{position:"relative" , left:"6px" , marginTop:"10px" , fontSize:"25px"}}/>

                        <textarea value = {CurrData.description} onChange={(e) => handleTextInputs("description" , e.target.value)} placeholder="Description" type="text" style={{height: "170px", padding: "5px", width: "75.5%" , paddingLeft:"40px" , marginLeft:"-25px" , border:"1px solid lightgray" , borderRadius:"5px" , marginTop:"6px"}}/>
                    </Stack>
                </Box>
            </Box>
        </Box>

        <Stack direction="row" mt={5} p={2.3}   bgcolor="#f1f5f9" >
            {addControl ? <Button onClick={() => handleReq("Delete")} sx={{color:"#DC2626",textTransform: "none" , height:"30px" , borderRadius:"15px" , fontSize:"17px" , padding:"16px" , "&:hover" : {bgcolor:"#fae2e2"}}}>Delete</Button> : <Button onClick={handleOnCancel} sx={{color:"#DC2626",textTransform: "none" , height:"30px" , borderRadius:"15px" , fontSize:"17px" , padding:"16px" , "&:hover" : {bgcolor:"#fae2e2"}}}>Cancel</Button>}

            {addControl ? <Button sx={{textTransform: "none" , height:"30px" , borderRadius:"25px" , fontSize:"17px" , padding:"16px" , ml:"380px" , color:"black"}}>Cancel</Button> : <Button onClick={handleClear} sx={{textTransform: "none" , height:"30px" , borderRadius:"25px" , fontSize:"17px" , padding:"16px" , ml:"380px" , color:"black"}}>Clear</Button>}

            {addControl ? <Button onClick={() => handleReq("Update")} variant='contained' sx={{textTransform: "none" , height:"30px" , borderRadius:"25px" , fontSize:"17px" , padding:"16px" , bgcolor:"#2f4884" , ml:"20px"}}>Edit</Button> : <Button onClick={() => handleReq("Add")} variant='contained' sx={{textTransform: "none" , height:"30px" , borderRadius:"25px" , fontSize:"17px" , padding:"16px" , bgcolor:"#2f4884" , ml:"20px"}}>Add</Button>}
        </Stack>
    </>
  )
}

export default EditForm