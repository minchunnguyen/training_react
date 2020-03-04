import React, { Component } from 'react'
import Task from './Task'
import tasks from '../tasks'
import AddTaskPopup from './AddTaskPopup'
import Button from 'react-bootstrap/Button'

export class TaskList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showPopup: false
      }
   }

   renderTaskList() {
      return tasks.map((task) =>
         <Task task={task} key={Task.id} />
      )
   }

   renderTaskListHeader() {
      let header = Object.keys(tasks[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   togglePopup = () => {
      this.setState({
         showPopup: !this.state.showPopup
      });
   }

   render() {
      return (
         <div>
            <div>
               <h2>TASK LIST </h2>
               <Button variant="primary" onClick={this.togglePopup} className="margin-5 border-radius-25">+</Button>
            </div>
            <div class="row">
               <div className={this.state.showPopup ? "col-lg-4" : ""}>
                  {this.state.showPopup ?
                     <AddTaskPopup
                        showPopup={this.state.showPopup}
                        togglePopup={this.togglePopup}
                     />
                     : null
                  }
               </div>
               <div className={this.state.showPopup ? "col-lg-8" : "col-lg-12"}>
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
            </div>
         </div>
      )
   }

}

export default TaskList
