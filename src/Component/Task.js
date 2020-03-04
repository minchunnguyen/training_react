import React, { Component } from 'react'

export class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.task.id}</td>
                <td>{this.props.task.name}</td>
                <td>{this.props.task.detail}</td>
                <td>{this.props.task.status}</td>
            </tr>
        )
    }
}

export default Task
