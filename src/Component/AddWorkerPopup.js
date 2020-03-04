import React, { Component, Fragment } from 'react'
import teams from '../Contanst/team'
import titles from '../Contanst/title'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class AddWorkerPopup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newWorker: {
                number: null,
                name: null,
                gender: null,
                team: null,
                title: null
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        var { showAddWorkerPopup, toggleAddWorkerPopup, addWorkerFunction } = this.props;
        var teamRender = teams.map(team => <option key={team.code}>{team.name}</option>);
        var titleRender = titles.map(title => <option key={title.code}>{title.label}</option>);
        return (
            <Fragment>
                {showAddWorkerPopup === true &&
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formWorkerNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter number" onChange={
                                (event) => {
                                    this.setState({
                                        newWorker: {...this.state.newWorker, number: event.target.value}
                                    })
                                }
                            }/>
                        </Form.Group>
                        <Form.Group controlId="formWorkerName">
                            <Form.Label>Worker Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formWorkerGender">
                            <Form.Check type="radio" label="Male" name="gender" value="male" />
                            <Form.Check type="radio" label="Female" name="gender" value="female" />
                        </Form.Group>
                        <Form.Group controlId="formWorkerTeam">
                            <Form.Label>Team</Form.Label>
                            <Form.Control as="select">
                                {teamRender}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formWorkerTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control as="select">
                                {titleRender}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="secondary" onClick={toggleAddWorkerPopup}>Close</Button>
                        <Button variant="danger" onClick={() => addWorkerFunction(this.state.newWorker)}>Add</Button>
                    </Form>
                }
            </Fragment>
        )
    }
}

export default AddWorkerPopup
