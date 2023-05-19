import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            setTodos(Object.values(data));
        })
    }, []);
    
    return (
        <div>
            <Header />
            
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
