/**
 * !Aqui estamos haciendo uso del patron adaptador, el patron adaptador lo
 * utilizamos para que no haya problemas cuando tengamos que remover
 * una dependencia o cambiar una dependencia, la dependencia que vamos
 * a utilizar como ejemplo es uuid, uuid solo lo vamos a utilizar en este
 * archivo y en caso de necesitar cambiarlo solo lo vamos a cambiar en
 * este archivo
 */

const { v4: uuidv4 } = require("uuid");

/**
 * Genera un identificador unico universal y aleatorio
 *
 * @returns {string} Un UUID v4
 */
const getUUID = () => {
  return uuidv4();
};

module.exports = {
  getUUID,
};
