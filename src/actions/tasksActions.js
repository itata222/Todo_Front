export const addTaskAction = (task) => ({
    type: "ADD_TASK",
    task
});

export const deleteTaskAction=(id)=>({
    type:'DELETE_TASK',
    id
})

export const setTasksAction=(tasks)=>({
    type:'SET_TASKS',
    tasks
})

export const toggleTaskAction = (taskObj) => ({
    type: "TOGGLE_TASK",
    taskObj
});