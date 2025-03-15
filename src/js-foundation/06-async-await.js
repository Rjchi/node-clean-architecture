/**
 * * Con async convertimos esta función en una función
 * * Asincrona
 *
 * @param {number} id ID del pokemon
 * @returns {string} Con el nombre del pokemon
 */
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await fetch(url);
  const pokemon = await response.json();

  return pokemon.name;
};

/**
 * --------------------------------------------------
 * * Aqui utilizamos el FETCH API desde /plugins
 * --------------------------------------------------
 */

const { httpClientPlugin } = require("../plugins");

const getPokemonById_ = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClientPlugin.get(url);

  return pokemon.name + " FETCH API";
};

module.exports = {
  getPokemonById,
  getPokemonById_,
};
