import axios from 'axios';


export const loadTaskApi = async () => {
    return await axios('http://localhost:8000/tasks');
};

export const createTaskApi = async (task) =>{
    return await axios.post('http://localhost:8000/tasks', task);
};

export const updateTaskApi = async (id, task) => {
    return await axios.put(`http://localhost:8000/tasks/${id}`, task)
}

export const deleteTaskApi = async (id) => {
    return await axios.delete(`http://localhost:8000/tasks/${id}`)
}