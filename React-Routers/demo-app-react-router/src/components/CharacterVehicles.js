import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loader from './Loader';

const baseUrl = 'https://swapi.dev/api'

export default function CharacterVehicles() {
    const [vehicles, setVehicles] = useState([]);
    const { characterId } = useParams();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}/vehicles`)
            .then((response) => response.json())
            .then(data => {
                setVehicles(data.results);
                setLoader(true);
            });
    }, [characterId]);

    return (
    <>
    <h3>Character vehicles</h3>
    {loader ? (vehicles.map(x => {
                const id = x.url.split('/').filter(x => x).pop();

                return <li key={id}><Link to={`/vehicles/${id}`}>{x.name}</Link></li>
            })) : <Loader />
            }
    </>
    );
}