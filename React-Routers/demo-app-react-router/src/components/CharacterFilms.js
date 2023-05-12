import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const baseUrl = 'https://swapi.dev/api'

export default function CharacterFilms() {
    const [films, setFilms] = useState([])
    const { characterId } = useParams();

    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then((response) => response.json())
            .then(data => {
                setFilms(data.results);
            });
    }, [characterId]);


    return (
        <>
            <h2>Character films</h2>

            {films.map(x => {
                const id = x.url.split('/').filter(x => x).pop();

                return <li key={id}><Link to={`/films/${id}`}>{x.title}</Link></li>
            })}
        </>
    );
}