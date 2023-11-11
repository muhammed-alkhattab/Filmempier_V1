import React from "react"
import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import { useState } from "react"
const Ucard = ({ item: {  id,original_title, backdrop_path, release_date } }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
        <Box className='MovieBox' onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
        <Box className='img' >
          <img  className={`${showOverlay ? 'card' : ''}`} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt='' />
          {showOverlay &&
           <Box className='text'>
           <h3>{original_title}</h3>
           <span>{release_date}</span> <br />
           {/*<Link to={`/singlepage/${id}`}>*/}
           <button className='primary-btn'>
             <i className='fa fa-play'></i> PLAY NOW
           </button>
           {/*</Link>*/}
         
         </Box>}
        </Box>
        
       

      </Box>
    </>
  )
}

export default Ucard