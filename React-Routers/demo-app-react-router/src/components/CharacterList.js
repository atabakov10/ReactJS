import { useEffect, useState } from "react";
import CharacterListItem from "./CharacterListItem";
import Loader from "./Loader";

const baseUrl = 'https://swapi.dev/api/people/'

export default function CharacterList() {

    const [characters, setCharacters] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(data => {
                setCharacters(data.results);
                setLoader(true);
            })
    }, []);

    return (
        <>
            <h1>Star Wars Characters</h1>

            {loader ? (<ul>
                {characters.map(x => <CharacterListItem key={x.url} {...x} loader={loader} />)}
            </ul>)
                : <Loader />
            }
        </>
    )
}