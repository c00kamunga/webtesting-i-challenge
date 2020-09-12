const enhancer = require('./enhancer.js');
// test away!


describe('repair tests', () => {
    it('repair succeeds', () => {
        expect(enhancer.repair({
            name:'Cookamunga',
            durability: 99,
            enhancement: 16
        })).toEqual({
            name:'Cookamunga',
            durability: 100,
            enhancement: 16
        })
    })
})

describe('enhancement increases', () => {
    it('enhancement increases succeeds', () => {
        expect(enhancer.success({
            name: 'somnus',
            durability: 70,
            enhancement: 19
        })).toEqual({
            name: 'somnus',
            durability: 70,
            enhancement: 20
        })
    })

    it('enhancement stays the same', () => {
        expect(enhancer.success({
            name: 'somnus',
            durability: 70,
            enhancement: 20
        })).toEqual({
            name: 'somnus',
            durability:70,
            enhancement: 20
        })
    })
})

describe('fails', () => {
    it('durability - 5', () => {
        expect(enhancer.fail({
            name: 'somnus',
            durability: 70,
            enhancement: 10
        })).toEqual({
            name: 'somnus',
            durability: 65,
            enhancement: 10
        })
    })

    it('E - 1 and D - 10', () => {
        expect(enhancer.fail({
            name: 'somnus',
            durability: 70,
            enhancement: 17
        })).toEqual({
            name: 'somnus',
            durability: 60,
            enhancement: 16
        })
    })

    it('durability - 10', () => {
        expect(enhancer.fail({
            name: 'somnus',
            durability: 70,
            enhancement: 15
        })).toEqual({
            name: 'somnus',
            durability: 60,
            enhancement: 15
        })
    })
})