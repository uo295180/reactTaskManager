import { useNavigate } from 'react-router-dom';


let ListOfTasksComponent = (props) => {

    let { tasks, setTasks, setTaskSelected } = props
    let navigate = useNavigate();

    let onClickSelectedTask = (name) => {
        let foundTask = tasks.find(t => t.name == name)
        setTaskSelected(foundTask)
        navigate("/detailsTasks/" + name)
    }
    
    let onClickDeleteTask = (name) => {
        let tasksWithout = tasks.filter(t => t.name != name)
        setTasks(tasksWithout)
    }

    return (
        <div>
            <h1>List of Tasks</h1>
            <ul className='task-list'>
                { tasks.map( t => 
                <li key={t.name} onClick={ () => {onClickSelectedTask(t.name)}}>
                    {t.name}
                    <button className="delete-button" onClick={() => {onClickDeleteTask(t.name)}}>Delete</button>
                </li>) }
            </ul>
        </div>
    )
}

export default ListOfTasksComponent