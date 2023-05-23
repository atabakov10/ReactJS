import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const baseUrl = 'https://swapi.dev/api/starships/';

const formatDate = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
 }

export default function Starship() {
    const { starshipId } = useParams();
    const [starship, setStarship] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}${starshipId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setStarship(data);
            setLoader(true);
        })
    },[starshipId])


    return (
        <>
            {loader ? <>
                <h1>Starship Page</h1>
                <h2>{starship.name}</h2>
                <h4>Model: {starship.model}</h4>
                <h4>Created on: {formatDate(starship.created)}</h4>
                <h4>Passengers: {starship.passengers}</h4>
                <h4>Cost: {Number(starship.cost_in_credits)} credits</h4>
            </> : <Loader />}
        </>
    )
}