import React, { useEffect, useState } from 'react'
import Banner from "../Banner/Banner"
import Movie from '../List/Movie/Movie'
import './details.scss'

const API_KEY = "57c23b2d887f53cf4e9808685fd0c6bc";

const genres_api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  function Details(props) {
    const { now_playing, popular, upcoming } = props;

    const [Movies ,setMovies] = useState([]);
    const [Genres ,setGenres] = useState([]);

    useEffect(() => {
      async function fetchMovies(){
      fetch(props.match.params.listType === "Now Playing" ? now_playing :
      props.match.params.listType === "Popular" ? popular :
      props.match.params.listType === "Upcoming" ? upcoming :
      null)
      .then(response => response.json())
      .then(data => {
        setMovies(data)
    })
    }
    async function fetchGenres(){
      fetch(genres_api)
      .then(response => response.json())
      .then(data => {
        setGenres(data)
    })
    }
    fetchMovies();
    fetchGenres();
    }, [])

    const filtered_movie = (Movies.results || []).filter((elem) => elem.original_title === props.match.params.movieName)
    
    // title
    const title  = filtered_movie && filtered_movie[0] && filtered_movie[0].title

    // img
    const img_path  = filtered_movie && filtered_movie[0] && filtered_movie[0].poster_path

    // adult
    const adult  = filtered_movie && filtered_movie[0] && filtered_movie[0].adult

    // release date
    const date = filtered_movie && filtered_movie[0] && filtered_movie[0].release_date

    // description
    const description = filtered_movie && filtered_movie[0] && filtered_movie[0].overview

    // genres
    const genreArray = filtered_movie.map((el)=>el.genre_ids)
    if(genreArray[0] != undefined){
      var filtered_genres = (Genres.genres || []).filter((elem) => genreArray[0].includes(elem.id))
    }
    
    console.log(Movies)
    return (
      <div className="details-container">
        <div className="details">
        <Banner title="Movie React App" backdrop={filtered_movie[0]}/>
          <div className="movie--block">
            <Movie img_path={img_path} title={title} adult={adult}/>
            <div className="more--details">
              <h2>{title}</h2>
              <p>Release Date: {date}</p>
                <div className="genres">
                {filtered_genres && filtered_genres.map((elem) => {
                return (
                  <li key={elem.id}>
                  {elem.name}
                  </li>
                )
                })}
                </div>
              <p>Description <br/> {description}</p>
            </div>
            <button className="btn--details">Watch Trailer</button>
          </div>
        </div>
      </div>
    );
  };

export default Details