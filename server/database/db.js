import { Sequelize } from "sequelize";

const db = new Sequelize('database_dividenz', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;