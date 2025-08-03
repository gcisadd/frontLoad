const fs = require('fs').promises
const path = require('path')

async function readFile() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'public/index.html'))
    const str = data.toString()
    const result = str.replace(/[\r\n]/g, '')
    fs.writeFile(path.join(__dirname, 'dist/index.html'), result)
  } catch (err) {
    console.log(err)
  }
}

readFile()