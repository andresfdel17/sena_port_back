import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface system_temp_passAttributes {
  id: number;
  email?: string;
  code?: number;
  due_date?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type system_temp_passPk = "id";
export type system_temp_passId = system_temp_pass[system_temp_passPk];
export type system_temp_passOptionalAttributes = "id" | "email" | "code" | "due_date" | "createdAt" | "updatedAt";
export type system_temp_passCreationAttributes = Optional<system_temp_passAttributes, system_temp_passOptionalAttributes>;

export class system_temp_pass extends Model<system_temp_passAttributes, system_temp_passCreationAttributes> implements system_temp_passAttributes {
  id!: number;
  email?: string;
  code?: number;
  due_date?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof system_temp_pass {
    return system_temp_pass.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'system_temp_pass',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
