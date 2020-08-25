import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://192.168.1.5')

client.on('connect', () => {
  setInterval(() => {
    client.publish('URA/robo1/acao', 's')
    console.log('message sent')
  }, 2000)
})
