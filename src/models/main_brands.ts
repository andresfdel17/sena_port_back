import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface main_brandsAttributes {
  id: number;
  brand?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type main_brandsPk = "id";
export type main_brandsId = main_brands[main_brandsPk];
export type main_brandsOptionalAttributes = "id" | "brand" | "createdAt" | "updatedAt";
export type main_brandsCreationAttributes = Optional<main_brandsAttributes, main_brandsOptionalAttributes>;

export class main_brands extends Model<main_brandsAttributes, main_brandsCreationAttributes> implements main_brandsAttributes {
  id!: number;
  brand?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof main_brands {
    return main_brands.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_brands',
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
