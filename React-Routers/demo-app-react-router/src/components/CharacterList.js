import { useEffect, useState} from "react";
import CharacterListItem from "./CharacterListItem";

const baseUrl = 'https://swapi.dev/api/people/'

export default function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(data => {
                console.log(data.results);
                setCharacters(data.results);
            });
    }, []);

    return (
        <>
        <h1>Star Wars Characters</h1>

        <ul>
            {characters.map(x => <CharacterListItem key={x.url} {...x} />)}
        </ul>
        </>
    )
}