import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        </>
    )

}