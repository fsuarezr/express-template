// Get all events
const { queueOutputExpress } = require(`./consumers`)

// Init logger
const path = require(`path`)
const scriptName = path.basename(__filename)
const logger = require(`@loaders/logger`)(scriptName)

module.exports = async ({ channel }) => {
  logger.info(`✌️ Realizando consumers de las colas de RabbitMQ`)
  
  // Consumers RabbitMQ
  await queueOutputExpress({ channel })
}
