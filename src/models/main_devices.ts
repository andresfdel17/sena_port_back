import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { main_users, main_usersId } from './main_users';

export interface main_devicesAttributes {
  id: number;
  owner_id?: number;
  user_id?: number;
  brand?: string;
  color?: string;
  serial_number?: string;
  details?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type main_devicesPk = "id";
export type main_devicesId = main_devices[main_devicesPk];
export type main_devicesOptionalAttributes = "id" | "owner_id" | "user_id" | "brand" | "color" | "serial_number" | "details" | "image" | "createdAt" | "updatedAt";
export type main_devicesCreationAttributes = Optional<main_devicesAttributes, main_devicesOptionalAttributes>;

export class main_devices extends Model<main_devicesAttributes, main_devicesCreationAttributes> implements main_devicesAttributes {
  id!: number;
  owner_id?: number;
  user_id?: number;
  brand?: string;
  color?: string;
  serial_number?: string;
  details?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // main_devices belongsTo main_users via owner_id
  owner!: main_users;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<main_users>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<main_users, main_usersId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<main_users>;
  // main_devices belongsTo main_users via user_id
  user!: main_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<main_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<main_users, main_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<main_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof main_devices {
    return main_devices.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_users',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_users',
        key: 'id'
      }
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    serial_number: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    details: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_devices',
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
        name: "owner",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "actualUser",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
