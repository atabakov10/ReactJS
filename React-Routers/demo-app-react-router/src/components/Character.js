import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterFilms from './CharacterFilms';
import { Navigation, NavItem } from './Navigation';
import Loader from './Loader';
import CharacterVehicles from './CharacterVehicles';
import CharacterStarships from './CharacterStarships';

const baseUrl = 'https://swapi.dev/api/people/'

export default function Character() {
    const { characterId } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data);
                setLoader(true);
            })
    }, [characterId]);

    const onBackButtonClick = () => {
        navigate('/characters');
    }

    return (
        <>
            {loader ? <>
                <h1>Character Page</h1>
                <h2>{character.name}</h2>
                <h4>Gender: {character.gender}</h4>

                <button onClick={onBackButtonClick}>Back</button>

                <Navigation>
                    <NavItem to="films">Films</NavItem>
                    <NavItem to="vehicles">Vehicles</NavItem>
                    <NavItem to="starships">Starships</NavItem>
                </Navigation>

                <Routes>
                    <Route path='/films' element={<CharacterFilms />} />
                    <Route path='/vehicles' element={<CharacterVehicles />} />
                    <Route path='/starships' element={<CharacterStarships />} />
                </Routes>
            </> : <Loader />}

        </>
    )

}