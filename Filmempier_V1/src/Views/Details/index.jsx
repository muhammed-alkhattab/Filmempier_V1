import React from 'react';
import { useParams } from 'react-router-dom';
import CastList from './CastList';
import useFetch from '../../hooks/useFetch';
import VideoList from './VedioList';
import Upcomming from '../../component/popular/Upcomming';
import { useLocation } from 'react-router-dom';

const Detail = () => {
    
const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;
const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;
const { state } = useLocation();
  const { obj} = state;
  const { id, title } = obj;

  

const data = useFetch(`/movie/${id}`);

const { data : credits ,loading: creditsLoading } = useFetch(`/movie/${id}/credits`);
 console.log('********************************')
 console.log(data);
   

  return (

        <React.Fragment >
              
              
                
                    {data.loading === false ? <> <div className="banner" style={{backgroundImage: `url(${backdropPath(data.data.backdrop_path)})`}} ></div>
                    <div className="mb-3 movie-content container">
                        <div className="movie-content__poster">
                            <div className="movie-content__poster__img" style={{backgroundImage: `url(${backdropPath(data.data.poster_path || data.data.backdrop_path)})`}}></div>
                        </div>
                        <div className="movie-content__info">
                            <h1 className="title">
                                {data.data.title || data.data.name}
                            </h1>
                            <div className="genres">
                                {
                                    data.genres && data.genres.slice(0, 5).map((genre, i) => (
                                        <span key={i} className="genres__item">{genre.name}</span>
                                    ))
                                }
                            </div>
                            <p className="overview">{data.data.overview}</p>
                            <div className="cast">
                                <div className="section__header">
                                    <h2>Casts</h2>
                                </div>
                                <CastList id={data.id} casts={credits?.cast}/>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="section mb-3">
                            {/*<VideoList id={data.id}/>*/}
                        </div>
                        <div className="section mb-3">
                            
                            <Upcomming title={'Similar'}/>
                        </div>
                    </div> </> : <div className="section">Looding</div>}
                    
                </React.Fragment>
                 
                   
            
                            
        
  )
};
export default Detail