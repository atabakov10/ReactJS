import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const baseUrl = 'https://swapi.dev/api/vehicles/';

const formatDate = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
 }

export default function Vehicle() {
    const { vehicleId } = useParams();
    const [vehicle, setVehicle] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}${vehicleId}`)
        .then(res => res.json())
        .then(data => {
            setVehicle(data);
            setLoader(true);
        })
    },[vehicleId])

    return (
        <>
            {loader ? <>
                <h1>Vehicle Page</h1>
                <h2>{vehicle.name}</h2>
                <h4>Model: {vehicle.model}</h4>
                <h4>Created on: {formatDate(vehicle.created)}</h4>
                <h4>Passengers: {vehicle.passengers}</h4>
            </> : <Loader />}
        </>
    )
}