const { assert } = require('chai')
const { it, describe } = require('mocha')

const sum = (a, b) => a + b

describe('Testing unitario de prueba sobre mi funcion sum', () => {
    it('Deberia retornar 10 cuando le pasamos 8 y 2', () => {
        const result = sum(8, 2)
        assert.equal(result, 10)
    })

    it('Deberia retornar 22 cuando le pasamos 15 y 7', () => {
        const result = sum(15, 7)
        assert.equal(result, 22)
    })
})

