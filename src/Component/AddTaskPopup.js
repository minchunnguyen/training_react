import React, { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap';

class AddTaskPopup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        var { toggleAddTaskPopup } = this.props;
        return (
            <Fragment>
                <div>
                    <div>
                        <Form>
                            <Form.Group controlId="formID">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="id" placeholder="Enter ID" />
                            </Form.Group>

                            <Form.Group controlId="formTask">
                                <Form.Label>Task</Form.Label>
                                <Form.Control type="task" placeholder="Enter Task" />
                            </Form.Group>

                            <Form.Group controlId="formDetail">
                                <Form.Label>Detail</Form.Label>
                                <Form.Control type="detail" placeholder="Enter Detail" />
                            </Form.Group>

                            <Form.Group controlId="formStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="status" placeholder="Enter Status" />
                            </Form.Group>

                        </Form>
                        <Button variant="primary">Add</Button> { }
                        <Button variant="danger" onClick={toggleAddTaskPopup}>Cancel</Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddTaskPopup;