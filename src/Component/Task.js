import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'

export class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <tr>
                <Fragment>
                    <td>{this.props.task.id}</td>
                    <td>{this.props.task.name}</td>
                    <td>{this.props.task.detail}</td>
                    <td>{this.props.task.status}</td>
                    <td>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </td>
                </Fragment>
            </tr>
        )
    }
}

export default Task
