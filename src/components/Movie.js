import React from 'react';
import '../style/movie.css';
const get_image = 'http://image.tmdb.org/t/p/w185/';

function Movie(props) {
    const { img_path,title } = props

    return(
        <div className="movie" > 
            {img_path ? <img src={get_image + img_path} alt={title} /> : <div className="no_image">{title}</div>}
        </div>
    )
}

export default Movie;

