import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Card from "./Card"
import {Stack, Typography } from '@mui/material';
import { FaCircleCheck } from "react-icons/fa6";
import { MdRadioButtonUnchecked } from "react-icons/md";
import AddEdit from './AddEdit';
import { useEffect } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  borderRadius:"15px"
}));



export default function BasicMasonry({searchbar , barData , data , setCurrentData , setMasonry , setCreateUpdate}) {
  const [temp , setTemp] = React.useState();

  useEffect(() => {
    if(temp){

      if(barData === "Notes" && searchbar?.length > 0){
          let x = data.filter(item => item.title.toLowerCase().includes(searchbar.toLowerCase()))
          setTemp(() => x);
      }else if(barData !== "Notes" && searchbar?.length > 0){
        let x = data.filter(item => item.tags.includes(barData)).filter(item => item.title.toLowerCase().includes(searchbar.toLowerCase()));
        setTemp(() => x);

      }else if(barData !== "Notes" ) {
        let x = data.filter(item => item.tags.includes(barData));
        setTemp(() => x);
      }else if(barData === "Notes" && searchbar?.length == 0){
        setTemp(() => data);
      }else{
        setTemp(() => data);
      }
  }else{
    setTemp(()=> [])
  }
  }, [barData , searchbar , data])
  

  function handleOnClick(e){
    setMasonry(1)
    setCurrentData(() => e);
    setCreateUpdate(() => "Update")
  }

  return (
    <Box sx={{minHeight: 393 , mt:"20px" , pr:"15px" }}>
      <Masonry columns={5} spacing={2}>
    {barData !== "Notes" ?<>
    {/* data.filter(item => item.tags.includes(barData)) */}
      {temp?.map((e , index) => (
          <Item key={index} onClick={() => handleOnClick(e)} sx={{p:2  , pl:3, pt:3 , cursor:"pointer"}}>
          <Typography textAlign="left" color='black' fontSize={15} fontWeight={550}>{e.title}</Typography>
          <Typography textAlign="left" color='#26415a'>{e.description}</Typography>

          {e.tasks.map(e => <Stack direction="row" sx={{ pt:"10px"}} >
            {e.status ? <MdRadioButtonUnchecked style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/> : <FaCircleCheck style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/>}
            <Typography ml={0.7} fontSize={15} color='#26415a' textAlign="left" sx={{ width:"115px"}}>{e.text}</Typography>
          </Stack>)}

          <Stack direction="row" sx={{flexWrap: "wrap"}}>
            {e.tags.map((e , index) => <Typography fontSize={12} sx={{borderRadius:"15px" , bgcolor:"#dbe6f0" , color:"#26415a" , p:0.5 , pl:1.2 , pr:1.2  , mt:`${index > 1 ? "10px" : "20px"}` , ml:`${index === 0 ? "" : "2px"}`}}>{e}</Typography>)}
          </Stack>
        </Item>
      ))}
    </> : <>
    {temp?.map((e , index) => (
          <Item key={index} onClick={() => handleOnClick(e)} sx={{p:2  , pl:3, pt:3 , cursor:"pointer"}}>
            <Typography textAlign="left" color='black' fontSize={15} fontWeight={550}>{e.title}</Typography>
            <Typography textAlign="left" color='#26415a'>{e.description}</Typography>

            {e.tasks.map(e => <Stack direction="row" sx={{ pt:"10px"}}>
              {e.status ? <MdRadioButtonUnchecked style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/> : <FaCircleCheck style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/>}
              <Typography ml={0.7} fontSize={15} color='#26415a' textAlign="left" sx={{ width:"115px" }}>{e.text}</Typography>
            </Stack>)}

            <Stack direction="row" sx={{flexWrap: "wrap"}}>
              {e.tags.map((e , index) => <Typography fontSize={12} sx={{borderRadius:"15px" , bgcolor:"#dbe6f0" , color:"#26415a" , p:0.5 , pl:1.2 , pr:1.2  , mt:`${index > 1 ? "10px" : "20px"}` , ml:`${index === 0 ? "" : "2px"}`}}>{e}</Typography>)}
            </Stack>
          </Item>
        ))}
    </>}

        {/* {data.map((e , index) => (
          <Item key={index} onClick={() => handleOnClick(e)} sx={{p:2  , pl:3, pt:3 , cursor:"pointer"}}>
            <Typography textAlign="left" color='black' fontSize={15} fontWeight={550}>{e.title}</Typography>
            <Typography textAlign="left" color='#26415a'>{e.description}</Typography>

            {e.tasks.map(e => <Stack direction="row" sx={{ pt:"10px"}}>
              {e.status ? <MdRadioButtonUnchecked style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/> : <FaCircleCheck style={{color:"#94a3b8" , marginTop : "2.5px" , fontSize:"16px"}}/>}
              <Typography ml={0.7} fontSize={15} color='#26415a'>{e.text}</Typography>
            </Stack>)}

            <Stack direction="row" sx={{flexWrap: "wrap"}}>
              {e.tags.map((e , index) => <Typography fontSize={12} sx={{borderRadius:"15px" , bgcolor:"#dbe6f0" , color:"#26415a" , p:0.5 , pl:1.2 , pr:1.2  , mt:`${index > 1 ? "10px" : "20px"}` , ml:`${index === 0 ? "" : "2px"}`}}>{e}</Typography>)}
            </Stack>
          </Item>
        ))} */}
      </Masonry>
    </Box>
  );
}
