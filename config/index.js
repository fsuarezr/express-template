const dotenv = require(`dotenv`)

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  port: parseInt(process.env.NODE_PORT, 10),

  verifyToken: process.env.VERIFY_TOKEN,

  /**
   * API configs
   */
  api: {
    prefix: '/api',
    routeService: process.env.ROUTE_SERVICE
  },

  /**
   * Used by winston logger
   */
   logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  messageError: process.env.ERROR_MESSAGE,
  

  /**
   * Environment External Services
   */
  services: {
    redisInterface: {
      host: process.env.REDIS_INTERFACE_HOST,
      routeCredentials: process.env.REDIS_INTERFACE_ROUTE_CREDENTIALS,
      routeProjects: process.env.REDIS_INTERFACE_ROUTE_PROJECTS
    },
    rabbitmq: {
      host: process.env.RABBITMQ_SERVICE_HOST,
      queueOutputExpress: process.env.RABBITMQ_QUEUE_OUTPUT_EXPRESS
    }

  }
}