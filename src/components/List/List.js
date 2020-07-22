import React from 'react'
import { Link } from 'react-router-dom'
import './list.scss'
import Movie from './Movie/Movie'
  
function List({ feedData, title }) {
  
    return (
      <div className="list">  
      <p>{title}</p>
        <ul>
          {feedData.results && feedData.results.map((elem) => {
            return (
              <Link key={elem.id} to={`/${title}/${elem.original_title}`}>
                <li key={elem.id}>
                  <Movie img_path={elem.poster_path} title={elem.title} adult={elem.adult}/>
                  <p>{elem.title}</p>
                  <p>{elem.release_date}</p>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  };


  export default List;