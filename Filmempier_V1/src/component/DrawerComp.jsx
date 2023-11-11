import React, { useState } from 'react'
import {Drawer,ListItemButton,ListItemText,List,IconButton} from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useNavigate } from 'react-router-dom';
const DrawerComp = () => {
    const links = ["Movies", "category", "About"];
    const [open,setopen] = useState(false);
    const nav = useNavigate();
    const navto = (link)=>{
      nav(`/${link}`);
    }
  return (
    <>
    <Drawer open={open} onClose={()=> setopen(false)}>
        <List>
      {links.map((link,i)=>
      <ListItemButton key={i} >
      <ListItemText onClick={()=>navto(link)}>{link}</ListItemText>
      </ListItemButton>
      )};
      </List>
    </Drawer>
    <IconButton onClick={()=> setopen(true)} size='large' sx={{marginRight:'auto'}}>
        <MenuOutlinedIcon color='primary'/> 
    </IconButton>
    </>
  )
}

export default DrawerComp
