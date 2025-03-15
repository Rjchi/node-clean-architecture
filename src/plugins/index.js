/**
 * !Este archivo es denominado archivo de barril, donde centralizamos
 * todas las importaciones de todos los archivos que estamos utilizando
 * en una carpeta, en este caso lo utilizamos para la carpeta plugins
 */

const { getUUID } = require("../plugins/uuid.plugin");
const { httpClientPlugin } = require("../plugins/http-client.plugin");

module.exports = {
  getUUID,
  httpClientPlugin,
};
