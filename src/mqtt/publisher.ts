import mqtt from 'mqtt'
import { myIp } from '../server'

const client = mqtt.connect(`mqtt://${myIp}`)

client.on('connect', () => {
  setInterval(() => {
    client.publish('URA/robo1/acao', 's')
    console.log('message sent')
  }, 2000)
})
