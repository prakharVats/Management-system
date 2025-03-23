import Grid from '@mui/material/Grid2';
import SideBar from './SideBar';
import RightMasonry from "./RightMasonry"
import Search from "./Search"
import AddIcon from '@mui/icons-material/Add';
import { Button, Stack } from '@mui/material';
import AddEdit from './AddEdit';
import { useEffect, useState } from 'react';
import axios from "axios"

const Notes = () => {

  const [data , setData] = useState([{
    _id : "",
    title : "",
    description : "",
    tasks : [],
    tags : [],
    archive : false}]);

  const [createUpdate , setCreateUpdate] = useState({
    _id : "",
    title : "",
    description : "",
    tasks : [],
    tags : [],
    archive : false});

  const [currentData , setCurrentData] = useState(false);
  const [masonry , setMasonry] = useState(0);
  const [showTags , setShowTags] = useState();
  const [barData , setBarData] = useState("Notes");
  const [temp , setTemp] = useState();

  // fetching data
  useEffect(() => {
    axios.get("http://localhost:3000/notes/getNotes")
      .then((response) => {
        setData(() => response.data);
        setTemp(() => response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // fetching archives
  useEffect(() => {
    axios.get("http://localhost:3000/notes/getArchives")
      .then((response) => {
        setShowTags(response.data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

 
  function handleAddNotes(){
    setMasonry(() => 1);
    setCurrentData(() => ({
      _id : "",
      title : "",
      description : "",
      tasks : [],
      tags : [],
      archive : false}));
    setCreateUpdate(() => "Create")
  }

  const [searchbar , setSearchbar] = useState();
 
  return (
    <>
      <Grid container sx={{bgcolor: "#f1f5f9" , height:"91.6vh"}}>
          <Grid size={2.5} >
              <SideBar barData = {barData}  setBarData = {setBarData}/>
          </Grid>
          <Grid size={9.5} pt={4}>
              <Stack direction="row">
                <Search setSearchbar = {setSearchbar}/>
                {/* 2f4884 */}
                <Button onClick={handleAddNotes} variant="contained" sx={{borderRadius:"20px" , bgcolor:"#2f4884" , ml:"15px"}}><AddIcon/> New Note</Button>
              </Stack>
              {data.length > 0 ? <RightMasonry setTemp={setTemp} temp={temp} searchbar={searchbar} barData={barData} setCreateUpdate={setCreateUpdate} data={data} setCurrentData={setCurrentData} setMasonry={setMasonry}/> : "Loading..."}
          </Grid>
      </Grid>
      {masonry && showTags ? <AddEdit showTags={showTags} setCurrentData={setCurrentData} createUpdate={createUpdate} currentData={currentData} setMasonry = {setMasonry}/> : ""}
    </>
  )
}

export default Notes