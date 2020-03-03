import React, { Component } from 'react'
// import taks from '../tasks'

export class Tasks extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         tasks: [
            { id: 1, 
               name: 'Design the solution', 
               detail: 'Define users and workflow', 
               status: 'To Do' },
            { id: 2, 
               name: 'Prepare for implementation', 
               detail: 'Identify the implementation team.', 
               status: 'Doing' },
            { id: 3, 
               name: 'Prepare the test/QA environment', 
               detail: 'Install test and QA servers and prerequisite software.', 
               status: 'Done' },
            { id: 4, 
               name: 'Install the product in the test/QA environment.', 
               detail: 'Install Business Systems Manager and appropriate patches on test or QA servers.', 
               status: 'To Do' },
            { id: 5, 
               name: 'Implement a business system in the test/QA environment..', 
               detail: 'Design a relatively simple business system.', 
               status: 'To Do' }
         ]
      }
   }
  
   renderTaskList() {
    return this.state.tasks.map((tasks, index) => {
       const { id, name, detail, status } = tasks 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{detail}</td>
             <td>{status}</td>
          </tr>
       )
    })
  }
  
  renderTaskListHeader() {
    let header = Object.keys(this.state.tasks[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  
  render() {
    return (
       <div class="table-responsive">
          <h2 id='title'>LIST TASK</h2>
          <table className="table table-hover" id='tasks'>
          <thead class="table-primary">
            <tr>
               {this.renderTaskListHeader()}
            </tr>
            </thead>
             <tbody>
                {this.renderTaskList()}
             </tbody>
          </table>
       </div>
    )
  }

}

export default Tasks
