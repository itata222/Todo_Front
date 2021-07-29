import React , { useContext, useState }from 'react'
import {TasksContext} from '../contexts/tasksContext'
import { deleteTaskAction, toggleTaskAction } from '../actions/tasksActions';
import { deleteTaskFromDB ,toggleTaskInDB} from '../services/taskService';
import Modal from './Modal';


const Task = ({task}) => {
    const {dispatchTasksData}=useContext(TasksContext)
    const [showModal, setShowModal] = useState(false);

    const deleteTask=(e)=>{
        e.preventDefault();
        dispatchTasksData(deleteTaskAction(task._id))
        deleteTaskFromDB(task).then((res)=>{
            setShowModal(true)
        }).catch((e)=>console.log(e))
    }


    const taskClicked=(e)=>{
        toggleTaskInDB(task).then((res)=>{
            dispatchTasksData(toggleTaskAction(res))    
        }).catch((e)=>console.log(e))
    }


    return (
        <div className="task">
            {showModal&&<Modal text="Task Removed" setShowModal={setShowModal}/>}
            <div className={task.complete===true?"contentDone":"content"}>
                {task.task}
            </div>
            <input 
                type="checkbox"
                className="checkBox"
                onChange={taskClicked}
                checked={task.complete}
                >
            </input>
            <button 
                className="submitButton"
                onClick={deleteTask}
                >
                    Delete
            </button>
        </div>
    )
}

export default Task
