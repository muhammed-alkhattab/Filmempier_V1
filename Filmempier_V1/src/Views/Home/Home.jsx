import React from 'react'
import { Hero } from './Hero'

import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import Upcomming from '../../component/popular/Upcomming';
import TopRated from '../../component/Top_Rated/TopRated';
export default function Home() {
  
  
  
  return (
    <>
      <Hero/>
      {/*<GridView data={data}/>*/}
      <Upcomming  title="popular" />
      <TopRated  title="Top Rated" />
      
      

    </>
  )
}




