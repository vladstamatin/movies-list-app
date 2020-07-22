import React from 'react'
import '.././details.scss'

function Genre({ filtered_genres }) {
    
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
