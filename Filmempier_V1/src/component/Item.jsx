import * as React from "react";

import Box from "@mui/material/Box";


import { Card, CardActionArea, CardMedia, CardContent ,Skeleton} from "@mui/material";

import useFetch from "../hooks/useFetch";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
 export default function Item({item :{id , backdrop_path,title , release_date}}) {
    
   const {data} = useFetch(`/movie/${id} `);
   const gener = data?.genres || [];
   const obj = {id:id, title:title}
   const nav = useNavigate();
   
   const navigate = ()=>{
     nav(`/detail`,{state:{obj}});
   }
   return (
     <Card onClick={navigate} sx={{minHeight:'420px'}}>
     <CardActionArea>
      {(backdrop_path) ? <CardMedia
         component="img"
         image={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
         height={'70%'}
         
       /> : <Skeleton animation="wave"  height={270}/> }
      
       <CardContent sx={{height:'30%'}}>
         <Box>
           <h1 style={{ fontFamily: "fantasy" ,fontSize:20}}>{title}</h1>
           <h2 style={{ color: "gold" }}>{release_date}</h2>
           <Stack direction="row" spacing={1} justifyContent={'flex-start'} paddingTop={'5px'}>
             { gener?.slice(0,5).map((gener, i) =>{
               return(
                 <Chip key={gener.id} variant="outlined" label={gener.name}/>
               )  
             })}
           </Stack>
         </Box>
       </CardContent>
     </CardActionArea>
   </Card>
   );
 }