import './App.css';
import {useState, useRef, useEffect} from "react"
import DetailsOfTaskComponent from './Components/DetailsOfTaskComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={
            <ListOfTasksComponent setTasks={setTasks} tasks={tasks} setTaskSelected={setTaskSelected} />
          }></Route>
          <Route path="/createTask" element={
            <CreateTaskComponent tasks={tasks} setTasks={setTasks}/>
          }></Route>
          <Route path="/detailsTasks" element={
            <DetailsOfTaskComponent task={taskSelected}/>
          }></Route>
        </Routes>
        
      </div>
  );
}

export default App;
