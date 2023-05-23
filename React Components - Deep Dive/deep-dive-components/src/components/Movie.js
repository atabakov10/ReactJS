import { useEffect } from "react"
import styles from './Movie.module.css'

export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onMovieDelete,
    OnMovieSelect,
    selected
}) {
    
    useEffect(() => {
        console.log(`Movie ${title} mounted!}`);
    }, [title]);

    useEffect(() => {
        console.log(`Movie ${title} updated!`);
    }, [selected, title]);

    useEffect(() => {
        return () => {
        console.log(`Movie ${title} unmounted!`);
        }
    }, [title]); 

    return (
        <article className={styles['movie-article']}>
            <h3>{title}, {year}</h3>
            {selected && <h4>Selected</h4>}  
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => OnMovieSelect(id)}>Select</button>
            </footer>
        </article>
    )
}