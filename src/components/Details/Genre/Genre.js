import React from 'react'
import '.././details.scss'

function Genre(props) {
    const { filtered_genres } = props;
    
    return (
        <div className="genres">
        {filtered_genres && filtered_genres.map((elem) => {
            return (
              <li key={elem.id}>
              {elem.name}
              </li>
            )
            })}
        </div>
    )
}

export default Genre
