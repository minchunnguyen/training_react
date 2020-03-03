import React, { Component, Fragment } from 'react'
import teams from '../Contanst/team'
import titles from '../Contanst/title'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class Worker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openModifyWorker: false,
            modifyWorker: null
        }
    }

    componentWillMount() {
        this.setState({
            modifyWorker: {
                number: 20
            }
        });
    }

    toggleModifyWorker = () => {
        this.setState({
            openModifyWorker: !this.state.openModifyWorker
        })
    }

    modifyWorkerFunction = (worker) => {
        alert('Modify ' + worker.name);
    }

    render() {
        var teamRender = teams.map(team => <option key={team.code}>{team.name}</option>);
        var titleRender = titles.map(title => <option key={title.code}>{title.label}</option>);
        var functionButton = this.state.openModifyWorker ? (
            <Fragment>
                <Button variant="secondary" onClick={this.toggleModifyWorker}>Cancel</Button>
                <Button variant="primary" onClick={() => this.modifyWorkerFunction(this.props.worker)}>Modify</Button>
            </Fragment>
        ) : (
                <Fragment>
                    <Button variant="primary" onClick={this.toggleModifyWorker}>Modify</Button>
                    <Button variant="danger" onClick={() => this.props.toggleDeleteWorkerPopup(this.props.worker)}>Delete</Button>
                </Fragment>
            );
        return (
            <tr>
                <th>
                    {!this.state.openModifyWorker ? this.props.worker.number : (
                        <Form.Group controlId="formWorkerNumber">
                            <Form.Control type="number" placeholder="Enter number" value={this.state.modifyWorker.number} />
                        </Form.Group>)}
                </th>
                <th>
                    {!this.state.openModifyWorker ? this.props.worker.name : (
                        <Form.Group controlId="formWorkerName">
                            <Form.Control type="name" placeholder="Enter name" value={this.state.modifyWorker.name} />
                        </Form.Group>)}
                </th>
                <th>
                    {!this.state.openModifyWorker ? this.props.worker.gender : (
                        <Fragment>
                            <Form.Group controlId="formWorkerGender" checked={this.state.modifyWorker.gender}>
                                <Form.Check type="radio" label="Male" name="gender" value="Male" />
                                <Form.Check type="radio" label="Female" name="gender" value="Female" />
                            </Form.Group>
                        </Fragment>)}
                </th>
                <th>
                    {!this.state.openModifyWorker ? this.props.worker.team : (
                        <Form.Group controlId="formWorkerTeam">
                            <Form.Control as="select" value={this.state.modifyWorker.team}>
                                {teamRender}
                            </Form.Control>
                        </Form.Group>)}
                </th>
                <th>
                    {!this.state.openModifyWorker ? this.props.worker.title : (
                        <Form.Group controlId="formWorkerTitle">
                            <Form.Control as="select" value={this.state.modifyWorker.title}>
                                {titleRender}
                            </Form.Control>
                        </Form.Group>)}
                </th>
                <th>...</th>
                <th>
                    {functionButton}
                </th>
            </tr>
        )
    }
}

export default Worker
