import { useState } from "react"
import { useNavigate } from "react-router-dom";

let CreateTaskComponent = (props) => {
    let {tasks, setTasks} = props

    let [name,setName] = useState("");
    let [place, setPlace] = useState("");
    let [priority, setPriority] = useState(0);

    let navigate = useNavigate();

    let addTask = () => {
        let newTask = {
            name: name,
            place: place,
            priority: priority
        }
        setTasks([...tasks, newTask])
        setName("");
        setPlace("");
        setPriority("");
        navigate("/")
    }
    
    return(
        <div className='task-form'>
            <h2>Add task</h2>
            <input type="text" placeholder="name" value={name} onChange={(e) => {setName(e.currentTarget.value)}}></input>
            <input type="text" placeholder="place" value={place} onChange={(e) => {setPlace(e.currentTarget.value)}}></input>
            <input type="number" placeholder="priority" value={priority} onChange={(e) => {setPriority(e.currentTarget.value)}}></input>
            <button onClick={addTask}> Add task </button>
        </div>
    )
} 

export default CreateTaskComponent