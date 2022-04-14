import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const TaskModel = db.define('tasks', {
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING },
})

export default TaskModel;

