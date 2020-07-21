import React from 'react'
import './banner.scss'
const get_image = "http://image.tmdb.org/t/p/original";

function Banner(props) {
    const { title, backdrop } = props;
    if(backdrop){
        var img_path = backdrop.backdrop_path;
        var movieTitle = backdrop.original_title;
        var movieDescription = backdrop.overview;
    }

    function truncate (str, n){
        if(str && str.length){
            return str.length > n ? str.substr(0, n-1) + "..." : str;
        } 
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
