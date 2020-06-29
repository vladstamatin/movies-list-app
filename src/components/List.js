import React from 'react'
import { Link } from 'react-router-dom'
import '../style/list.css'
import Movie from './Movie'
  
function List(props) {
    const { now_playing, latest, upcoming } = props

    return (
      <div className="list">  
        <ul>
        <p>Now Playing</p>
          {now_playing.map(function(now, index){
            return (
              <Link key={now.id} to={`/playing/${now.original_title}`}>
                <li><Movie img_path={now.poster_path} title={now.title}/></li>
              </Link>
            )
          })}
        </ul>

        <ul>
        <p>Latest</p>
          <Link key={latest.id} to={`/latest/${latest.original_title}`}>
            <li><Movie img_path={latest.poster_path} title={latest.title}/></li>
          </Link>
        </ul>

        <ul>
        <p>Upcoming</p>
          {upcoming.map(function(upcoming, index){
            return (
              <Link key={upcoming.id} to={`/upcoming/${upcoming.original_title}`}>
                <li><Movie img_path={upcoming.poster_path} title={upcoming.title}/></li>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  };


  export default List