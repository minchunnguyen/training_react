import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export class DeleteWorkerPopup extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        var { showDeleteWorkerPopup, toggleDeleteWorkerPopup, deleteWorkerFunction, deleteWorker } = this.props;
        return (
            <Modal show={showDeleteWorkerPopup} onHide={toggleDeleteWorkerPopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {deleteWorker ? deleteWorker.name: null}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDeleteWorkerPopup}>Close</Button>
                    <Button variant="danger" onClick={() => deleteWorkerFunction(deleteWorker)}>Delete</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default DeleteWorkerPopup
