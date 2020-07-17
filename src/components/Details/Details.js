import React, { useEffect, useState } from 'react'
import Banner from "../Banner/Banner"
import './details.scss'

  function Details(props) {
    const { now_playing, popular, upcoming } = props;

    const [Movies ,setMovies] = useState([]);
    useEffect(() => {
      async function fetchData(){
      fetch(props.match.params.listType === "Now Playing" ? now_playing :
      props.match.params.listType === "Popular" ? popular :
      props.match.params.listType === "Upcoming" ? upcoming :
      null)
      .then(response => response.json())
      .then(data => {
        setMovies(data)
    })
    }
    fetchData();
    }, [])
    
    const filtered_movie = (Movies.results || []).filter((elem) => elem.original_title === props.match.params.movieName)

    // title
    const title  = filtered_movie && filtered_movie[0] && filtered_movie[0].title

    // description
    const description = filtered_movie && filtered_movie[0] && filtered_movie[0].overview

    return (
      <div className="details-container">
        <div className="details">
        <Banner title={title} backdrop={filtered_movie[0]}/>
          <hr/>
          <p>Title</p>
            <p>{title ? title : "Title NOT FOUND"}</p> 
          <hr/>
          <p>Description</p>
            <p>{description ? description : "Description NOT FOUND"}</p> 
          <hr/>
        </div>
      </div>
    );
  };

export default Details