import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface main_user_typesAttributes {
  id: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type main_user_typesPk = "id";
export type main_user_typesId = main_user_types[main_user_typesPk];
export type main_user_typesOptionalAttributes = "id" | "name" | "createdAt" | "updatedAt";
export type main_user_typesCreationAttributes = Optional<main_user_typesAttributes, main_user_typesOptionalAttributes>;

export class main_user_types extends Model<main_user_typesAttributes, main_user_typesCreationAttributes> implements main_user_typesAttributes {
  id!: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof main_user_types {
    return main_user_types.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_user_types',
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
