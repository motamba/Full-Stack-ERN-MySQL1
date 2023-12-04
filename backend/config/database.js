import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', '', {
    DB_HOST: "localhost",
    DIALECT: "mysql",
    DB_NAME: "mern_db",
    PORT: 3308
});

export default db;