import React from 'react'
import { Box } from '@mui/material'
import ProductItem from '../component/ProductItem'
import { useState,useEffect } from 'react'
import axios from 'axios'
const contentArrays = [ {title :'get Thing Done',
description:'Lighwith but powerful source code editeor runs on your dektop',
img :'/1.jpg',
},
{title :'Prdouctivity is Briliant',
description:'Lighwith but powerful source code editeor runs on your dektop',
img :'/2.jpg',
},
{title :'Fast Development',
description:'Lighwith but powerful source code editeor runs on your dektop',
img:'/3.jpg',
},
]

function ProductDetails() {
  const [Movie, setMovie] = useState([]);
  //called api usig axios
  useEffect(() => {
    const Company = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        params: { all: "true" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjUxNWU4YTFiZjlhM2EwYTk4NmRkMDZkMjM5YmExMiIsInN1YiI6IjY0N2YyNWNiY2Y0YjhiMDBlMmQ3NTI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lQTOBNBAanPkX0EB_PTff8J_MZZXJ12NO3x6chxbKuU",
        },
      };

      try {
        const response = await axios.request(options);
        setMovie(response.data.results);
        
      } catch (error) {
        console.error(error);
      }
    };
    Company();
  }, []);
  return (
    <Box  display='flex' justifyContent='cenet'
    flexDirection='column'
    width='100%'
    height='10%'
    bgcolor='light'
        
    >
      {contentArrays.map((cont,index)=>(<ProductItem title={cont.title} description = {cont.description} img={cont.img} key={index} swap={index%2 === 0} />))}
    </Box>
  )
}

export default ProductDetails
