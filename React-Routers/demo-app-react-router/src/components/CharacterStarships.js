import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loader from './Loader';

const baseUrl = 'https://swapi.dev/api'

export default function CharacterStarships() {
    const [starships, setStarships] = useState([]);
    const { characterId } = useParams();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}/starships`)
            .then((response) => response.json())
            .then(data => {
                setStarships(data.results);
                setLoader(true);
            });
    }, [characterId])

    return (
        <>
            <h3>Character starships</h3>
            {loader ? (starships.map(x => {
                const id = x.url.split('/').filter(x => x).pop();

                return <li key={id}><Link to={`/starships/${id}`}>{x.name}</Link></li>
            })) : <Loader />
            }
        </>)
}