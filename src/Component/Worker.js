import React, { Component } from 'react'

export class Worker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <tr>
                <th>{this.props.worker.number}</th>
                <th>{this.props.worker.name}</th>
                <th>{this.props.worker.team}</th>
                <th>
                    <button type="button" className="btn btn-primary">Edit</button>{" "}
                    <button type="button" className="btn btn-danger">Remove</button>
                </th>
            </tr>
        )
    }
}

export default Worker
