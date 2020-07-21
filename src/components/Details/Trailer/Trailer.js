import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'

function Trailer(props) {
    const { movie_id, api_key } = props;
    const [Videos ,setVideos] = useState([]);
    const [subscribed ,setSubscribed] = useState([]);

    const trailer_api = `http://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}&language=en-US`;

    const opts ={
        height: '475',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    
    useEffect(() => {
        setSubscribed(true)
        async function fetchVideos(){
            fetch(trailer_api)
          .then(response => response.json())
          .then(data => {
            if (subscribed) {
                setVideos(data)
              }
          } )
          return () => setSubscribed(true)
          }
          fetchVideos();
        }, [])

    const trailerUrl = trailer_api && Videos && Videos.results && Videos.results[0] && Videos.results[0].key
    
    return (
        <div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Trailer
