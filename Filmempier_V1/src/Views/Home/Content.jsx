import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../../component/Typography';
import axios from 'axios';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: '/assets/Drama.jpg',
    title: 'Super Hero',
    width: '40%',
  },
  {
    url: '/assets/SF.jpg',
    title: 'Sience Fictions',
    width: '20%',
  },
  {
    url: '/assets/Blood.jpg',
    title: 'Drama',
    width: '40%',
  },
  {
    url: '/assets/Thriller.jpg',
    title: 'Thriller',
    width: '38%',
  },
  {
    url: '/assets/Adventuer.jpg',
    title: 'Adventure',
    width: '38%',
  },
  {
    url: '/assets/Sports.jpg',
    title: 'Sports',
    width: '24%',
  },
  {
    url: '/assets/Comedy.jpg',
    title: 'Comedy',
    width: '40%',
  },
  {
    url: '/assets/Crime.jpg',
    title: 'Crime',
    width: '20%',
  },
  {
    url: '/assets/Action.jpg',
    title: 'Action',
    width: '40%',
  },
];


export default function ProductCategories() {
  
  return (
    <Container component="section" maxWidth="80%" sx={{ mt:8, mb: 4  }}>
      <Typography variant="h4" marked="center" align="center" component="h2" >
        For all tastes and all desires
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap'  }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}