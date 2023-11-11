
import * as React from "react";

import Box from "@mui/material/Box";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "./Item";
import Typography from "./Typography";
import useFetch from "../hooks/useFetch";
import { Stack,Pagination } from "@mui/material";
import Ucard from "./popular/Ucard";
export default function GridView() {
  
  
  const [page, setPage] = useState(1);
  const {data} = useFetch(`/movie/popular?page=${page}`);
  const movie_data = data?.results || [];
  const handleChange = (event, value) => {
    setPage(value);
  };
  

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{ flexGrow: 1 }} marginTop={"3rem"} minWidth={"80%"} >
     <Box>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ marginBottom: "3rem" }}
      >
        For all tastes and all desires
      </Typography>
      <Grid
        container
         
        
        columns={{ xs: 4, sm: 8, md: 8,lg:12 }}
        paddingBottom={'1rem'}
        paddingRight={'2rem'}
        paddingLeft={'2rem'}
        
      >
       {movie_data.map((item,i)=>{
        return (
          <Grid key={item.id}  xs={12} sm={6} md={4} padding={1}>
          <Ucard key={item.id} item={item}></Ucard>
          </Grid>
        )
       })}
      </Grid>
      
      </Box>
      <Box>
        <Stack spacing={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginBottom={'1rem'}>
      <Typography>Page: {page}</Typography>
      <Pagination style={{  backgroundColor:'white' ,borderRadius:'40px',padding:'5px 0'}}   count={10} page={page} defaultPage={1} color="primary" onChange={handleChange} size="large"/>
      
    </Stack>
    </Box>
    </Box>
  );
}


