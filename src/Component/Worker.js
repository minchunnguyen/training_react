import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import ModifyWorkerPopup from './ModifyWorkerPopup'
import { Link } from "react-router-dom";

export class Worker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModifyWorkerPopup: false
        }
    }

    toggleModifyWorkerPopup = () => {
        this.setState({
            showModifyWorkerPopup: !this.state.showModifyWorkerPopup
        })
    }

    render() {
        var { modifyWorkerFunction, worker } = this.props;
        var { showModifyWorkerPopup } = this.state;
        return !showModifyWorkerPopup ? (
            <tr>
                <th>{worker.number}</th>
                <th>{worker.name}</th>
                <th>{worker.gender}</th>
                <th>{worker.team}</th>
                <th>{worker.title}</th>
                <th><Link to={`/${worker.name}/task`}>...</Link></th>
                <th>
                    <Button variant="primary" onClick={this.toggleModifyWorkerPopup}>Modify</Button>
                    <Button variant="danger" onClick={() => this.props.toggleDeleteWorkerPopup(worker)}>Delete</Button>
                </th>
            </tr>
        ) : (
                <ModifyWorkerPopup
                    modifyWorker={worker}
                    showModifyWorkerPopup={this.state.showModifyWorkerPopup}
                    toggleModifyWorkerPopup={this.toggleModifyWorkerPopup}
                    modifyWorkerFunction={modifyWorkerFunction} />
            )
    }
}

export default Worker
