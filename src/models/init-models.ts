import type { Sequelize } from "sequelize";
import { main_user_types as _main_user_types } from "./main_user_types";
import type { main_user_typesAttributes, main_user_typesCreationAttributes } from "./main_user_types";
import { main_users as _main_users } from "./main_users";
import type { main_usersAttributes, main_usersCreationAttributes } from "./main_users";
import { system_temp_pass as _system_temp_pass } from "./system_temp_pass";
import type { system_temp_passAttributes, system_temp_passCreationAttributes } from "./system_temp_pass";

export {
  _main_user_types as main_user_types,
  _main_users as main_users,
  _system_temp_pass as system_temp_pass,
};

export type {
  main_user_typesAttributes,
  main_user_typesCreationAttributes,
  main_usersAttributes,
  main_usersCreationAttributes,
  system_temp_passAttributes,
  system_temp_passCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const main_user_types = _main_user_types.initModel(sequelize);
  const main_users = _main_users.initModel(sequelize);
  const system_temp_pass = _system_temp_pass.initModel(sequelize);

  main_users.belongsTo(main_user_types, { as: "type", foreignKey: "type_id"});
  main_user_types.hasMany(main_users, { as: "main_users", foreignKey: "type_id"});

  return {
    main_user_types: main_user_types,
    main_users: main_users,
    system_temp_pass: system_temp_pass,
  };
}
