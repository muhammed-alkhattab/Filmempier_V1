import React from "react";
import { Tabs, Tab, Toolbar, Box, Button ,useMediaQuery,useTheme} from "@mui/material";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import { NavLink ,Link} from "react-router-dom";
import bg from '../assets/tmovie.png'
import SearchAppBar from "./SearchField";
const links = ["Movies", "category", "About"];
function Header() {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"))
 
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "0" , position:'sticky' }}>
   {  isMatch ? <Box display={'flex'} justifyContent={'center'}>
    <DrawerComp/>
    <SearchAppBar />
   </Box> : <Toolbar>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        > 
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Link to="/">
          <Box>
            <img src={bg} width={'50px'} style={{marginRight:'10px'}} />
          </Box>
          </Link>
          <Box>
            <Tabs component="nav" sx={{ textDecoration: "none" }} value={false}>
              {links.map((link, index) => (
               
                <Tab
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color:'white',
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "5px",
                      color:'orange',
                    },
                  }}
                  label={link}
                  key={index}
                  component={NavLink}
                  to={link}
                />
                
                
              ))}
            </Tabs>
          </Box>
          </Box>
          <Box >
           <SearchAppBar/>
          </Box>
        </Box>
      </Toolbar>}
    
    </AppBar>
  );
}

export default Header;
