const fs = require('fs')


const user = {
  id: 1,
  name: 'clara ',
  age: 19
}

const data = JSON.stringify(user)

fs.writeFile('user.json', data, err => {
  if (err) {
    throw err
  }
  console.log('JSON data is saved.')
})