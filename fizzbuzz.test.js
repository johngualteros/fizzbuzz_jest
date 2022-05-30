const fizzbuzz = require('./fizzbuzz');
describe('fizzbuzz',()=>{
    test('Should print a error message if the argument not is a number',()=>{
        const expected="Invalid input Only can accept numbers";
        const result=fizzbuzz("20");
        expect(result).toBe(expected);
    });
    test('Should print 0 if they recive 0',()=>{
        const expected = 0;
        const result = fizzbuzz(0);
        expect(result).toBe(expected);
    });
    test('Should print 1 if the recive 1',()=>{
        const expected=1;
        const result=fizzbuzz(1);
        expect(expected).toBe(result);
    });
    test('Shoul print fizz if they recive 3',()=>{
        const expected='Fizz';
        const result=fizzbuzz(3);
        expect(expected).toBe(result);
    });
    test('Shoul print buzz if they recive multiple of 3',()=>{
        const expected='Fizz';
        const result=fizzbuzz(6);
        expect(expected).toBe(result);
    });
    test('Shoul print buzz if they recive 5',()=>{
        const expected='Buzz';
        const result=fizzbuzz(5);
        expect(expected).toBe(result);
    });
    test('Shoul print buzz if they recive a multiple of 5',()=>{
        const expected='Buzz';
        const result=fizzbuzz(10);
        expect(expected).toBe(result);
    });
    test('Shoul print fizzbuzz if they recive a mulriples of 5 and 3',()=>{
        const expected='FizzBuzz';
        const result=fizzbuzz(15);
        expect(expected).toBe(result);
    });
});