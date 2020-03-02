import React, { Component } from 'react'
import Worker from './Worker'
import workers from '../workers'

export class WorkerList extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map((worker) =>
                        <Worker worker={worker} key={Worker.number} />
                    )}
                </tbody>
            </table>
        )
    }
}

export default WorkerList
