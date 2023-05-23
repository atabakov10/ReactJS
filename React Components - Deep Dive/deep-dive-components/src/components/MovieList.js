import Movie from "./Movie";

export default function MovieList({
   movies,
   onMovieDelete,
   OnMovieSelect
   }) {
  return (
    <ul>
      {movies.map((movie) => (
      <li key = {movie.id}>
        <Movie 
        {...movie} 
        onMovieDelete={onMovieDelete} 
        OnMovieSelect = {OnMovieSelect}/>
      </li>
      ))}
    </ul>
  );
}
