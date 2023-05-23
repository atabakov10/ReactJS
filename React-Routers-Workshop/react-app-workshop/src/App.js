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
import { gameServiceFactory } from "./services/gameService";
import { authServiceFactory } from "./services/authService";
import AuthContext from "./contexts/AuthContext";
import { Logout } from "./components/Logout/Logout";
import { useService } from "./hooks/useService";

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});
    const gameService = gameServiceFactory(auth.accessToken)
    const authService = authServiceFactory(auth.accessToken)

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
    };

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
        }
    }

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
        }
    }

    const onLogout = async () => {
        // TODO: Authorized request
        // await authService.logout();

        setAuth({});
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={context}>
            <div id="box">
                <Header />
                <main id="main-content">

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create-game" element={<Create onCreateGameSubmit={onCreateGameSubmit} />} />
                        {/* <Route path="/edit:gameId" element={<Edit />}/> */}
                        <Route path="/catalogue" element={<Catalogue games={games} />} />
                        <Route path="/catalogue/:gameId" element={<Details />} />
                    </Routes>

                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
