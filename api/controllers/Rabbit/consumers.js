
// Environment variables
const config = require(`@config`)
const { rabbitmq } = config.services
const { queueOutputExpress } = rabbitmq

// Init logger
const path = require(`path`)
const scriptName = path.basename(__filename)
const logger = require(`@loaders/logger`)(scriptName)

// Función que se encarga de estar como consumer de la cola output-express
exports.queueOutputExpress = ({ channel }) => {
  logger.info(`✌️ Consumiendo mensajes de las colas colas ${queueOutputExpress} de RabbitMQ`)

  try {
    // Obtener un mensaje al mismo tiempo
    channel.prefetch(1)

    // Consumir la cola principal del output-facebook
    channel.consume(queueOutputExpress, async function(msg) {
      // Obtener propiedades y parámetros
      const response = JSON.parse(msg.content.toString())
      const { data, user, credentials } = response

      try {

      logger.info("Insert your logic")

      } catch (error) {
        logger.error({ functionExec: `receive`, message: error.message })

        const messageError = getMessageError()
      }
    }, { exclusive: false, noAck: true })
  } catch (error) {
    logger.error(`⚠️ Error al consumir las colas ${queueOutputExpress} de RabbitMQ`)
    console.log(error)
    // Controlar errores
  }
}
