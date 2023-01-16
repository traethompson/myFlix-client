import { useState } from "react";
import {MovieView} from "../movie-view/movie-view";
import {MovieCard} from "../movie-card/movie-card";

export const MainView = () =>{
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Planet of the Apes",
            description: "Astronaut Leo Davidson whips through space and time to a world where apes and gorillas rule the humans. Captured, he is nurtured by Ari and hunted by General Thade as he leads a rebel group of humans and chimpanzees in search of his downed craft. This is his only hope of escape and, ironically, the planet's only hope of shaking off the tyranny of the gorillas, allowing peaceful humans and chimpanzees to co-exist.",
            director: "Tim Burton"
        },
        {
            id: 2,
            title: "Astroboy",
            description: "In futuristic Metro City, a brilliant scientist named Tenma builds Astro Boy (Freddie Highmore), a robotic child with superstrength, X-ray vision and the ability to fly. Astro Boy sets out to explore the world and find acceptance, learning what being human is all about in the process. Finding that his friends and family in Metro City are in danger, he uses his incredible powers to save all that he loves.",
            director: "David Bowers"
        },
        {
            id: 3,
            title: "Treasure Planet",
            description: "The legendary loot of a thousand worlds inspires an intergalactic treasure hunt when 15-year-old Jim Hawkins stumbles upon a map to the greatest pirate trove in the universe in Walt Disney Pictures' thrilling animated space adventure, Treasure Planet.",
            director: "Ron Clements and John Musker"
        }
    ]);
    const [selectedMovie, setSelectedMovie] = useState(null);

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