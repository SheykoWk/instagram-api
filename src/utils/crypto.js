const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
  const data = bcrypt.hashSync(plainPassword, 10)
  return data
}

const comparePassword = (plainPassword, hashedPassword) => {
  const data = bcrypt.compareSync(plainPassword, hashedPassword)
  return data
}

module.exports = {
  hashPassword,
  comparePassword
}