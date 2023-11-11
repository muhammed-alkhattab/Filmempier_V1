import { Paper, Stack, Button, Box,Typography } from '@mui/material';
import React from 'react';

import Logo from '../../assets/tmovie.png';
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset",paddingTop:'1rem',backgroundColor:'#131313' }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
         <Box paddingLeft={'1rem'}>
          < img width={60} height={60} src={Logo}/>
         </Box>
          <Box paddingRight={'1rem'}>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "white" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
const Container = ({ header, children }) => {
  return (
    <Box sx={{
      marginTop: "5rem",
      marginX: "auto",
      color: "#ff0000"
    }}>
      <Stack spacing={4}>
        {header && (
          <Box sx={{
            position: "relative",
            paddingX: { xs: "20px", md: 0 },
            maxWidth: "1366px",
            marginX: "auto",
            width: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              left: { xs: "20px", md: "0" },
              top: "100%",
              height: "5px",
              width: "100px",
              backgroundColor: "#ff0000"
            }
          }}>
            <Typography variant="h5" fontWeight="700" textTransform="uppercase">
              {header}
            </Typography>
          </Box>
        )}
        {children}
      </Stack>
    </Box>
  );
};