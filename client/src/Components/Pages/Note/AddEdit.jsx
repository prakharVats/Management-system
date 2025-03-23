// http://localhost:3000
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { IoArchiveOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import axios from 'axios';

const AddEdit = ({setMasonry , currentData , createUpdate , setCurrentData , showTags}) => {
    const [temp , setTemp] = useState(0)
    const [addTask , setAddTask] = useState(0)
    const [taskHover , setTaskHover] = useState()
    const [clickTags , setClickTags] = useState(0);

    const handleReq = async(action) => {
        if(action === "Update"){
            try {
                // https://management-system-jwp8.onrender.com
                alert("Item updated! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/notes/updateNotes', {
                    id : `${currentData._id}`,
                    title : `${currentData.title}`,
                    description : `${currentData.description}`,
                    tasks : currentData.tasks,
                    tags : currentData.tags,
                    archive : currentData.archive
                });
                
              } catch (error) {
                console.error('Error:', error);
              }
        }else if(action === "Create"){
            try {
                alert("Item Created! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/notes/postAddNotes', {
                    title : `${currentData.title}`,
                    description : `${currentData.description}`,
                    tasks : currentData.tasks,
                    tags : currentData.tags,
                    archive : currentData.archive
                });
              } catch (error) {
                console.error('Error:', error);
              }
        }else if(action === "Delete"){
            
            try {
                alert("Item Deleted! Reload page");
                const response = await axios.post('https://management-system-jwp8.onrender.com/notes/deleteNotes', {
                   id: currentData._id
                });
            
                // window.location.reload(() => { console.log("refreshed"); });
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    function handleChange(e , field){
        if(field === "tasks"){
            setTemp(() => e);
            return 0;
        }
        setCurrentData((prev => ({...prev , [field] : e})));
    }

    // done button
    function handleDone(){
        if(temp){
            setCurrentData(prev => ({...prev , tasks : [...currentData.tasks , {status : 1 , text : temp}]}));
            setTemp(() => 0);
        }
        setAddTask(() => 0);
    }

    function handleTags(e){
        setCurrentData(prev => ({...prev , tags: currentData.tags.filter(tag => tag !== `${e}`)}));
        setClickTags(() => 0);
    }
    function AddTags(e){
        setCurrentData(prev => ({...prev , tags: [...currentData.tags , e]}))
        setClickTags(() => 0);
    }

    function handleOnClick(){
        setMasonry(0)
    }
    function handleTaskHover(e){
        setTaskHover(e);
    }
    function handleAddTask(){
        setAddTask(!addTask);
    }

    function toggleTaskStatus(index1 , a){
        setCurrentData((prev) => ({...prev , tasks : currentData.tasks.map((item, index) => index === index1 ? { ...item, status: a } : item)}))
    }

    function removeTask(e){
        setCurrentData((prev) => ({...prev , tasks: prev.tasks.filter((item) => item.text !== e.text)}))
    }

    function Archive(){
        setCurrentData((prev) => ({...prev , archive : true}));
    }

  return (
    <Box onClick={handleOnClick} bgcolor="black" sx={{position:"absolute" , top:"0px" , height:"100vh" , width:"81.6%" , zIndex:10 ,  bgcolor: "rgba(0, 0, 0, 0.2)" , alignContent:"center" , justifyItems:"center" , cursor:"pointer"}}>
        <Box onClick={(event) => event.stopPropagation()} sx={{bgcolor:"white" , minHeight:"200px", width:"600px" , borderRadius:"15px" , p:2 , cursor:"default"}}>
            <input onChange={(e) => handleChange(e.target.value , "title")} value={currentData.title ? currentData.title : ""} placeholder='Title' style={{border:"none"  , fontSize:25 , outline:"none" , marginTop:"20px" , marginLeft:"10px" , color:'#26415a' , width:"90%"}}/>
            <br/>
            
            <input onChange={(e) => handleChange(e.target.value , "description")} value={currentData.description ? currentData.description : ""} placeholder='Note' style={{border:"none"  , fontSize:20 , outline:"none" , marginTop:"30px" , marginLeft:"10px" , color:'#26415a' , width:"90%"}}/>

            {/* tasks */}
            {currentData ? <Box sx={{mt:"20px"}}>
                {currentData.tasks.map((e , index) => <Stack onMouseEnter={() => handleTaskHover(index)} onMouseLeave = {() => handleTaskHover(false)} direction="row" sx={{ pt:"10px" , ml:"10px" , cursor:"pointer" , alignItems:"center"}}>
                    {e.status ? <MdRadioButtonUnchecked onClick={() => toggleTaskStatus( index , 0)} style={{color:"#94a3b8"  , fontSize:"16px"}}/> : <FaCircleCheck onClick={() => toggleTaskStatus( index , 1)} style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/>}

                    <Typography ml={0.7} fontSize={15} color='#26415a'>{e.text}</Typography>
                    {taskHover === index ? <AiOutlineClose onClick={() => removeTask(e)} style={{marginLeft:"auto" , marginRight:"50px"}}/> : ""}
                </Stack>)}
            </Box> : ""}

            {/* add task */}
            {addTask ? <Stack direction="row" mt={5} ml="10px" >
                <FaPlus style={{color : "#26415a"}}/>
                <input onChange={(e) => handleChange(e.target.value , "tasks")} placeholder='Add task' style={{border:"none"  , fontSize:15 , outline:"none" , marginLeft:"10px" , color:'#26415a' , width:"86%"}}/>
                <Typography onClick={() => handleDone()} fontSize={12} sx={{backgroundColor:"white" , borderRadius:"3px" , cursor:"pointer" , pl:"5px" , pr:"5px" , "&:hover" : {
                    bgcolor:"#2f4884",
                    color:"white"
                }}}>Done</Typography>
            </Stack> : ""}

            {/* tags */}
            {currentData ? <Stack direction="row" sx={{flexWrap: "wrap" , mt:"80px"}}>
              {currentData.tags.map((e , index) =><Typography fontSize={12} sx={{borderRadius:"15px" , bgcolor:"#dbe6f0" , color:"#26415a" , p:0.5 , pl:1.2 , pr:1.2  , mt:"20px" , ml:"8px"}}>{e}<IoCloseCircleSharp onClick={() => handleTags(e)} style={{fontSize:"15px" , marginLeft:"2px" , position:"relative" , top:"3px" , cursor:"pointer"}}/></Typography>)}
            </Stack> : ""}

                {/* list of tags */}
            {clickTags ? <Box sx={{bgcolor:"white" , p:1 , width:"150px" , position:"absolute" , left:"360px" , bottom:"260px" , boxShadow: "4px 4px 10px 2px rgba(0,0,0,0.3)"}}>
                {showTags[0].archive.map(e => <Stack onClick={currentData.tags.includes(e) ? () => handleTags(e) : () => AddTags(e)} spacing={2} p={1} pl={2} pr={2} mt={1.5} direction="row" alignItems="center" sx={{"&:hover" : {bgcolor:"#e8edf7"} , cursor:"pointer"}}>{currentData.tags.includes(e) ? <IoIosCheckbox style={{height:"20px" , width:"20px"}}/> :<MdOutlineCheckBoxOutlineBlank style={{height:"20px" , width:"20px"}}/>}<Typography fontSize={17}>{e}</Typography></Stack>)}
            </Box> : ""}


            <Stack direction = "row" sx={{mt:`${currentData ? "20px" : "80px"}` , ml:"10px"}}>
                
                {/* add task */}
                <Box onClick = {handleAddTask} sx={{cursor:"pointer" , height:"30px" , width:"30px" , "&:hover" : {fontSize:"30px"} , fontSize:"25px"}}>
                    <MdFormatListBulletedAdd style={{color:"#26415a"}}/>
                </Box>

                {/* tags */}
                <Box sx={{ width:"30px" , cursor:"pointer" , height:"30px" , "&:hover" : {fontSize:"30px"} , fontSize:"26px" , mt:"2px" , ml:"15px"}}>
                    <BsTag onClick={() => setClickTags(!clickTags)} style={{color:"#26415a"}}/>
                </Box>

                {/* <Box sx={{ width:"30px" , cursor:"pointer" , height:"30px" , "&:hover" : {fontSize:"30px"} , fontSize:"25px" , mt:"2px" , ml:"15px"}}>
                    <IoArchiveOutline onClick={Archive} style = {{color:"#26415a"}}/>
                </Box> */}

                <Box sx={{ width:"30px" , cursor:"pointer" , height:"30px" , "&:hover" : {fontSize:"30px"} , fontSize:"25px" , mt:"2px" , ml:"15px"}}>
                    <MdDeleteOutline onClick = {() => handleReq("Delete")} style={{color:"#26415a"}}/>
                </Box>
                <Button onClick={() => handleReq(createUpdate)} sx={{textTransform:"none" , ml:"auto" , color:"#26415a" , borderRadius:"15px"}}>{createUpdate}</Button>

                <Button onClick={handleOnClick} sx={{textTransform:"none" , ml:"10px" , color:"#26415a" , borderRadius:"15px"}}>Close</Button>
            </Stack>
        </Box>
    </Box>
  )
}

export default AddEdit