
import * as React from "react";

import Box from "@mui/material/Box";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import useFetch from "../../hooks/useFetch";
import Typography from "../Typography";
import { useLocation } from "react-router-dom";
import Ucard from "../popular/Ucard";

export default function Serchresult() {
const location = useLocation();

const title = location.state && location.state.title;
    const {data} = useFetch(`/search/movie?query=${title}&include_adult=false&language=en-US&primary_release_year=2023&page=1`);
    const results = data?.results || [];
  console.log(results);
  

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
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        paddingBottom={'1rem'}
        paddingRight={'1rem'}
        paddingLeft={'1rem'}
      >
       {results.length !== 0 ? (
      results.map((item, i) => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Ucard key={item.id} item={item} />
        </Grid>
      ))
    ) : (
      <h1 style={{ color: 'white' }}>Sorry, the movie was not found!</h1>
    )}
  </Grid>

      
      </Box>
    
    </Box>
  );
}


