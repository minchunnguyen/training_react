import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import WorkerList from './Component/WorkerList'
import NavBar from './Layout/NavBar'

function App() {
  return (
    <div className="container">
      <NavBar />
      <WorkerList />
    </div>
  );
}

export default App;
