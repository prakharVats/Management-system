import { Box, Stack, Typography } from '@mui/material';
import ControlBar from './ControlBar';
import FolderAndFiles from './FolderAndFiles';
import { useEffect, useState } from 'react';
import { RxSlash } from "react-icons/rx";
import NewFileFolder from './NEW';
import Large from './Large';
import Small from "./Small";
import List from "./List";
import axios from "axios";



const Projects = () => {
  const [Home , setHome] = useState({
    key : "Home",
    data : [{
      "name" : "",
      "belongs" : "",
      "type" : ""
    }],
  });
  const [controls , setControls] = useState("");
  const [views , setViews] = useState("List");
  const [searchbar , setSearchbar] = useState("");
  

  const [selected , setSelected] = useState({
    selectedData : []
  });

  const [temp , setTemp] = useState({
    folders : [],
    files : [],
    selectedData : []
  });
  const [folderAndFiles , setFolderAndFiles] = useState({
    folders : [],
    files : [],
    path : ["Home"]
  })

  useEffect(() => {
    axios.get("https://management-system-jwp8.onrender.com/project/getProject")
      .then((response) => {
        setHome((prev) => ({...prev , data : response.data})); // Ensures re-render
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
 

  useEffect(() => {
    const temp = Home.data.filter((e) => {
      return e.belongs === Home.key;
    })
    setSelected((prev) => ({...prev , selectedData : [...temp]}));
  }, [Home])




  function HandlePath(e){
    let start = 0;
    let times;
    let tempArr = folderAndFiles.path;
    for(let i = 0 ; i < folderAndFiles.path.length ; i++){
        if(folderAndFiles.path[i] === e){
          start = i;
          break;
        }
    }
    times = folderAndFiles.path.length - 1 - start;
    for(let i = 0; i < times; i++)
    {
      tempArr.pop();
    }
    setFolderAndFiles((prev) => ({...prev , path : tempArr}));
    setHome((prev) => ({...prev , key : e}));
  }

  useEffect(() => {
    setTemp(() => folderAndFiles);
    if(searchbar?.length > 0){
      let x = folderAndFiles.files.filter(e => {
        if(e.name.toLowerCase().includes(searchbar.toLowerCase())){
          return e;
        }
      })
      setTemp((prev) => ({...prev , files : x}));

      let y = folderAndFiles.folders.filter(e => {
        if(e.name.toLowerCase().includes(searchbar.toLowerCase())){
          return e;
        }
      })
      setTemp((prev) => ({...prev , folders : y}));

      let z = selected.selectedData.filter(e => {
        if(e.name.toLowerCase().includes(searchbar.toLowerCase())){
          return e;
        }
      })
      setTemp((prev) => ({...prev , selectedData : z}));

    }else {
      setTemp(() => ({folders : folderAndFiles.folders , files : folderAndFiles.files ,selectedData : selected.selectedData}));
    }

  }, [searchbar , folderAndFiles , selected]);

  return (
   <Box bgcolor="white">
    <Box bgcolor="white" overflow="auto" sx={{scrollbarWidth: "none"}}>
        <Box  sx={{borderBottom:"1px solid lightgray"}}>
          <Box mt={3} ml={3}>
            <Typography variant='h5'>Projects and Documents</Typography>
            {folderAndFiles.path[1] ? <Stack direction="row"> 
              {folderAndFiles.path.map((e) => <>
              <Typography onClick={() => HandlePath(e)} color='#3d547a' sx={{ "&:hover" : {textDecoration:"underline" , cursor:"pointer"}}}>{e}</Typography>
              <RxSlash style={{marginTop:"5px", color:'#3d547a'}}/>
              </>)}
            </Stack> : <Typography color='#3d547a'>3 folders, 13 files</Typography>}
          </Box>

          {/* control bar */}
          <ControlBar setSearchbar = {setSearchbar} folderAndFiles={folderAndFiles} setFolderAndFiles={setFolderAndFiles} setViews={setViews} setControls={setControls} controls={controls}/>
        </Box>   
      </Box>

      {/* folders and file */}
      {views === "Medium-sized icons" ?<FolderAndFiles temp = {temp} controls = {controls} Home = {Home} setHome = {setHome} selected = {selected} folderAndFiles={folderAndFiles} setFolderAndFiles={setFolderAndFiles}/> : ""}
      {views === "Large icons" ? <Large temp = {temp} controls = {controls} Home = {Home} setHome = {setHome} selected = {selected} folderAndFiles={folderAndFiles} setFolderAndFiles={setFolderAndFiles}/> : ""}
      {views === "Small icons" ? <Small temp={temp} controls = {controls} Home = {Home} setHome = {setHome} selected = {selected} folderAndFiles={folderAndFiles} setFolderAndFiles={setFolderAndFiles}/> : ""}
      {views === "List" ? <List temp = {temp} controls = {controls} Home = {Home} setHome = {setHome} selected = {selected} folderAndFiles={folderAndFiles} setFolderAndFiles={setFolderAndFiles}/> : ""}


      {controls === "File" ? <NewFileFolder Home={Home} controls = {controls} setControls={setControls} type = "File"/> : ""} 
      {controls === "Folder" ? <NewFileFolder Home={Home} controls = {controls} setControls={setControls} type = "Folder"/> : ""}
   </Box>
  )
}

export default Projects;