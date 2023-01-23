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
            const moviesFromApi = data.docs.map((doc) =>{
                return{
                    id: doc.key,
                    title: doc.title,
                    description: doc.description,
                    director: doc.director_name?.[0]
                };
            });
            setMovies(moviesFromApi);
        });
    }, []);

    if (selectedMovie){
        return <MovieView movie = {selectedMovie} onBackClick={() =>
        setSelectedBook(null)} />;
    }

    if (movies.length===0){
        return <div>The list is empty.</div>;
    }

    return (
        <div>
            {movies.map((movie)=> (
                <MovieCard
                key = {movie.id}
                movie = {movie}
                onMovieClick={(newSelectedMovie)=>{
                    setSelectedMovie(newSelectedMovie);
                }}
                />
            ))}
        </div>
    );
}