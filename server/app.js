import express from "express";
import cors from 'cors';
import db from './database/db.js';
import TasksRoutes from './routes/TaskRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', TasksRoutes);

try{
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos');
}catch(error){
    console.log(error);
}


app.listen(8000, () => {
    console.log('Server running on port 8000');
})