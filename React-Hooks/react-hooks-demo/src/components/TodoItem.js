import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function TodoItem({
    text,
    isCompleted,
    _id,
}) {
    return (
        <ListGroup.Item action>
            {text}
        </ListGroup.Item>
    )
}
