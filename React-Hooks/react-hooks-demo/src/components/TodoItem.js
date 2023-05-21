import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

export default function TodoItem({
    text,
    _id,
    onTodoDeleteClick,
}) {
    return (
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}>
            {text}
            <Button variant="outline-dark" onClick={() => onTodoDeleteClick(_id)}>x</Button>
        </ListGroup.Item>
    )
}
