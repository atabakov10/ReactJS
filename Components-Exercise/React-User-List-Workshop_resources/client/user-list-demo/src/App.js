import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";

import * as userService from '../src/services/userService'
import '../src/components/App.css';
import UserList from "./components/UserList";
import { useEffect, useState } from "react";


function App() {
    const [users, setUsers] = useState([]);

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
    })

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
    });

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log('Error');
            });
    }, [])

    const onUserCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const createdUser = await userService.create(data);

        setUsers(state => [...state, createdUser]);
    };


    const onUserDeleteClick = async (userId) => {
        await userService.deleteUser(userId);

        setUsers(state => state.filter(x => x._id !== userId));
    }

    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const updatedUser = await userService.update(userId, data);

        setUsers(state => state.map(x => x._id === userId ? updatedUser : x));
    };

    const formChangeHandler = (e) => {
        e.preventDefault();
        
        setFormValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const validateForm = (e) => {
        const value = e.target.value
        const errors = {}

        if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
            errors.firstName = 'First name should be between 3 and 20 characters!'
        }

        if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Last name should be between 3 and 20 characters!' 
        }

        setFormErrors(errors);
    };

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        onUserDeleteClick={onUserDeleteClick}
                        formValues={formValues}
                        formChangeHandler={formChangeHandler}
                        formErrors={formErrors}
                        validateForm={validateForm}
                    />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App;
