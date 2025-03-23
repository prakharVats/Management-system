import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import { RiFileEditLine } from "react-icons/ri";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCake } from "react-icons/hi";
import { VscListFlat } from "react-icons/vsc";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import EditForm from './EditForm';
import axios from 'axios';
const data1 = [
  {
    "name" : "A",
    "arr" :  [
      { "name": "Alice Harding", 
        "title": "Track Service Worker" , 
        "company": "MicroTough" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipisicing exercitation dolor nisi ipsum nostrud anim dolore sint veniam consequat lorem sit ex commodo nostrud occaecat elit magna magna commodo incididunt laborum ad irure pariatur et sit ullamco adipisicing.Ullamco in dolore amet est quis consectetur fugiat non nisi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur."
      },
      { "name": "Aiane white", 
        "title": "Track Service Worker" , 
        "company": "Jira" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur."
      },
      { "name": "Alic Jarding", 
        "title": "Track Service Worker" , 
        "company": "Amazon" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur. new new new new new new new new new new"
      },


    ]
  },
  {
    "name" : "B",
    "arr" :  [
      { "name": "Benzo Tzar", 
        "title": "Track Service Worker" , 
        "company": "Track Service Worker" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipisicing exercitation dolor nisi ipsum nostrud anim dolore sint veniam consequat lorem sit ex commodo nostrud occaecat elit magna magna commodo incididunt laborum ad irure pariatur et sit ullamco adipisicing.Ullamco in dolore amet est quis consectetur fugiat non nisi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur."
      },
      { "name": "Boron black", 
        "title": "Track Service Worker" , 
        "company": "Track Service Worker" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur."
      },
      { "name": "Bikki might", 
        "title": "Track Service Worker" , 
        "company": "Track Service Worker" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur. new new new new new new new new new new"
      },
      { "name": "Bikki might", 
        "title": "Track Service Worker" , 
        "company": "Track Service Worker" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur. new new new new new new new new new new"
      },
      { "name": "Bikki might", 
        "title": "Track Service Worker" , 
        "company": "Track Service Worker" , 
        "email" : ["aliceharding@mail.us" , "XYZ@mail.us"] , 
        "emailTag" : ["personal" , "work"] , 
        "phone" : ["+91 9425693564" , "+91 9425693561"] , 
        "phoneTag" : ["work" , "personal"] ,
        "address" : "387 Holt Court, Thomasville, Alaska, PO2867",
        "birthday" : "September 17, 1985" , 
        "description" : "Adipi incididunt id laborum adipisicing dolor proident velit ut quis aliquip dolore id anim sit adipisicing nisi incididunt enim amet pariatur. new new new new new new new new new new"
      },


    ]
  },
]


