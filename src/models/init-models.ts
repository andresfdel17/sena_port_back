import type { Sequelize } from "sequelize";
import { main_user_types as _main_user_types } from "./main_user_types";
import type { main_user_typesAttributes, main_user_typesCreationAttributes } from "./main_user_types";
import { main_users as _main_users } from "./main_users";
import type { main_usersAttributes, main_usersCreationAttributes } from "./main_users";

export {
  _main_user_types as main_user_types,
  _main_users as main_users,
};

export type {
  main_user_typesAttributes,
  main_user_typesCreationAttributes,
  main_usersAttributes,
  main_usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const main_user_types = _main_user_types.initModel(sequelize);
  const main_users = _main_users.initModel(sequelize);

  main_users.belongsTo(main_user_types, { as: "type", foreignKey: "type_id"});
  main_user_types.hasMany(main_users, { as: "main_users", foreignKey: "type_id"});

  return {
    main_user_types: main_user_types,
    main_users: main_users,
  };
}
