import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function TodoItem({
    text,
    isCompleted,
    _id,
}) {
    return (
        {
            isCompleted: isCompleted === false ? <ListGroup.Item action>
                {text}
            </ListGroup.Item> : ""
        }

    )
}
