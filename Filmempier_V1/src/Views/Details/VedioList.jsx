import React from 'react'
import { useEffect,useRef } from 'react'
const VideoList = () => {
    const videos =[];
  return (
    <div>
        {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
    </div>
  )
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList
