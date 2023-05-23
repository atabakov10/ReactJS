import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const baseUrl = 'https://swapi.dev/api/films/';

 const formatDate = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
 }

export default function Film() {
    const { filmId } = useParams();
    const [film, setFilm] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}${filmId}`)
        .then(res => res.json())
        .then(data => {
            setFilm(data);
            setLoader(true);
        })
    },[filmId])


    return (
        <>
            {loader ? <>
                <h1>Film Page</h1>
                <h2>{film.title}</h2>
                <h4>Director: {film.director}</h4>
                <h4>Created on: {formatDate(film.created)}</h4>
                <h4>Producers: {film.producer}</h4>
            </> : <Loader />}
        </>
    )
}