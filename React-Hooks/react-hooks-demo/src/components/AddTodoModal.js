import { Modal, Button, Form } from 'react-bootstrap'
import useForm from '../hooks/useForm';

export default function AddTodoModal({
    show,
    setShow,
    onTodoAdd,
}) {
    const {formValues, onChangeHandler, onSubmit} = useForm({
        text: '',
    }, onTodoAdd);

    const onClose = () => setShow(false);
    return (
        <Modal show={show} onEscapeKeyDown={onClose}>
            <Modal.Header closeButton onHide={onClose}>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name='text' placeholder="Do the dishes" value={formValues.name} onChange={onChangeHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button style={{marginLeft: '10px'}} variant="secondary" onClick={onClose}>Close</Button>
                </Form >
            </Modal.Body>
        </Modal>
    )
}
