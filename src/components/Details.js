import React from 'react'
import '../style/details.css'

  function Details(props) {
    const { now_playing, latest, upcoming } = props;

    const now_playing_filtered = now_playing.filter((elem) => elem.title === props.match.params.movieName)
    const upcoming_filtered = upcoming.filter((elem) => elem.title === props.match.params.movieName)
    
    // get list type of accesed movie
    const listType = props.match.params.listType;

    // title
    const title_now_playing  = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].title
    const title_latest = latest.title
    const title_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].title

    // description
    const description_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].overview
    const description_latest = latest.overview
    const description_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].overview

    // date
    const date_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].release_date
    const date_latest = latest.release_date
    const date_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].release_date

    // genre
    const genre_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].genre_ids // Gives an array with ids
    const genre_latest = latest.genres
    const genre_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].genre_ids // Gives an array with ids

    // rating
    const rating_now_playing = now_playing_filtered && now_playing_filtered[0] && now_playing_filtered[0].vote_average
    const rating_latest = latest.vote_average
    const rating_upcoming = upcoming_filtered && upcoming_filtered[0] && upcoming_filtered[0].vote_average

    // duration
    // There is no runtime in now_playing api
    const duration_latest = latest.runtime
    // There is no runtime in upcoming api

    return (
      <div className="details-container">
        <div className="details">
          <hr/>
          <p>Title</p>{
            listType === "playing" ? <p>{title_now_playing ? title_now_playing : "Title NOT FOUND"}</p> :
            listType === "latest" ? <p>{title_latest ? title_latest : "Title NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{title_upcoming ? title_upcoming : "Title NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Description</p>{
            listType === "playing" ? <p>{description_now_playing ? description_now_playing : "Description NOT FOUND"}</p> :
            listType === "latest" ? <p>{description_latest ? description_latest : "Description NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{description_upcoming ? description_upcoming : "Description NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Date</p>{
            listType === "playing" ? <p>{date_now_playing ? date_now_playing : "Date NOT FOUND"}</p> :
            listType === "latest" ? <p>{date_latest ? date_latest : "Date NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{date_upcoming ? date_upcoming : "Date NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Genre</p>{
            listType === "playing" ? <p>{genre_now_playing ? genre_now_playing : "Genre NOT FOUND"}</p> :
            listType === "latest" ? <p>{genre_latest && genre_latest.length > 0 ? genre_latest.map(function(genre){ return ( <>{genre.id} : {genre.name}</>)} ) : "Genre NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{genre_upcoming ? genre_upcoming : "Genre NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Rating</p>{
            listType === "playing" ? <p>{rating_now_playing ? rating_now_playing : "Rating NOT FOUND"}</p> :
            listType === "latest" ? <p>{rating_latest ? rating_latest : "Rating NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{rating_upcoming ? rating_upcoming : "Rating NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
          <p>Duration</p>{
            listType === "playing" ? <p>{"Duration NOT FOUND"}</p> :
            listType === "latest" ? <p>{duration_latest ? duration_latest : "Duration NOT FOUND"}</p> :
            listType === "upcoming" ? <p>{"Duration NOT FOUND"}</p> : 
            "Error 404, NOT FOUND"
          }
          <hr/>
        </div>
      </div>
    );
  };

export default Details