import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const addTaskToDB = async (todo) => {
    try {
        const res = await Axios.put(developmentDB + "/create-todo", todo);
        console.log(res.data)
        return res.data;
    } catch (err) {
        return err.response.data.message;
    }
};
export const toggleTaskInDB = async (todo) => {
    try {
        const res = await Axios.patch(developmentDB + "/toggle-todo?id="+ todo._id);
        return res.data;
    } catch (err) {
        return err.response.data.message;
    }
};
export const deleteTaskFromDB = async (todo) => {
    try {
        const res = await Axios.delete(developmentDB + "/delete-todo?id="+todo._id);
        return res.data;
    } catch (err) {
        return err.response.data.message;
    }
};
export const getAllTasksTFromDB = async () => {
    try {
        const res = await Axios.get(developmentDB + "/get-todo");
        return res.data;
    } catch (err) {
        return err.response.data.message;
    }
};

