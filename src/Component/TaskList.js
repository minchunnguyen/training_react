import React, { Component } from 'react'
import Task from './Task'
import tasks from '../Contanst/tasks'
import AddTaskPopup from './AddTaskPopup'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import tasklist from '../Contanst/tasklist'

export class TaskList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showAddTaskPopup: false,
         workerId: props.match.params.name
      }
   }

   renderTaskList() {
      const tasks = tasklist.filter(task => task.name === this.state.workerId);
      const tasklistData = tasks.length > 0 ? tasks[0].tasks : [];
      return tasklistData.map((task) =>
         <Task task={task} key={Task.id} />
      )
   }

   renderTaskListHeader() {
      let header = Object.keys(tasks[0]);
      header.push('');
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   toggleAddTaskPopup = () => {
      this.setState({
         showAddTaskPopup: !this.state.showAddTaskPopup
      });
   }

   render() {
      return (
         <div>
            <div>
               <h2>TASK LIST </h2>
               <Button variant="primary" onClick={this.toggleAddTaskPopup} className="margin-5 border-radius-25">+</Button>
            </div>
            <div class="row">
               <div className={this.state.showAddTaskPopup ? "col-lg-4" : ""}>
                  {this.state.showAddTaskPopup ?
                     <AddTaskPopup
                        showAddTaskPopup={this.state.showAddTaskPopup}
                        toggleAddTaskPopup={this.toggleAddTaskPopup}
                     />
                     : null
                  }
               </div>
               <div className={this.state.showAddTaskPopup ? "col-lg-8" : "col-lg-12"}>
                  <Table striped bordered hover>
                     <thead>
                        <tr>
                           {this.renderTaskListHeader()}
                        </tr>
                     </thead>
                     <tbody>
                        {this.renderTaskList()}
                     </tbody>
                  </Table>
               </div>
            </div>
         </div>
      )
   }

}

export default TaskList
