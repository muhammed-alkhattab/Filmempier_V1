import React from 'react'
import './detail.scss'
import { Avatar } from '@mui/material';
const CastList = ({casts}) => {
const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;
const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;
  return (
    <div className="casts">
    {casts?.slice(0,10).map((item, i) => (
      <div key={i} className="casts__item">
        
        <div
          className="casts__item__img"
          style={{
            backgroundImage: `url(${item.profile_path ? posterPath(item.profile_path) : "/avatar.jpg"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <p  className="casts__item__name">{item.name}</p>
      </div>
    ))}
  </div>
  )
}

export default CastList
