import type { Sequelize } from "sequelize";
import { main_brands as _main_brands } from "./main_brands";
import type { main_brandsAttributes, main_brandsCreationAttributes } from "./main_brands";
import { main_devices as _main_devices } from "./main_devices";
import type { main_devicesAttributes, main_devicesCreationAttributes } from "./main_devices";
import { main_user_types as _main_user_types } from "./main_user_types";
import type { main_user_typesAttributes, main_user_typesCreationAttributes } from "./main_user_types";
import { main_users as _main_users } from "./main_users";
import type { main_usersAttributes, main_usersCreationAttributes } from "./main_users";
import { system_temp_pass as _system_temp_pass } from "./system_temp_pass";
import type { system_temp_passAttributes, system_temp_passCreationAttributes } from "./system_temp_pass";

export {
  _main_brands as main_brands,
  _main_devices as main_devices,
  _main_user_types as main_user_types,
  _main_users as main_users,
  _system_temp_pass as system_temp_pass,
};

export type {
  main_brandsAttributes,
  main_brandsCreationAttributes,
  main_devicesAttributes,
  main_devicesCreationAttributes,
  main_user_typesAttributes,
  main_user_typesCreationAttributes,
  main_usersAttributes,
  main_usersCreationAttributes,
  system_temp_passAttributes,
  system_temp_passCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const main_brands = _main_brands.initModel(sequelize);
  const main_devices = _main_devices.initModel(sequelize);
  const main_user_types = _main_user_types.initModel(sequelize);
  const main_users = _main_users.initModel(sequelize);
  const system_temp_pass = _system_temp_pass.initModel(sequelize);

  main_users.belongsTo(main_user_types, { as: "type", foreignKey: "type_id"});
  main_user_types.hasMany(main_users, { as: "main_users", foreignKey: "type_id"});
  main_devices.belongsTo(main_users, { as: "owner", foreignKey: "owner_id"});
  main_users.hasMany(main_devices, { as: "main_devices", foreignKey: "owner_id"});
  main_devices.belongsTo(main_users, { as: "user", foreignKey: "user_id"});
  main_users.hasMany(main_devices, { as: "user_main_devices", foreignKey: "user_id"});

  return {
    main_brands: main_brands,
    main_devices: main_devices,
    main_user_types: main_user_types,
    main_users: main_users,
    system_temp_pass: system_temp_pass,
  };
}
