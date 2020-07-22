import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'

function Trailer(props) {
    const { movie_id, api_key } = props;
    const [Videos ,setVideos] = useState([]);
    console.log(movie_id)
    const trailer_api = `http://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}&language=en-US`;

    const opts = {
        height: '475',
        width: '100%',
        playerVars: {
            autoplay: 1,
            mute: 1
        },
    };
    
    useEffect(() => {
        let mounted = true
        trailer_api && fetch(trailer_api)
        .then(response => response.json())
        .then(data => {
          if (mounted) {
          setVideos(data)
          }
        })
        return function cleanup() {
          mounted = false
        }
      }, [])

    const trailerUrl = trailer_api && Videos && Videos.results && Videos.results[0] && Videos.results[0].key
    
    return (
        <div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Trailer
