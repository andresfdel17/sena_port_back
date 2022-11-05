import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { main_users, main_usersId } from './main_users';

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

  // main_user_types hasMany main_users via type_id
  main_users!: main_users[];
  getMain_users!: Sequelize.HasManyGetAssociationsMixin<main_users>;
  setMain_users!: Sequelize.HasManySetAssociationsMixin<main_users, main_usersId>;
  addMain_user!: Sequelize.HasManyAddAssociationMixin<main_users, main_usersId>;
  addMain_users!: Sequelize.HasManyAddAssociationsMixin<main_users, main_usersId>;
  createMain_user!: Sequelize.HasManyCreateAssociationMixin<main_users>;
  removeMain_user!: Sequelize.HasManyRemoveAssociationMixin<main_users, main_usersId>;
  removeMain_users!: Sequelize.HasManyRemoveAssociationsMixin<main_users, main_usersId>;
  hasMain_user!: Sequelize.HasManyHasAssociationMixin<main_users, main_usersId>;
  hasMain_users!: Sequelize.HasManyHasAssociationsMixin<main_users, main_usersId>;
  countMain_users!: Sequelize.HasManyCountAssociationsMixin;

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
