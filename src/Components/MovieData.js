import React from 'react';

function MovieData(props) {

    const movie=props.movie;

    // the prop "movie" is initialized in redux as "false" and then passed as a prop to this component.
    // if movie===false, then the user didn't select anything yet.
    if (movie===false){
        return (
            <p><b>No Movie Selected</b></p>
        );
    }
    else{
        return(
            <div className="container">
                <h4>{movie.title}</h4>
                <p>{movie.opening_crawl}</p>
                <p>Directed by: {movie.director}</p>
            </div>
        )
    }
}

export default MovieData;
