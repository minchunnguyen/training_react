import React from 'react';
import NavBar from './Layout/NavBar'
import DefaultLayout from './Layout/DefaultLayout';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <NavBar />
      {/* <WorkerList /> */}
      {/* <TaskList /> */}
      <Router>
        <Switch>
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
