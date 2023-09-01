var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var datas_exports = {};
__export(datas_exports, {
  createData: () => createData,
  data: () => data,
  datas: () => datas,
  deleteData: () => deleteData,
  updateData: () => updateData
});
module.exports = __toCommonJS(datas_exports);
var import_db = require("../../lib/db");
const datas = () => {
  return import_db.db.data.findMany();
};
const data = ({
  id
}) => {
  return import_db.db.data.findUnique({
    where: {
      id
    }
  });
};
const createData = ({
  input
}) => {
  return import_db.db.data.create({
    data: input
  });
};
const updateData = ({
  id,
  input
}) => {
  return import_db.db.data.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteData = ({
  id
}) => {
  return import_db.db.data.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createData,
  data,
  datas,
  deleteData,
  updateData
});
//# sourceMappingURL=datas.js.map
