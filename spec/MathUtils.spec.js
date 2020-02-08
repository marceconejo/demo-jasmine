let MathUtils = require('../MathUtils')

describe('MathUtils', () => {
    let calc
    
	beforeEach(() => {
		calc = new MathUtils()
	})
	it('should calculate sum of 3 and 5 ➕', () => {
        expect(calc.sum(3, 5)).toEqual(8)
    })
    it('should multiply 10 and 40 ✖️', () => {
        expect(calc.multiply(10, 40)).toEqual(400)
    })
    it('should divide 6 and 2 ➗', () => {
        expect(calc.divide(6, 2)).toEqual(3)
    })
    it('should throw error when dividing by zero ❗', () => {
        expect(() => calc.divide(6, 0)).toThrowError('Forbidden operation')
    })
});