const VendorsAndClients = () => {
  const [data , setData] = useState(data1);
  const [addControl , setAddControl] = useState(1);
  const [tags , setTags] = useState([""]);
  const [searchbar , setSearchbar] = useState();
  const [temp , setTemp] = useState();

  function handleOnChange(e){
    setSearchbar(() => e);
  }

  useEffect(() => {
    axios.get("http://localhost:3000/clientsAndvendors/getCV")
      .then((response) => {
        setTemp(() => response.data);
        const DATA = Object.values(
          response.data.reduce((acc, item) => {
            const firstLetter = item.name.charAt(0).toUpperCase(); // Get first letter
            if (!acc[firstLetter]) {
              acc[firstLetter] = { name: firstLetter, arr: [] };
            }
            acc[firstLetter].arr.push(item);
            return acc;
          }, {})
        ).sort((a, b) => a.name.localeCompare(b.name));
        setData(() => DATA);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


   // fetching archives
   useEffect(() => {
    axios.get("http://localhost:3000/clientsAndvendors/getCVtags")
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [openProfile , setOpenProfile] = useState(0);
  const [edit , setEdit] = useState(0);
  const [CurrData , setCurrData] = useState({
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
  })

  

  function handleAddBtn(){
    setOpenProfile(() => 1);
    setEdit(() => 1);
    setAddControl(() => 0);
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

  function handleClose(){
    setOpenProfile(() => 0);
    setEdit(() => 0)
  }

  function handleBackButton(){
    setEdit(0)
  }

  function handleEdit(){
    setEdit(() => 1);
    setAddControl(() => 1);
  }


  return (
    <Grid container >
      <Grid size = {openProfile ? 5.3 : 12}>
      <Box height="91.3vh" bgcolor="#f1f5f9" overflow="auto" sx={{ scrollbarWidth: "none" }}>
        <Box p={3} sx={{bgcolor:"white" , borderBottom:"1px solid lightgray"}}>
          <Box>
            <Typography variant='h5'>Clients and Vendors</Typography>
            <Typography color='#3d547a'>Total profiles available : {temp?.length}</Typography>
          </Box>
              
          <Stack ml="-28px" direction="row" mt={4} >
                <HiMagnifyingGlass style={{fontSize:"25px" , color:"gray" , display:"flex" , position:"relative" , left:"32px" , top:"7px"}}/>

                <input onChange={(e) => handleOnChange(e.target.value)} placeholder='Search Profiles' style={{borderRadius:"20px" , border:"1px solid lightgray" , padding:"10px" , paddingLeft:"40px" , width:"80%"}}/>

                <Button onClick = {handleAddBtn} variant="contained" sx={{ textTransform: "none" , borderRadius: "15px", color: "white", bgcolor: "#2f4884", height: "40px" , ml:"10px" , pr:"22px"}}><IoMdAdd fontSize={22} color = 'white'/>&nbsp;&nbsp;
                <Typography>Add</Typography></Button>
          </Stack>

        </Box>   
        <Contact temp = {temp} searchbar={searchbar} setAddControl={setAddControl} setEdit={setEdit} data={data} setOpenProfile={setOpenProfile} setCurrData = {setCurrData} CurrData = {CurrData}/>
      </Box>
      </Grid>


    {/* right bar -- details and form */}
      {openProfile ? <Grid size={6.7} borderLeft="1px solid lightgray">
        <Box height="92vh" overflow="auto" sx={{scrollbarWidth:"none"}}>

          {/* background picture */}
          <Box height="30%" bgcolor="#d2dfec" >
            <Stack direction="row">
              {edit && addControl ? <IoArrowBackSharp onClick={handleBackButton} style={{fontSize:"20px" , backgroundColor:"#a6bfd9" , color:"black" , borderRadius:"20px" , marginLeft:"10px" , marginTop:"10px" , padding:"5px" , cursor:"pointer"}}/> : ""}
                
                <IoMdClose onClick={handleClose} style={{fontSize:"20px" , marginLeft:"auto" ,  borderRadius:"20px" , marginRight:"10px" , marginTop:"10px" , backgroundColor:"#a6bfd9" , color:"black" , padding:"5px" , cursor:"pointer"}}/>
            </Stack>
          </Box>

          {/* edit form etc */}
          {edit ? <EditForm setTags={setTags} tags={tags} setEdit={setEdit} setOpenProfile={setOpenProfile} addControl={addControl} setAddControl = {setAddControl} CurrData = {CurrData} setCurrData = {setCurrData}/> : <Box bgcolor="white"> 
            <Stack direction="row">
              <Box width="50%" >
                <Avatar sx={{height:"130px", width:"130px", bgcolor:"#a6bfd9" , color:"#324463" , fontSize:"60px" , fontWeight:700 , position:"relative" , bottom:"60px" , left:"50px" , border:"5px solid white"}} alt={CurrData.name} src="/static/images/avatar/1.jpg"/>
                <Typography mt="-50px" ml={7} fontSize={30} fontWeight={660}>{CurrData.name}</Typography>
                
                <Stack direction="row" ml={5}>
                  {CurrData.tags.map((e) =><Typography fontSize={12} ml={1} mt={1} color='#3d547a' bgcolor="#f1f5f9"  display= "inline-block" whiteSpace = "nowrap" p={.5} pl={1.5} pr={1.5} borderRadius={20}>{e}</Typography>)}
                </Stack>
              </Box>
              
              <Box width="50%" sx={{ height:"60px" , mt:"110px"}}>
                <Button onClick={handleEdit}  variant="outlined" sx={{textTransform: "none",border: "1px solid #3d547a", borderRadius: "15px", color: "black", height: "40px" , mt:"10px" , ml:"220px"}}><RiFileEditLine fontSize={18} color='#353e4a' />&nbsp;&nbsp;<Typography>Edit</Typography></Button>
              </Box>
            </Stack>


           {/* horizontal partion line*/}
           <Box borderBottom="1px solid lightgray" ml={6.5} mr={4} mt={4}></Box>

           {/* profile details */}
           <Stack direction="row" mt={4} ml={7}>
           <HiOutlineBriefcase fontSize={25} color='#3d547a'/><Typography ml={2} mt={0.2} color='#324463'>{CurrData.title}</Typography>
           </Stack>

           <Stack direction="row" mt={4} ml={7}>
           <HiOutlineBuildingOffice2 fontSize={25} color='#3d547a'/><Typography ml={2} mt={0.2} color='#324463'>{CurrData.company}</Typography>
           </Stack>

           <Stack direction="row" mt={4} ml={7}>
            <MdOutlineEmail fontSize={25} color='#3d547a'/>
            <Typography ml={2} mt={0.1} color='blue'>{CurrData.email}</Typography>
            <GoDotFill color='#3d547a' style={{marginTop:"9px" , marginLeft:"10px" , fontSize:"10px"}}/>
            <Typography fontSize={14} ml="-10px" color='#3d547a'display= "inline-block" whiteSpace = "nowrap" p={.5} pl={1.5} pr={1.5} >{CurrData.emailTag}</Typography>
           </Stack>

           <Stack direction="row" mt={4} ml={7}>
            <MdOutlineLocalPhone fontSize={25} color='#3d547a'/>
            <Typography ml={2} mt={0.1} color='blue'>{CurrData.phone}</Typography>
            <GoDotFill color='#3d547a' style={{marginTop:"9px" , marginLeft:"10px" , fontSize:"10px"}}/>
            <Typography fontSize={14} ml="-10px" color='#3d547a'display= "inline-block" whiteSpace = "nowrap" p={.5} pl={1.5} pr={1.5} >{CurrData.phoneTag}</Typography>
           </Stack>

           <Stack direction="row" mt={4} ml={7}>
           <IoLocationOutline fontSize={25} color='#3d547a'/><Typography ml={2} mt={0.2} color='#324463'>{CurrData.address}</Typography>
           </Stack>

           <Stack direction="row" mt={4} ml={7}>
           <HiOutlineCake fontSize={25} color='#3d547a'/><Typography ml={2} mt={0.2} color='#324463'>{CurrData.birthday}</Typography>
           </Stack>

           <Stack direction="row" mt={4} ml={7}>
           <VscListFlat fontSize={25}  color='#3d547a'/>

           <Typography mb={10} ml={2} mt={0.2} color='#324463' width="80%">{CurrData.description}</Typography>
           </Stack>
          </Box>}
        </Box>
      </Grid> : ""}
    </Grid>
    
  )
}

const Contact = ({temp , searchbar , setOpenProfile , setCurrData , data , setEdit , setAddControl}) => {
  const [temp2 , setTemp2] = useState();

 useEffect(() => {
  if(temp){
    if(searchbar?.length > 0){
      let x = temp.filter(e => {
        if(e.name.toLowerCase().includes(searchbar.toLowerCase())){
          return e;
        }
      })
      setTemp2(() => x);
    }else {
      setTemp2(() => temp);
    }
  }
   

 }, [searchbar])
 
  

  function handleOnClick(e){
    setEdit(() => 0);
    setOpenProfile(() => 1);
    setCurrData(() => e);
    setAddControl(() => 0);
  }
// !searchbar?.length ? 
  return <> 
      {!searchbar?.length ? data.map(e => (<Box>
        <Typography ml={4} color='#3d547a'>{e.name}</Typography>
          {e.arr.map(e => (
            <Box p={1.5} pl={3.5} sx={{bgcolor:"white" , borderTop:"1px solid lightgray"}}>
            <Stack onClick={() => handleOnClick(e)} direction="row" sx={{cursor:"pointer"}}>
              <Avatar sx={{height:"50px", width:"50px" , marginTop:"4px" , bgcolor:"#a6bfd9" , color:"black" , fontSize:"16px"}} alt={e.name} src="/static/images/avatar/1.jpg"/>
              <Box ml={1} mt={1}>
                <Typography>{e.name}</Typography>
                <Typography color='#3d547a' fontSize={12}>{e.job}</Typography>
              </Box>
            </Stack>
          </Box>
          ))}
    </Box>)) :<> {temp2?.map(e => (<Box p={1.5} pl={3.5} sx={{bgcolor:"white" , borderTop:"1px solid lightgray"}}>
            <Stack onClick={() => handleOnClick(e)} direction="row" sx={{cursor:"pointer"}}>
            
              <Avatar sx={{height:"50px", width:"50px" , marginTop:"4px" , bgcolor:"#a6bfd9" , color:"black" , fontSize:"16px"}} alt={e.name} src="/static/images/avatar/1.jpg"/>
              <Box ml={1} mt={1}>
                <Typography>{e.name}</Typography>
                <Typography color='#3d547a' fontSize={12}>{e.job}</Typography>
              </Box>
            </Stack>
          </Box>))}</>}
</>
}
export default VendorsAndClients