/**
 * * Este logger lo utilizamos para hacer seguimiento a todos los
 * * logs que se puedan generar en mi aplicación, es muy util
 * * particularmente en producción
 */

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    /**
     * ! nos genera un archivo con todos los logs, llamado error.log
     * ! y un archivo llamado combined.log con la configuración del logger
     */
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

/**
 * ! Aqui indicamos que vamos a imprimir los logs en consola
 */
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

module.exports = function buildLogger(service) {
  return {
    log: (msg) => {
      logger.log("info", { msg, service });
    },
  };
};
