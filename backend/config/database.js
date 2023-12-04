import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3308
});

export default db;