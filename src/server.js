/**
 * ----------------------
 * * CALLBACKS
 * ----------------------
 */

// const { getUser } = require("./js-foundation/03-Callbacks");

// getUser(4, function (error, user) {
//   if (error) {
//     throw new Error(error);
//   } else {
//     console.log(user);
//   }
// });

/**
 * ----------------------
 * * FACTORY FUNCTIONS
 * ----------------------
 */

// const { getUUID } = require("./plugins")

// const { buildMakePerson } = require("./js-foundation/04-factory");

// Esta seria la función interna del FACTORY FUNCTION
// const makePerson = buildMakePerson({ getUUID });

// const user = makePerson({ name: "Rosa", value: "Otro valor" });

// console.log(user);

/**
 * ----------------------
 * * PROMESAS
 * ----------------------
 */

// const { getPokemonById } = require("./js-foundation/05-promesas");

// getPokemonById(1)
//   .then((pokem) => console.log({ pokem }))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finalmente"));

/**
 * ----------------------
 * * ASYNC - AWAIT
 * ----------------------
 */

// const {
//   getPokemonById,
//   getPokemonById_,
// } = require("./js-foundation/06-async-await");

// getPokemonById(2)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log(`Hubo un error: ${err}`));

// getPokemonById_(2)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log(`Hubo un error: ${err}`));

/**
 * ------------------------
 * * AXIOS
 * ------------------------
 */

// const { getPokemon } = require("./js-foundation/07-axios");

// getPokemon(4).then((pokemon) => console.log({ pokemon }));

/**
 * ------------------------
 * * LOGGER - WINSTON
 * ------------------------
 */

const { buildLogger } = require("./plugins");

/** server.js es el archivo/servicio que estoy mandando a llamar */
const logger = buildLogger("server.js");

logger.log("Hola mundo")
logger.error("Esto es algo malo")