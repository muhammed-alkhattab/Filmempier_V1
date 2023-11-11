import React from "react"
import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Rating from '@mui/material/Rating';

const Ucard = ({ item: { id, title, poster_path, release_date,vote_average } }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const obj = {id:id, title:title}
  const nav = useNavigate();
  
  const navigate = ()=>{
    nav(`/detail`,{state:{obj}});
  }
  const getLabelForValue = (value) => {
    if (value >= 1 && value <= 4) {
      return 'Good';
    } else if (value >= 5 && value <= 7) {
      return 'Very Good';
     
  } 
  else if (value >= 7 && value <= 9) {
    return ' Amaxing';
   
} 
  
  else return 'piece of art';}
  const getValue = (value) => {
    if (value >= 1 && value <= 3) {
      return 2;
    }  
    if (value >= 3 && value <= 6) {
      return 3;
    }
    if (value >= 6 && value <= 8) {
      return 3;
    }  
     
    if (value >= 8 && value <= 9) {
      return 4;
    }  
    
    if (value > 9) {
      return 5;
  }}
  return (
    <>
        <Box className='MovieBox' onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
        <Box className='img' >
          <img  className={`${showOverlay ? 'card' : ''}`} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' onClick={navigate} />
          {showOverlay &&
           <Box className='text'>
           <Box sx={{fontSize:{
            sm:12,
            lg:20,
            md:20,
           }}}>{title}</Box>
           <span>{release_date}</span> <br />
           {/*<Link to={`/singlepage/${id}`}>*/}
           <button className='primary-btn' onClick={navigate}>
             <i className='fa fa-play'></i> PLAY NOW
           </button>
           
           {/*</Link>*/} <Box paddingTop={'1rem'}>
           <Rating name="read-only" value={getValue(vote_average)} readOnly >  </Rating>
           </Box>
           <Box sx={{ ml: 2 }}>{getLabelForValue(getValue(vote_average))} </Box>
         </Box>}
        </Box>
        
       

      </Box>
    </>
  )
}

export default Ucard