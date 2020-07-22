import React, { useEffect, useState } from 'react'
import Banner from "../Banner/Banner"
import Movie from '../List/Movie/Movie'
import Trailer from './Trailer/Trailer'
import Genre from './Genre/Genre'
import './details.scss'

  function Details(props) {
    const { now_playing_api, popular_api, upcoming_api, api_key } = props;
    const [Movies ,setMovies] = useState([]);
    const [Genres ,setGenres] = useState([]);

    const genres_api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;

    useEffect(() => {
        let mounted = true
        fetch(props.match.params.listType === "Now Playing" ? now_playing_api :
          props.match.params.listType === "Popular" ? popular_api :
          props.match.params.listType === "Upcoming" ? upcoming_api :
        null)
      .then(response => response.json())
      .then(data => {
        if (mounted) {
        setMovies(data)
        }
      })
      return function cleanup() {
        mounted = false
      }
    }, [])

    useEffect(() => {
        let mounted = true
        fetch(genres_api)
      .then(response => response.json())
      .then(data => {
        if (mounted) {
        setGenres(data)
        }
      })
      return function cleanup() {
        mounted = false
      }

    }, [])
    
    const filtered_movie = (Movies.results || []).filter((elem) => elem.original_title === props.match.params.movieName)

    // id
    const movie_id  = filtered_movie && filtered_movie[0] && filtered_movie[0].id

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

    return (
      <div className="details-container">
        <div className="details">

        {Movies && <Banner title="Movie React App" backdrop={filtered_movie[0]}/>}
        {movie_id && <Trailer movie_id={movie_id} api_key={api_key}/>}

          <div className="movie--block">
            {Movies && <Movie img_path={img_path} title={title} adult={adult}/>}
            <div className="more--details">
              <h2>Title: {title}</h2>
              <p>Release Date: {date}</p>
              {Genres && <Genre filtered_genres={filtered_genres}/>}
              <p>Description <br/> {description}</p>
            </div>
          </div>

        </div>
      </div>
    );
  };

export default Details