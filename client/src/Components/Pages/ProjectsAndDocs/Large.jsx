import { Box, Typography } from '@mui/material'
import { FcOpenedFolder } from "react-icons/fc";
import { BsPatchExclamationFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";
import { useEffect } from 'react';


const Large = ({temp ,  controls , setHome , selected , folderAndFiles , setFolderAndFiles}) => {
    
   
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
                    {temp?.selectedData?.map(e => <>{e.type === "folder" ?  <Folder e = {e} setHome={setHome} setFolderAndFiles={setFolderAndFiles} folderAndFiles={folderAndFiles}/> : <Files e = {e} setHome={setHome}/>}</>)}
                </Box>
            }
            
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
    
    return <Box onClick={() => handleOnClick(e.name)} sx={{bgcolor:"#f1f5f9", height:"200px" , width:"210px" , borderRadius:"10px" , ml:1 , mt:2 , cursor:"pointer"}}>
    <Box><BsPatchExclamationFill style={{paddingLeft:"185" , paddingTop:"10px"}}/></Box>

    <FcOpenedFolder fontSize={90} style={{marginLeft:"57px"}}/>
    <Typography style={{fontSize:"17px" , textAlign:"center"}}>{e.name}</Typography>
    <Typography sx={{textAlign:"center"}} fontSize={15}>57 Files</Typography>
</Box>
}

const Files = ({e , setHome}) =>{
    return<Box sx={{bgcolor:"#f1f5f9" ,height:"200px" , width:"210px" , borderRadius:"10px" , ml:1 , mt:2}}>
    <Box>
        <BsPatchExclamationFill style={{paddingLeft:"185" , paddingTop:"10px"}}/>
    </Box>
    <FaFilePdf fontSize={85} style={{marginLeft:"67px" , color:"#263f59"}}/>
    <Typography sx={{fontSize:"17px" , textAlign:"center" , mt:"15px"}}>{e.name}</Typography>
    <Typography fontSize={15} sx={{textAlign:"center"}}>57 Files</Typography>
</Box>
}

export default Large