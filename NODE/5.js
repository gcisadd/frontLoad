const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World')
})
server.listen(3000, () => {
  console.log('Server listening at http://127.0.0.1:3000')
})