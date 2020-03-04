import React, { Component, Fragment } from 'react'
import teams from '../Contanst/team'
import titles from '../Contanst/title'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class ModifyWorkerPopup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modifyWorker: this.props.modifyWorker
        }
    }


    render() {
        var { modifyWorkerFunction, toggleModifyWorkerPopup } = this.props;
        var teamRender = teams.map(team => <option key={team.code}>{team.name}</option>);
        var titleRender = titles.map(title => <option key={title.code}>{title.label}</option>);
        return (
            <Fragment>
                <th>
                    <Form.Group controlId="formWorkerNumber">
                        <Form.Control type="number" placeholder="Enter number" value={this.state.modifyWorker.number} disabled/>
                    </Form.Group>
                </th>
                <th>
                    <Form.Group controlId="formWorkerName">
                        <Form.Control type="text" placeholder="Enter name" value={this.state.modifyWorker.name}
                            onChange={(event) => {
                                this.setState({
                                    modifyWorker: { ...this.state.modifyWorker, name: event.target.value }
                                })
                            }} />
                    </Form.Group>
                </th>
                <th>
                    <Fragment>
                        <Form.Group controlId="formWorkerGender">
                            <Form.Check type="radio" label="Male" name="gender" value="Male" checked={this.state.modifyWorker.gender === 'Male'}
                                onChange={(event) => {
                                    this.setState({
                                        modifyWorker: { ...this.state.modifyWorker, gender: event.target.value }
                                    })
                                }}></Form.Check>
                            <Form.Check type="radio" label="Female" name="gender" value="Female" checked={this.state.modifyWorker.gender === 'Female'}
                                onChange={(event) => {
                                    this.setState({
                                        modifyWorker: { ...this.state.modifyWorker, gender: event.target.value }
                                    })
                                }}></Form.Check>
                        </Form.Group>
                    </Fragment>
                </th>
                <th>
                    <Form.Group controlId="formWorkerTeam">
                        <Form.Control as="select" value={this.state.modifyWorker.team}
                            onChange={(event) => {
                                this.setState({
                                    modifyWorker: { ...this.state.modifyWorker, team: event.target.value }
                                })
                            }}>
                            {teamRender}
                        </Form.Control>
                    </Form.Group>
                </th>
                <th>
                    <Form.Group controlId="formWorkerTitle">
                        <Form.Control as="select" value={this.state.modifyWorker.title}
                            onChange={(event) => {
                                this.setState({
                                    modifyWorker: { ...this.state.modifyWorker, title: event.target.value }
                                })
                            }}>
                            {titleRender}
                        </Form.Control>
                    </Form.Group>
                </th>
                <th>...</th>
                <th>
                    <Button variant="secondary" onClick={toggleModifyWorkerPopup}>Cancel</Button>
                    <Button variant="primary" onClick={() => {modifyWorkerFunction(this.state.modifyWorker); toggleModifyWorkerPopup()}}>Modify</Button>
                </th>
            </Fragment>
        )
    }
}

export default ModifyWorkerPopup
