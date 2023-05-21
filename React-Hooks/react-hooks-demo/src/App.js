import './App.css';
import { TodoContext } from './contexts/todoContext';
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
            });
    }, []);

    const onTodoDeleteClick = async (todoId) => {
        await fetch(`${baseUrl}/${todoId}`, { method: 'DELETE' });

        setTodos(state => state.filter(x => x._id !== todoId));
    }

    const contextValue = {
        onTodoDeleteClick,
    }

    return (
        <TodoContext.Provider value={contextValue}>
            <div>
                <Header />

                <TodoList todos={todos} baseUrl={baseUrl} setTodos={setTodos} />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
