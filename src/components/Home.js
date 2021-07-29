import React, { useContext, useEffect, useState } from 'react';
import { addTaskAction, setTasksAction } from '../actions/tasksActions';
import { TasksContext } from '../contexts/tasksContext';
import { addTaskToDB, getAllTasksTFromDB } from '../services/taskService';
import Button from './Button';
import Modal from './Modal';
import Spinner from './Spinner';
import Task from './Task';

const Home = () => {
    const [taskContent, setTaskContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const {tasksData,dispatchTasksData}=useContext(TasksContext)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    useEffect(() => {
        setShowSpinner(true)
        getAllTasksTFromDB().then((res)=>{
            setShowSpinner(false)
            dispatchTasksData(setTasksAction(res))
        })
        
    }, [dispatchTasksData])

    const submitTask=(e)=>{
        e.preventDefault();
        if(taskContent.length>0){
            setShowSpinner(true);
            setTaskContent('')
            addTaskToDB({task:taskContent,complete:false}).then((res)=>{
                dispatchTasksData(addTaskAction(res))
                setShowSpinner(false)
                setShowModal(true);
            }).catch(e=>alert(e))
        }
        else{
            setShowErrorMessage(true)
        }
    }

    

    
    return (
        <div className="home">
            {showSpinner&&<Spinner />}
            {showModal&&<Modal text="Task Added" setShowModal={setShowModal}/>}
            <h2>TODO List</h2>

            <div>Current Tasks : {tasksData.length}</div>
            <div className="todoContainer">
                {
                    tasksData.length>0?
                    tasksData.map((task,i)=>(
                        <Task key={`${task}${i}`} task={task}/>
                        )):
                    <div>Your list is empty</div>
                }
            </div>
            <form className="todoForm" onSubmit={submitTask}>
                <input 
                    type="text" 
                    placeholder="Write your task..."
                    value={taskContent}
                    onChange={(e)=>{
                        if(e.target.value.length>0)
                            setShowErrorMessage(false)
                        setTaskContent(e.target.value)
                    }}
                />
                {showErrorMessage&&<div className="errorMessage">Task cant be empty</div>}
                <Button 
                    className="addTaskButton"
                    content={'Add Task'} 
                    backgroundColor={'#1ebcf5'} 
                    color={'#FFFFFF'}/>
            </form>
        </div>
    )
}

export default Home
