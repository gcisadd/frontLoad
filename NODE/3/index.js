const fs = require('fs')
const path = require('path')
const url = path.join(__dirname, '../2.txt')
fs.writeFile(url, '我是add', err => {
  if (err) console.log(err)
  else console.log('write success')
})
fs.readFile(url, (err, data) => {
  if (err) console.log(err)
  else console.log('read success')
  const str = data.toString()
  console.log(`data is ${str}`)
})