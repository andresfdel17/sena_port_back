import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { main_user_types, main_user_typesId } from './main_user_types';

export interface main_usersAttributes {
  id: number;
  type_id?: number;
  lang?: string;
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type main_usersPk = "id";
export type main_usersId = main_users[main_usersPk];
export type main_usersOptionalAttributes = "id" | "type_id" | "lang" | "name" | "last_name" | "email" | "password" | "createdAt" | "updatedAt";
export type main_usersCreationAttributes = Optional<main_usersAttributes, main_usersOptionalAttributes>;

export class main_users extends Model<main_usersAttributes, main_usersCreationAttributes> implements main_usersAttributes {
  id!: number;
  type_id?: number;
  lang?: string;
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // main_users belongsTo main_user_types via type_id
  type!: main_user_types;
  getType!: Sequelize.BelongsToGetAssociationMixin<main_user_types>;
  setType!: Sequelize.BelongsToSetAssociationMixin<main_user_types, main_user_typesId>;
  createType!: Sequelize.BelongsToCreateAssociationMixin<main_user_types>;

  static initModel(sequelize: Sequelize.Sequelize): typeof main_users {
    return main_users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_user_types',
        key: 'id'
      }
    },
    lang: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_users',
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
      {
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
  }
}
