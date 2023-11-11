import React from 'react'
import {Box,Button} from '@mui/material'
import Typography from "../../component/Typography";
import Carousel1 from '../../component/Carousel';
 export const Hero = () => {
  return (
    <Box width="100%" height="auto" justifyContent={'center'} display={'flex'} flexDirection={'column'}  >
      <Box width='100%' justifyContent={'center'} margin={'auto'} height={'auto'}>
      <Carousel1/>
      </Box>
       
      </Box>
  )
}


