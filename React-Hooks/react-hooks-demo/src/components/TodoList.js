import { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import TodoItem from './TodoItem'
import AddTodoModal from './AddTodoModal';

export default function TodoList({
    todos,
    baseUrl,
    setTodos,
}) {
    const [show, setShow] = useState(false);
    const onShow = () => setShow(true);
   

    const onTodoAdd = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        const result = await response.json()
            .then(setShow(false))

        setTodos(state => [...state, result]);
    }

    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List</h1>
            <ListGroup style={{ marginBottom: '10px' }}>
                {todos.map(todo => (<TodoItem key={todo._id} {...todo} />))}
            </ListGroup>
            <Button variant="primary" onClick={onShow}>Add</Button>{' '}
            <AddTodoModal show={show} setShow={setShow} onTodoAdd={onTodoAdd} />
        </div>
    )
}
