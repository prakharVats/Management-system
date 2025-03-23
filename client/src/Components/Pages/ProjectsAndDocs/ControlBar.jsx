import { Stack, Typography } from '@mui/material'
import { IoMdArrowDropdown } from "react-icons/io"
import { MdOutlineMenu } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropDown from "./DropDown"
import DropDown2 from "./DropDown2"
import { useState } from 'react';
import { useEffect } from 'react';


const ControlBar = ({setSearchbar , controls , setControls , setViews , folderAndFiles , setFolderAndFiles}) => {

  useEffect(() => {
    
    if(controls === "Ascending"){
      const sortedData = folderAndFiles.folders.sort((a, b) => a.name.localeCompare(b.name));
      const sortedData2 = folderAndFiles.files.sort((a, b) => a.name.localeCompare(b.name));
      setFolderAndFiles((prev) => ({...prev , folders : sortedData , files : sortedData2}));

    }else if(controls === "Descending"){
      const sortedDataDescending = folderAndFiles.folders.sort((a, b) => b.name.localeCompare(a.name));
      const sortedDataDescending2 = folderAndFiles.files.sort((a, b) => b.name.localeCompare(a.name));
      setFolderAndFiles((prev) => ({...prev , folders : sortedDataDescending , files : sortedDataDescending2}))
    }
  
    return () => {
      
    }
  }, [controls])
  
  function handleOnChange(e){
    setSearchbar(() => e)
  }

  return (
    <Stack spacing={2} direction="row" mt={4}  borderTop="1px solid lightgray" height={45}>
              <DropDown setControls={setControls} icon = {1} text="New" ML = {2} arr={["File" , "Folder"]}/>

              <DropDown setControls = {setControls} icon = {2} text="Sort" ML = {-2} arr={["Mix" , "Ascending" , "Descending" ]}/>

              <DropDown setControls = {setViews} icon = {3} text="View" ML = {-2} arr={["Large icons" , "Medium-sized icons" , "Small icons" , "List" ]}/>

              <DropDown2 setControls={setControls} arr={["Select all" , "Select none" , "Select multiple"]} text="..."/>

            <Stack direction="row" style={{ marginLeft:"auto" , borderLeft:"1px solid lightgray"}}>
              <FaMagnifyingGlass style={{position : "relative" , left:"23px" , top:"15px", zIndex:"1"}}/>
              <input onChange={(e) => handleOnChange(e.target.value)} placeholder='search...' style={{  marginTop:"1px" , padding:"5px" , paddingLeft:"40px" , width:"300px" , border:"none" , outline:"none" , fontSize:"16px"}}/>
            </Stack>
    </Stack>
  )
}

export default ControlBar