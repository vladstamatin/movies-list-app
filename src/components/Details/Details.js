import React, { useEffect, useState } from 'react'
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

    const movies_filtered = (Movies.results || []).filter((elem) => elem.original_title === props.match.params.movieName)

    // title
    const title_Movies  = movies_filtered && movies_filtered[0] && movies_filtered[0].title

    // description
    const description_Movies = movies_filtered && movies_filtered[0] && movies_filtered[0].overview

    return (
      <div className="details-container">
        <div className="details">
          <hr/>
          <p>Title</p>
            <p>{title_Movies ? title_Movies : "Title NOT FOUND"}</p> 
          <hr/>
          <p>Description</p>
            <p>{description_Movies ? description_Movies : "Description NOT FOUND"}</p> 
          <hr/>
        </div>
      </div>
    );
  };

export default Details