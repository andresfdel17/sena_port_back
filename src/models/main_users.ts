import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { main_devices, main_devicesId } from './main_devices';
import type { main_user_types, main_user_typesId } from './main_user_types';

export interface main_usersAttributes {
  id: number;
  type_id?: number;
  lang?: string;
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type main_usersPk = "id";
export type main_usersId = main_users[main_usersPk];
export type main_usersOptionalAttributes = "id" | "type_id" | "lang" | "name" | "last_name" | "email" | "password" | "status" | "createdAt" | "updatedAt";
export type main_usersCreationAttributes = Optional<main_usersAttributes, main_usersOptionalAttributes>;

export class main_users extends Model<main_usersAttributes, main_usersCreationAttributes> implements main_usersAttributes {
  id!: number;
  type_id?: number;
  lang?: string;
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;

  // main_users belongsTo main_user_types via type_id
  type!: main_user_types;
  getType!: Sequelize.BelongsToGetAssociationMixin<main_user_types>;
  setType!: Sequelize.BelongsToSetAssociationMixin<main_user_types, main_user_typesId>;
  createType!: Sequelize.BelongsToCreateAssociationMixin<main_user_types>;
  // main_users hasMany main_devices via owner_id
  main_devices!: main_devices[];
  getMain_devices!: Sequelize.HasManyGetAssociationsMixin<main_devices>;
  setMain_devices!: Sequelize.HasManySetAssociationsMixin<main_devices, main_devicesId>;
  addMain_device!: Sequelize.HasManyAddAssociationMixin<main_devices, main_devicesId>;
  addMain_devices!: Sequelize.HasManyAddAssociationsMixin<main_devices, main_devicesId>;
  createMain_device!: Sequelize.HasManyCreateAssociationMixin<main_devices>;
  removeMain_device!: Sequelize.HasManyRemoveAssociationMixin<main_devices, main_devicesId>;
  removeMain_devices!: Sequelize.HasManyRemoveAssociationsMixin<main_devices, main_devicesId>;
  hasMain_device!: Sequelize.HasManyHasAssociationMixin<main_devices, main_devicesId>;
  hasMain_devices!: Sequelize.HasManyHasAssociationsMixin<main_devices, main_devicesId>;
  countMain_devices!: Sequelize.HasManyCountAssociationsMixin;
  // main_users hasMany main_devices via user_id
  user_main_devices!: main_devices[];
  getUser_main_devices!: Sequelize.HasManyGetAssociationsMixin<main_devices>;
  setUser_main_devices!: Sequelize.HasManySetAssociationsMixin<main_devices, main_devicesId>;
  addUser_main_device!: Sequelize.HasManyAddAssociationMixin<main_devices, main_devicesId>;
  addUser_main_devices!: Sequelize.HasManyAddAssociationsMixin<main_devices, main_devicesId>;
  createUser_main_device!: Sequelize.HasManyCreateAssociationMixin<main_devices>;
  removeUser_main_device!: Sequelize.HasManyRemoveAssociationMixin<main_devices, main_devicesId>;
  removeUser_main_devices!: Sequelize.HasManyRemoveAssociationsMixin<main_devices, main_devicesId>;
  hasUser_main_device!: Sequelize.HasManyHasAssociationMixin<main_devices, main_devicesId>;
  hasUser_main_devices!: Sequelize.HasManyHasAssociationsMixin<main_devices, main_devicesId>;
  countUser_main_devices!: Sequelize.HasManyCountAssociationsMixin;

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
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
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
