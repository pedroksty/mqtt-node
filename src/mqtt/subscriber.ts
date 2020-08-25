import mqtt from 'mqtt'
import { myIp } from '../server'

const client = mqtt.connect(`mqtt://${myIp}`)

client.on('connect', () => {
  client.subscribe('URA/robo1/acao')
})

client.on('message', function (topic, message) {
  const context = message.toString()
  console.log(context)
})
