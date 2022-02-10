import thisNet from './findNet'
import lazyOutline from '@koihii/lazy-outline'

function showOutline(port: number) {
  const standardLog = [
    'Your server is running on:',
    `    Local:            http://localhost:${port}`,
    `    On Your Network:  http://${thisNet['eth0']}:${port}`,
  ]

  lazyOutline(standardLog)
}

function noShowOutline(port: number) {
  const standardLog = [
    '\nYour server is running on:',
    `  Local:            http://localhost:${port}`,
    `  On Your Network:  http://${thisNet['eth0']}:${port}\n`,
  ]

  for (let i = 0; i < 3; i++) {
    console.log(standardLog[i])
  }
  return
}

function lazyNet(port: number, outline = false) {
  if (outline) return showOutline(port)
  return noShowOutline(port)
}

export default lazyNet
