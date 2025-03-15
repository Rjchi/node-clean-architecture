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

module.exports = {
  getPokemonById,
};
