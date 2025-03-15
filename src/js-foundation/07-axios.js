const { httpAxios } = require("../plugins");

const getPokemonByIdAxios = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpAxios.get(url);

  return pokemon.name;
};

module.exports = {
  getPokemon: getPokemonByIdAxios,
};
