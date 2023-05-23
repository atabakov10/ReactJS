import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loader from './Loader';

const baseUrl = 'https://swapi.dev/api'

export default function CharacterFilms() {
    const [films, setFilms] = useState([])
    const { characterId } = useParams();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then((response) => response.json())
            .then(data => {
                setFilms(data.results);
                setLoader(true);
            });
    }, [characterId]);


    return (
        <>
            <h3>Character films</h3>

            {loader ? (films.map(x => {
                const id = x.url.split('/').filter(x => x).pop();

                return <li key={id}><Link to={`/films/${id}`}>{x.title}</Link></li>
            })) : <Loader />
            }
            
        </>
    );
}