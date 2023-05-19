import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TodoItem from './TodoItem'

export default function TodoList({
    todos,
}) {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List</h1>
            <ListGroup>
                {todos.map(todo => (<TodoItem key={todo._id} {...todo}/>))}
            </ListGroup>
        </div>
    )
}
