import React from 'react'
import './details.scss'

  function Details(props) {
    const { now_playing, popular, upcoming } = props;

    const now_playing_filtered = now_playing.results.filter((elem) => elem.title === props.match.params.movieName)
    const upcoming_filtered = upcoming.results.filter((elem) => elem.title === props.match.params.movieName)
    
    // get list type of accesed movie
    const listType = props.match.params.listType;

    // title
    const title_now_playing  = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].title
    const title_popular = popular.title
    const title_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].title

    // description
    const description_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].overview
    const description_popular = popular.overview
    const description_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].overview

    // date
    const date_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].release_date
    const date_popular = popular.release_date
    const date_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].release_date

    // genre
    const genre_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].genre_ids // Gives an array with ids
    const genre_popular = popular.genres
    const genre_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].genre_ids // Gives an array with ids

    // rating
    const rating_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].vote_average
    const rating_popular = popular.vote_average
    const rating_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].vote_average

    // duration
    // There is no runtime in now_playing api
    const duration_popular = popular.runtime
    // There is no runtime in upcoming api
    return (
      <div className="details-container">
        <div className="details">
          <hr/>
          <p>Title</p>{
            listType === "playing" ? <p>{title_now_playing ? title_now_playing : "Title NOT FOUND"}</p> :
            listType === "popular" ? <p>{title_popular ? title_popular : "Title NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{title_upcoming ? title_upcoming : "Title NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Description</p>{
            listType === "playing" ? <p>{description_now_playing ? description_now_playing : "Description NOT FOUND"}</p> :
            listType === "popular" ? <p>{description_popular ? description_popular : "Description NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{description_upcoming ? description_upcoming : "Description NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Date</p>{
            listType === "playing" ? <p>{date_now_playing ? date_now_playing : "Date NOT FOUND"}</p> :
            listType === "popular" ? <p>{date_popular ? date_popular : "Date NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{date_upcoming ? date_upcoming : "Date NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Genre</p>{
            listType === "playing" ? <p>{genre_now_playing ? genre_now_playing : "Genre NOT FOUND"}</p> :
            listType === "popular" ? <p>{genre_popular && genre_popular.length > 0 ? genre_popular.map(function(genre){ return ( <>{genre.id} : {genre.name}</>)} ) : "Genre NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{genre_upcoming ? genre_upcoming : "Genre NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Rating</p>{
            listType === "playing" ? <p>{rating_now_playing ? rating_now_playing : "Rating NOT FOUND"}</p> :
            listType === "popular" ? <p>{rating_popular ? rating_popular : "Rating NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{rating_upcoming ? rating_upcoming : "Rating NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Duration</p>{
            listType === "playing" ? <p>{"Duration NOT FOUND"}</p> :
            listType === "popular" ? <p>{duration_popular ? duration_popular : "Duration NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{"Duration NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
        </div>
      </div>
    );
  };

export default Details