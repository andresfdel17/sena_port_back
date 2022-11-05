import { Sequelize } from "sequelize";
import { connection } from "../interfaces/db/IDatabase";
const db: connection = {
    Sequelize,
    conection: new Sequelize(process.env.DB_NAME as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
        host: process.env.DB_HOST,
        dialect: "mysql",
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        },
    })
}
export { db };