import './App.css';
import {useState, useRef, useEffect} from "react"
import DetailsOfTaskComponent from './Components/DetailsOfTaskComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  

  let [taskSelected, setTaskSelected] = useState({});

  let [tasks, setTasks] = useState([
    {
      name: "Task1",
      place: "School",
      priority: 0
    },
    {
      name: "Clean",
      place: "House",
      priority: 0
    }
  ])

  


  return (
      <div className="container">
        <n>
          <ul className='navbar'>
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/createTask">Add Task</Link></li>
            <li><Link to="/detailsTasks">Details of Task</Link></li>
          </ul>
        </n>
        <Routes>
          <Route path="/" element={
            <ListOfTasksComponent setTasks={setTasks} tasks={tasks} setTaskSelected={setTaskSelected} />
          }></Route>
          <Route path="/createTask" element={
            <CreateTaskComponent tasks={tasks} setTasks={setTasks}/>
          }></Route>
          <Route path="/detailsTasks/:name" element={
            <DetailsOfTaskComponent tasks={tasks}/>
          }></Route>
        </Routes>
        
      </div>
  );
}

export default App;
