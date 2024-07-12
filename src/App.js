import './App.css';
import {useState, useRef, useEffect} from "react"

function App() {
  let [name,setName] = useState("");
  let [place, setPlace] = useState("");
  let [priority, setPriority] = useState(0);

  let nameRef = useRef("");
  let placeRef = useRef("");
  let priorityRef = useRef(0);

  let formRef = useRef();

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

  let addTask = () => {
    let newTask = {
      name: name,
      place: place,
      priority: priority
    }
    setTasks([...tasks, newTask])
  }

  let addTaskWithRefs = () => {
    let newTask = {
      name: nameRef.current.value,
      place: placeRef.current.value,
      priority: priorityRef.current.value
    }
    setTasks([...tasks, newTask])
    nameRef.current.value = "";
    placeRef.current.value = "";
    priorityRef.current.value = "";
  }

  let addTaskWithFormRef = () => {
    let formData = new FormData(formRef.current);
    let newTask = {
      name: formData.get("name"),
      place: formData.get("place"),
      priority: formData.get("priority")
    }
    setTasks([...tasks, newTask])
  }

  return (
      <div>
        <h2>Add task</h2>
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="place" ></input>
        <input type="number" placeholder="priority"></input>
        <button onClick={addTask}> Add task </button>

        <h2>Add tasks Ref</h2>
        <input ref={nameRef} type="text" placeholder="name" onChange={(e) => { setName(e.currentTarget.value) }}></input>
        <input ref={placeRef} type="text" placeholder="place" onChange={(e) => { setPlace(e.currentTarget.value) }}></input>
        <input ref={priorityRef} type="number" placeholder="priority" onChange={(e) => { setPriority(parseInt(e.currentTarget.value)) }}></input>
        <button onClick={addTaskWithRefs}> Add task </button>

        <h2>Add tasks Form Ref</h2>
        <form ref={formRef}>
          <input name="name" type="text" placeholder="name" onChange={(e) => { setName(e.currentTarget.value) }}></input>
          <input name="place" type="text" placeholder="place" onChange={(e) => { setPlace(e.currentTarget.value) }}></input>
          <input name="priority" type="number" placeholder="priority" onChange={(e) => { setPriority(parseInt(e.currentTarget.value)) }}></input>
        </form>
        <button onClick={addTaskWithFormRef}> Add task </button>
        
        <ul>
          { tasks.map( t => 
          <li>
            <b>{t.name}</b>
            <div>Priority: {t.priority}</div>
            <div>{t.place}</div>
          </li>) }
        </ul>
      </div>
  );
}

export default App;
