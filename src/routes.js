import WorkerList from "./Component/WorkerList";
import TaskList from "./Component/TaskList";

export const routes = [
  {
    name: 'WorkerList',
    path: '/',
    component: WorkerList,
    exact: true
  },
  {
    name: 'TaskList',
    path: '/:name/task',
    component: TaskList,
    exact: true
  }
]