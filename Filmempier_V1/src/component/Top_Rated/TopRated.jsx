import React from "react"
import { Link } from "react-router-dom"
import Ucard from "../popular/Ucard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Typography from "../Typography"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import useFetch from "../../hooks/useFetch"
const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
       <ArrowForwardRoundedIcon/>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
       <ArrowBackRoundedIcon/>
      </button>
    </div>
  )
}
const TopRated = ({  title }) => {
    const {data} = useFetch('/movie/top_rated')
    const slidesToShow =  4 ;
 
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      
      slidesToShow : slidesToShow,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],}
  return (
    <>
      <section className='upcome' >
        <div className='container' style={{marginBottom:'3rem' ,marginTop:'1rem'}}>
          <div className='heading flexSB'>
          <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ marginBottom: "1rem" }}
      >
        {title}
      </Typography>
            <Link >View All</Link>
          </div>
          <div className='content'>
            <Slider {...settings} >
                
              {data?.results.map((item,i) => {
                
                    return(
                    <Ucard key={item.id} item={item} />
                    
                    )
                
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopRated