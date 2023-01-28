// Loaders
const expressLoader = require('./express')
const rabbitmqLoader = require(`./rabbitmq`)

// Init logger
const path = require(`path`)
const scriptName = path.basename(__filename)
const Logger = require('./logger')(scriptName);

module.exports = async ({ expressApp }) => {

  // Load rabbitmq settings
  // await rabbitmqLoader.startConnection()
  // await rabbitmqLoader.init()
  Logger.info(`✌️ Rabbitmq loaded`)

  // Load express server
  await expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded');
};
