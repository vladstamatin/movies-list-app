import React from 'react'
import './banner.scss'
const get_image = "http://image.tmdb.org/t/p/original";

function Banner(props) {
    const { title, backdrop } = props;

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    const size = Object.size(backdrop.results);
    const getRandomFromSize = Math.floor(Math.random() * size);
    const pickedMovie  = backdrop.results && backdrop.results[getRandomFromSize]
    const img_path = pickedMovie.backdrop_path;
    const movieTitle = pickedMovie.original_title;
    const movieDescription = pickedMovie.overview;

    function truncate (str, n){
        return str.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        <>
        <div className="navbar">
            <h3>{title}</h3>
        </div>
        <div className="banner">
            <img className="backdrop" src={get_image + img_path} alt={title} ></img>

            <div className="banner-data">
                <h2>{movieTitle}</h2>
                <p>{truncate(movieDescription, 150)}</p> 
            </div>
            <div className="fade_out_bottom"/>
        </div>
        </>
    )
}

export default Banner;
