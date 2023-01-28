const amqp = require(`amqplib`)
const config = require(`@config`)
const { rabbitmq } = config.services
const loadConsumers = require(`@/api/controllers/Rabbit`)

class Rabbitmq {
  constructor () {
    this.connected = false
    this.connection = null
    this.channel = null
  }

  async startConnection () {
    if (this.connected) return { channel: this.channel, connection: this.connection }
    else {
      this.connection = await amqp.connect(rabbitmq.host, { clientProperties: { connection_name: `express-service` } })
      this.channel = await this.connection.createChannel()
      this.connected = true

      return { channel: this.channel, connection: this.connection }
    }
  }

  getConnection () {
    return { channel: this.channel, connection: this.connection }
  }

  async init () {
    await loadConsumers({ channel: this.channel })
  }
}

module.exports = new Rabbitmq()
