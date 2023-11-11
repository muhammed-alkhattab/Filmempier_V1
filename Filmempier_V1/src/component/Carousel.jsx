/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Paper ,Card,CardActionArea,CardMedia,CardContent,Box,useMediaQuery,useTheme, Button} from "@mui/material";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Carousel1() {
  const [Movie, setMovie] = useState("movie");
  const{data} = useFetch(`/${Movie}/popular`);
  console.log("XXXXXXXXXXXXXX")
console.log(data);
  return (
    

    
     
    <Carousel autoPlay animation="slide" sx={{backgroundColor:'#0f0f0f',maxHeight:800, marginTop:'4rem'}}>
      {data?.results.map((item) => (
        
        <Item key={item.id} item={item} />
        
      ))}
       
    </Carousel>
   
  
    
    
   
    
  );
}

function Item({ item }) {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"))
  const text = item.overview;
  const sentences = React.useMemo(() => {
    return text.split('.').filter((s) => s.trim().length > 0).map((s) => s.trim() + '.');
  }, [text]);
  const obj = {id:item.id, title:item.title}
  const nav = useNavigate();
  
  const navigate = ()=>{
    nav(`/detail`,{state:{obj}});
  }
  return (
    
   <Paper sx={ !isMatch ? {display:'flex',maxWidth:'xl',backgroundColor:'#0f0f0f'} :{ display:'flex',flexDirection:'column' ,maxWidth:'md' ,backgroundColor:'#0f0f0f',paddingTop:'2rem'} } >
    
   {/*  <Card
     width={'700px'}
     height={'700px'}
     >
<CardActionArea >
  
  <CardMedia
    component="img"
    width={'3000px'}
    height={'300px'}
    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
    alt="green iguana"
    
  />
  <CardContent>
   
  </CardContent>
</CardActionArea>
  </Card>*/}
    <Box marginLeft={'1rem'} >
      <img width="300px" style={{borderRadius:'40px'}} height={'400px'} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
    </Box>
    <Box position={'relative'} marginLeft={'2rem'}>
      <Box display={'flex'} flexDirection={'column'}>
  <h1 style={{fontFamily:'fantasy',color:'white'}}>{item.title}</h1>
  <h2 style={{color:'gold'}}>{item.release_date}</h2>
  
    </Box>
  <Typography variant="h5" component="div" fontFamily={'monospace'} color={'white'}>
      {sentences}
    </Typography>
    <Button variant="contained" onClick={navigate} size="large" color="primary" sx={{marginTop:'1rem'}}>Watch</Button>
  </Box>
</Paper>

  );
}

