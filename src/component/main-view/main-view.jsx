import { useEffect, useState } from "react";
import {MovieView} from "../movie-view/movie-view";
import {MovieCard} from "../movie-card/movie-card";

export const MainView = () =>{
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(()=>{
        fetch("https://exampleapi.onrender.com/movies")
        .then((response)=>response.json())
        .then((data)=>{
            const moviesFromApi = data.map((doc) =>{
                return{
                    id: doc.id,
                    title: doc.Title,
                    description: doc.Description,
                    director: doc.Director_Name?.[0]
                };
            });
            setMovies(moviesFromApi);
        });
    }, []);


    if (selectedMovie){
        return <MovieView movie = {selectedMovie} onBackClick={() =>
        setSelectedMovie(null)} />;
    }

    if (movies.length===0){
        return <div>The list is empty.</div>;
    }

    return (
        <div>
            {movies && movies.map((movie)=> (
                <MovieCard
                key = {movie._id}
                movie = {movie}
                onMovieClick={(newSelectedMovie)=>{
                    setSelectedMovie(newSelectedMovie);
                }}
                />
            ))}
        </div>
    );
}