import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';
import { Routes, Route } from 'react-router-dom';
import CharacterFilms from './CharacterFilms';

const baseUrl = 'https://swapi.dev/api/people/'

export default function Character() {
    const { characterId } = useParams();
    const navigate = useNavigate(); 
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}${characterId}`)
        .then(res => res.json())
        .then(data => {
            setCharacter(data);
        })
    }, [characterId]);

    const onBackButtonClick = () => {
        navigate('/characters'); 
    }
    
    return (
        <>
        <h1>Character Page</h1>
        <h2>{character.name}</h2>
        <h4>Gender: {character.gender}</h4>

        <button onClick={onBackButtonClick}>Back</button>

        <nav className={styles.navigation}>
            <ul>
                <li><Link to="films">Films</Link></li>
                <li><Link to="vehicles">Vehicles</Link></li>
                <li><Link to="starships">Starships</Link></li> 
            </ul>
        </nav>

        <Routes>
        <Route path='/films' element={<CharacterFilms />} />
        <Route path='/vehicles' element={<h5>Vehicles</h5>} />
        <Route path='/starships' element={<h5>Starships</h5>} />
        </Routes>
        </>
    )

}