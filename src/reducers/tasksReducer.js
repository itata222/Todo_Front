export const tasksInitialState = [];

const taskReducer = (tasks, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...tasks,action.task];
        case 'DELETE_TASK':
            const newTasks=tasks.filter(todo=>todo._id!==action.id)
            return [...newTasks]
        case 'SET_TASKS':
            return [...action.tasks]
        case 'TOGGLE_TASK':
            tasks.forEach(task => {
                if(task._id===action.taskObj._id)
                    task.complete=action.taskObj.complete
            });
            return [...tasks]
        default:
            return [ ...tasks ];
    }
};

export default taskReducer;