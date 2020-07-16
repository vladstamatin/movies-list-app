import React from 'react'
import './banner.scss'

function Banner(props) {
    const get_image = "http://image.tmdb.org/t/p/original";
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
    const img_path  = backdrop.results && backdrop.results[getRandomFromSize] && backdrop.results[getRandomFromSize].backdrop_path

    console.log(img_path)
      return (
        <>
        <div className="navbar">
            <h3>{title}</h3>
        </div>
        <div className="banner">
            {/* <h2>{movieTitle}</h2>
            <p>{movieDescription}</p> */}

            <img className="backdrop" src={get_image + img_path} alt={title} />
            <div className="fade_out_bottom"/>
        </div>
        </>
    )
}

export default Banner;
