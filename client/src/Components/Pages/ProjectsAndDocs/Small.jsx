import { Box, Typography } from '@mui/material'
import { FcOpenedFolder } from "react-icons/fc";
import { BsPatchExclamationFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";
import { useEffect } from 'react';


const FolderAndFiles = ({temp , controls , setHome , selected , folderAndFiles , setFolderAndFiles}) => {

    useEffect(() => {
        const temp = selected.selectedData.filter((e) => {
          return e.type === "folder"
        })
        const temp2 = selected.selectedData.filter((e) => {
          return e.type === "file"
        })
        setFolderAndFiles((prev) => ({...prev , folders : temp , files : temp2}));
      }, [selected]);

    return (
        <Box m={3} mt={5}>
                    {controls !== "Mix" ? <>
                        <Typography>Folders</Typography>
                        <Box sx={{display:"flex"}}>
                        {temp.folders.map(e => <Folder e = {e} setHome={setHome} setFolderAndFiles={setFolderAndFiles} folderAndFiles={folderAndFiles}/>)}
                        </Box>
                        <Typography mt={5}>Files</Typography>
                        <Box sx={{display:"flex"}}>
                        {temp.files.map(e => <Files e = {e} setHome={setHome}/>)}
                        </Box>
                    </> : <Box display="flex" flexWrap="wrap">
                            {temp.selectedData.map(e => <>{e.type === "folder" ?  <Folder e = {e} setHome={setHome} setFolderAndFiles={setFolderAndFiles} folderAndFiles={folderAndFiles}/> : <Files e = {e} setHome={setHome}/>}</>)}
                        </Box>}
                      </Box>
    )
}


const Folder = ({e , setFolderAndFiles , setHome , folderAndFiles}) => {

    function handleOnClick(cat){
        const temp = folderAndFiles.path;
        temp.push(cat);
        setHome((prev) => ({...prev , key : cat}));
        setFolderAndFiles((prev) => ({...prev , path : temp}));
    }
    
    return <Box onClick={() => handleOnClick(e.name)} sx={{bgcolor:"#f1f5f9", height:"120px" , width:"130px" , borderRadius:"10px" , ml:1 , mt:2 , cursor:"pointer"}}>
    <Box>
        <BsPatchExclamationFill style={{paddingLeft:"105" , paddingTop:"10px"}}/>
    </Box>
  <FcOpenedFolder fontSize={40} style={{marginLeft:"47px"}}/>
    <Typography sx={{fontSize:"12px" , textAlign:"center"}}>{e.name}</Typography>
    <Typography fontSize={10} sx={{textAlign:"center"}}>57 Files</Typography>
</Box>
}

const Files = ({e , setHome}) =>{
    return<Box sx={{bgcolor:"#f1f5f9" , height:"120px" , width:"130px" , borderRadius:"10px" , ml:1 , mt:2}}>
    <Box><BsPatchExclamationFill style={{paddingLeft:"105" , paddingTop:"5px"}}/></Box>
    <FaFilePdf fontSize={40} style={{marginLeft:"47px" , color:"#263f59"}}/>
    <Typography sx={{fontSize:"12px" , mt:"4px" , textAlign:"center"}}>{e.name}</Typography>
    <Typography fontSize={10} sx={{textAlign:"center"}}>57 Files</Typography>
</Box>
}

export default FolderAndFiles