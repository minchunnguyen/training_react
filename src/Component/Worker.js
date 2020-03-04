import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import ModifyWorkerPopup from './ModifyWorkerPopup'

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
        var { modifyWorkerFunction } = this.props;
        return (
            <tr>
                {!this.state.showModifyWorkerPopup ? (
                    <Fragment>
                        <th>{this.props.worker.number}</th>
                        <th>{this.props.worker.name}</th>
                        <th>{this.props.worker.gender}</th>
                        <th>{this.props.worker.team}</th>
                        <th>{this.props.worker.title}</th>
                        <th>...</th>
                        <th>
                            <Button variant="primary" onClick={this.toggleModifyWorkerPopup}>Modify</Button>
                            <Button variant="danger" onClick={() => this.props.toggleDeleteWorkerPopup(this.props.worker)}>Delete</Button>
                        </th>
                    </Fragment>
                ) : (
                        <ModifyWorkerPopup
                            modifyWorker={this.props.worker}
                            showModifyWorkerPopup={this.state.showModifyWorkerPopup}
                            toggleModifyWorkerPopup={this.toggleModifyWorkerPopup}
                            modifyWorkerFunction={modifyWorkerFunction} />
                    )}
            </tr>
        )
    }
}

export default Worker
