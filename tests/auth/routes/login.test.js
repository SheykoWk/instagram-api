const chai = require('chai')
const { it, describe } = require('mocha')
const chaiHttp = require('chai-http')

const app = require('../../../src/app')

chai.use(chaiHttp)

describe('Suite de test para los endpoints de login', () => {

    it('Deberia generar un status 400 cuando no le mandamos data', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .end((err, res) => {
                chai.assert.equal(res.status, 400)
                done()
            })
    })

    it('Deberia generar un token cuando le mandamos credenciales correctas', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .send({email: "sahid.kick@academlo.com", password: "root"})
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                chai.assert.property(res.body, 'token')
                chai.assert.typeOf(res.body, 'object')
                chai.assert.typeOf(res.body.token, 'string')
                done()
            })
    })

})


