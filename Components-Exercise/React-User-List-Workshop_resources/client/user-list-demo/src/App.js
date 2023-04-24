import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";

import * as userService from '../src/services/userService'
import '../src/components/App.css';
import UserList from "./components/UserList";
import { useEffect, useState } from "react";


function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log('Error');
            });
    }, [])
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} />

                    <button className="btn-add btn">Add new user</button>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default App;
