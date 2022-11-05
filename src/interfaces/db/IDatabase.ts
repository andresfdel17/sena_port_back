import { Sequelize } from "sequelize";

export interface connection {
    Sequelize: any;
    conection: Sequelize;
}