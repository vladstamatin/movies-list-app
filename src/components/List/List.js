import React from 'react'
import { Link } from 'react-router-dom'
import './list.scss'
import Movie from './Movie/Movie'
  
function List(props) {
    const { feedData, title } = props;
    return (
      <div className="list">  
        <ul>
          <p>{title}</p>
          {feedData.results && feedData.results.map(function(elem){
            return (
              <Link key={elem.id} to={`/playing/${elem.original_title}`}>
                <li key={elem.id}><Movie img_path={elem.poster_path} title={elem.title} adult={elem.adult}/></li>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  };


  export default List;