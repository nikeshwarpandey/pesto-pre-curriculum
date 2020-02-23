
const describe = (desc, fn) => {
    console.log(desc)
    fn()
}

const it = (msg, fn) => describe(' ' + msg, fn)

const matchers = (exp) => ({
    toBe: (assertion) => {
        if (exp === assertion) {
            console.log('passed');
            return true
        } else {
            console.log('fail');
            return false
        }
    }
})

const expect = (exp) => matchers(exp)

// function adder(a, b) {
//     return a + b
// }

// describe('adder', () => {
//     it('adds two  numbers', () => {
//         const result = adder(1, 2)
//         expect(result).toBe(3)
//     })
// })

module.exports = {
    describe,
    expect,
    it,
    matchers
}


//add 
const add = (a, b) => a + b;

//subtract 
const subtract = (a, b) => a - b;

//divide
const divide = (a, b) => a / b;

//multiply
const multiply = (a, b) => a * b;

describe('add', () => {
    it('add two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    })
});

describe('subtracter', () => {
    it('subtract two numbers', () => {
        const result = subtract(3, 2);
        expect(result).toBe(1);
    })
});

describe('divider', () => {
    it('divide two numbers', () => {
        const result = divide(4, 2);
        expect(result).toBe(2);
    });
});

describe('multiplier', () => {
    it('multiply two numbers', () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    });
});