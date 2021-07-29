import React, { createContext, useReducer } from 'react';
import taskReducer, { tasksInitialState } from '../reducers/tasksReducer';

export const TasksContext = createContext();

const TasksContextProvider = (props) => {

    const [tasksData, dispatchTasksData] = useReducer(taskReducer, tasksInitialState );

    return (
        <TasksContext.Provider value={{ tasksData, dispatchTasksData }}>
            {props.children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;