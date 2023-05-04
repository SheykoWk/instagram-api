const { assert } = require('chai')
const { it, describe } = require('mocha')
const uuid = require('uuid')

const { createUser } = require('../../../src/users/users.controllers')

describe('Suite de testing para el controlador de crear usuarios', () => {
    it('Deberia generar un error si le mandamos un obj vacio', (done) => {
        createUser({})
            .then((data) => {

            })
            .catch((err) => {
                assert.exists(err)
                done()
            })
    })

    it('Deberia generar un error si no le mandamos la propiedad password', (done) => {
        const userObj = {
            firstName: 'Sahid',
            lastName: 'kick',
            email: 'sahid.ayala@arkus.com',
            phone: '1231231232'
        }
        createUser(userObj)
            .then((data) => {

            })
            .catch((err) => {
                assert.exists(err)
                done()
            })
    })

    it('Deberia generar el usuario creado al pasarle todos los datos', (done) => {
        const userObj = {
            firstName: 'Sahid',
            lastName: 'kick',
            email: `${uuid.v4()}@arkus.com`,
            password: 'root',
            phone: '1231231232'
        }
        createUser(userObj)
            .then((data) => {
                assert.property(data, 'id')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
})




