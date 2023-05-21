import { useContext } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { TodoContext } from '../contexts/todoContext';

export default function TodoItem({
    text,
    _id,
}) {
    const {onTodoDeleteClick} = useContext(TodoContext);
    return (
        <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }}>
            {text}
            <Button variant="outline-dark" onClick={() => onTodoDeleteClick(_id)}>x</Button>
        </ListGroup.Item>
    )
}
