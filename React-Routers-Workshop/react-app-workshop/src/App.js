import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import Catalogue from "./components/Catalogue/Catalogue";
import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import * as gameService from "./services/gameService";

function App() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
        .then(result => {
            setGames(result);
        })
    }, [])

    const onCreateGameSubmit = async (data) => {
       const newGame = await gameService.create(data);

       setGames(state => [...state, newGame]);

       navigate('/catalogue');

    }

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create-game" element={<Create onCreateGameSubmit={onCreateGameSubmit} />} />
                    {/* <Route path="/edit:gameId" element={<Edit />}/> */}
                    <Route path="/catalogue" element={<Catalogue games={games}/>} />
                    <Route path="/catalogue/:gameId" element={<Details />}/>
                </Routes>

            </main>
        </div>

    );
}

export default App;