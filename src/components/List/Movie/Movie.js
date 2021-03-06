import React from 'react';
import './movie.scss';

function Movie({ img_path,title, adult }) {
    const get_image = 'http://image.tmdb.org/t/p/w185/';

    return(
        <div className="movie" > 
            {img_path && !adult ? <img src={get_image + img_path} alt={title} /> : <div className="no_image">{title}</div>}
        </div>
    )
}

export default Movie;

