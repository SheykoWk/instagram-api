const Users = require('../models/users.models')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

const findAllUsers = async () => {
  const users = await Users.findAll()
  return users
}

const findUserById = async (id) => {
  const data = await Users.findOne({
      where: {
          id: id,
      }
  })
  return data
}

const findUserByEmail = async (email) => {
  const data = await Users.findOne({
      where: {
          email : email
      }
  })
  return data
}

const createUser = async(userObject) => {
  const newUser = {
    id: uuid.v4(),
    firstName: userObject.firstName,
    lastName: userObject.lastName,
    email: userObject.email,
    password: hashPassword(userObject.password),
    birthday: userObject.birthday,
    phone: userObject.phone
  }
  const data = await Users.create(newUser)
  return data
}

const updateUser = async(id, userObj) => {

  const selectedUser = await Users.findOne({
      where: {
          id: id
      }
  })
  
  if(!selectedUser) return null

  const modifiedUser = await selectedUser.update(userObj)
  return modifiedUser
}

const deleteUser = async(id) => {
  const user = await Users.destroy({
      where: {
          id: id
      }
  })
  return user // 1 || 0
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail
}