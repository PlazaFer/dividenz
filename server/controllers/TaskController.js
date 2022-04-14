import TaskModel from "../models/TaskModel.js";

// Methods

// show all tasks
export const getAllTasks = async (req, res) => {
    try{
        const response = await TaskModel.findAll()
         res.send(response);
    }catch (error){
        res.send({message: error.message})
    }
}

// show a task
export const getTask = async (req, res) => {
    try{
        const response = await TaskModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.send(response[0]);
    }catch (error){
        res.send({message: error.message})
    }
}


// create a task
export const createTask = async (req, res) => {
    try{
        const validation = await TaskModel.findOne({
            where: {
                title: req.body.title
            }
        });
        
        if(validation){
            res.send({
                message: 'Ya existe una nota con ese titulo.'
            })
        }else{
             await TaskModel.create(req.body)
            res.send({
                status: 'ok',
                message: 'La nota se creo correctamente.'
            });
        }

    }catch (error){
        res.send({message: error.message})
    }
}

// update a task
export const updateTask = async (req, res) => {
    try{
        const validation = await TaskModel.findOne({
            where: {
                title: req.body.title
            }
        })

        if(validation){
            res.send({message: 'Ya existe una nota con ese nombre'})
        }else{
             await TaskModel.update(req.body,{
                where: {
                    id: req.params.id
                }
            })
            res.send({
                message: "Tarea actualizada corretamente"
            })
        }


    }catch (error){
        res.send({message: error.message})
    }
}


// delete a task
export const deleteTask = async (req, res) => {
    try{
        await TaskModel.destroy({
            where:{
                id: req.params.id
            }
        })
        res.send({
            message: "Tarea eliminada correctamente"
        })
    }catch (error){
        res.send({message: error.message})
    }
}