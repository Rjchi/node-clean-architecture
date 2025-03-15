/**
 * Factory Function es una funcion que devuelve una función,
 * en este caso le mandamos las dependencias como parametros
 */

/**
 * *Este es un ejemplo de como seria un Factory Function
 *
 * @param {string} getUUID Devuelve un UUID
 * @returns {object} Con el id - name - value
 */
const buildMakePerson = ({ getUUID }) => {
  return ({ name, value }) => {
    return {
      id: getUUID(),
      name: name,
      value: value,
    };
  };
};

module.exports = {
  buildMakePerson,
};
