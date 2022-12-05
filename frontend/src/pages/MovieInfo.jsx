import React, { useEffect, useState } from 'react';


const MovieInfo = () => {
    const [movie, setMovie] = useState([]);

    let url = "http://localhost:8080/movies";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err))
    }, [url])


    return (
        <div className="App">
            <h1>Movie Info</h1>
            <ul>
                {movie.map((movie, index) => (
                    <ol key={index}>{movie.title}</ol>
                ))}
            </ul>
        </div>
    )
}

export default MovieInfo;