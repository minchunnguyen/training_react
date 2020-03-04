import React, { Component, Fragment } from 'react'
import '../App.css'
import Worker from './Worker'
import workers from '../Contanst/workers'
import DeleteWorkerPopup from './DeleteWorkerPopup'
import AddWorkerPopup from './AddWorkerPopup'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export class WorkerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workers: workers,
            showAddWorkerPopup: false,
            showDeleteWorkerPopup: false,
            deleteWorker: null
        }
    }

    toggleDeleteWorkerPopup = (deleteWorker = null) => {
        this.setState({
            showDeleteWorkerPopup: !this.state.showDeleteWorkerPopup,
            deleteWorker: deleteWorker
        });
    }

    toggleAddWorkerPopup = () => {
        this.setState({
            showAddWorkerPopup: !this.state.showAddWorkerPopup
        });
    }

    deleteWorkerFunction = (deleteWorker) => {
        this.setState({
            workers: this.state.workers.filter(w => w !== deleteWorker)
        });
    }

    addWorkerFunction = (newWorker) => {
        this.setState({
            workers: [...this.state.workers, newWorker]
        });
    }

    modifyWorkerFunction = (modifyWorker) => {
        let index = this.state.workers.findIndex((worker) => worker.number === modifyWorker.number);
        let temp = [...this.state.workers];
        temp[index] = modifyWorker;
        this.setState({
            workers: temp
        });
    }

    renderWorkerList = () => {
        return this.state.workers.map((worker) =>
            <Worker
                worker={worker}
                key={worker.number}
                toggleDeleteWorkerPopup={this.toggleDeleteWorkerPopup}
                modifyWorkerFunction={this.modifyWorkerFunction}/>
        )
    }

    render() {
        return (
            <Fragment>
                <Button variant="primary" onClick={this.toggleAddWorkerPopup} className="margin-5 border-radius-25">+</Button>
                <DeleteWorkerPopup
                    showDeleteWorkerPopup={this.state.showDeleteWorkerPopup}
                    toggleDeleteWorkerPopup={this.toggleDeleteWorkerPopup}
                    deleteWorker={this.state.deleteWorker}
                    deleteWorkerFunction={this.deleteWorkerFunction} />
                <div className="row">
                    <div className={this.state.showAddWorkerPopup ? "col-lg-4" : ""}>
                        <AddWorkerPopup
                            showAddWorkerPopup={this.state.showAddWorkerPopup}
                            toggleAddWorkerPopup={this.toggleAddWorkerPopup}
                            addWorkerFunction={this.addWorkerFunction} />
                    </div>
                    <div className={this.state.showAddWorkerPopup ? "col-lg-8" : "col-lg-12"}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Team</th>
                                    <th>Title</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderWorkerList()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default WorkerList
