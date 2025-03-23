import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FcOpenedFolder } from "react-icons/fc";
import { FaFilePdf } from "react-icons/fa6";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "28-1-2025 10:52", 6.0),
  createData('Ice cream sandwich', "28-1-2025 10:52", 9.0),
  createData('Eclair', "28-1-2025 10:52", 16.0),
  createData('Cupcake', "28-1-2025 10:52", 3.7),
  createData('Gingerbread', "28-1-2025 10:52", 16.0),
];

export default function DenseTable({temp , controls , setHome , selected , folderAndFiles , setFolderAndFiles}) {

  function handleOnClick(cat){
    const temp = folderAndFiles.path;
    temp.push(cat);
    setHome((prev) => ({...prev , key : cat}));
    setFolderAndFiles((prev) => ({...prev , path : temp}));
}

   React.useEffect(() => {
          const temp = selected.selectedData.filter((e) => {
            return e.type === "folder"
          })
          const temp2 = selected.selectedData.filter((e) => {
            return e.type === "file"
          })
          setFolderAndFiles((prev) => ({...prev , folders : temp , files : temp2}));
        }, [selected]);


  return (
    <TableContainer component={Paper} style={{border:"none" , boxShadow:"none"}}>
      <Table sx={{ minWidth: 650 , border:"none"}} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="left">Date modified</TableCell>
            <TableCell align="left">Type</TableCell>
          </TableRow>
        </TableHead>


        { controls !=="Mix" ? <TableBody >
          {temp.folders.map((row) => (
            <TableRow
            onClick={() => handleOnClick(row.name)}
              key={row.name}
              sx={{ cursor : "pointer" , "&:hover": { backgroundColor: "#f5f5f5" },}}
            >
              <TableCell component="th" scope="row" sx={{border:"none"}}>
                <FcOpenedFolder/> {row.name}
              </TableCell>
              <TableCell align="left" sx={{border:"none"}}>12-07-2025 11:00</TableCell>
              <TableCell align="left" sx={{border:"none"}}>{row.type}</TableCell>
            </TableRow>
          ))}

          {temp.files.map((row) => (
            <TableRow
              key={row.name}
              sx={{cursor:"pointer" , "&:hover": { backgroundColor: "#f5f5f5" },}}
            >
              <TableCell component="th" scope="row" sx={{border:"none"}}>
              <FaFilePdf style={{color:"#263f59"}}/> {row.name}
              </TableCell>
              <TableCell align="left" sx={{border:"none"}}>12-07-2025 11:00</TableCell>
              <TableCell align="left" sx={{border:"none"}}>{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody> : <TableBody>
          
        {temp.selectedData.map((row) => (
            <TableRow
              onClick={row.type === "folder" ? () => handleOnClick(row.name) : undefined}
              key={row.name}
              sx={{cursor:"pointer" , "&:hover": { backgroundColor: "#f5f5f5" }}}>
              <TableCell component="th" scope="row" sx={{border:"none"}}>
              {row.type === "file" ? <FaFilePdf style={{color:"#263f59"}}/> : <FcOpenedFolder/>} {row.name}
              </TableCell>
              <TableCell align="left" sx={{border:"none"}}>12-07-2025 11:00</TableCell>
              <TableCell align="left" sx={{border:"none"}}>{row.type}</TableCell>
            </TableRow>
          ))}


        </TableBody>}




      </Table>
    </TableContainer>
  );
}
