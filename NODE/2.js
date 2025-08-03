const fs = require('fs')
fs.writeFile('2.txt', 'hahaha', err => {
  if (err) console.log(err)
  else console.log('write success')
})
fs.readFile('2.txt', (err, data) => {
  if (err) console.log(err)
  else console.log('read success')
  const str = data.toString()
  console.log(`data is ${str}`)
})