'use strict';

const  {sum} = require('../calclibrary');

describe('Testing sum with integers',()=>{
    test('sum(1,1) returns 2', ()=>{
        expect(sum(1,1)).toBe(2)
    });

    test('sum(2,3) returns 5',()=>{
        expect(sum(2,3)).toBe(5);
    });

    const testValues = [
      // a, b, expected
        [-2, -4, -6],
        [-2, 4, 2],
        [2, -4, -2],
        [0, 0, 0],
        [0, 3, 3],
        [3, 0, 3],
        [0, -3, -3],
        [-3, 0, -3],
        [123, 200, 323]

    ];

    test.each(testValues)('sum(%s,%s) = %s', (a,b,expected)=>{
        expect(sum(a,b)).toBe(expected);
    })
});

describe('Testing sum with floats',()=>{
    const testValues=[
        // a, b,  expected
        [10, 11.5, 21.5],
        [2.5, 3, 5.5],
        [-2.5, 3, 0.5],
        [3, -2.5, 0.5],
        [-2.5, -2.5, -5.0],
        [-2.5, 2.5, 0],
        [2.4, -2.5, -0.1]
    ];
    test.each(testValues)('sum(%s,%s) = %s',(a,b,expected)=>{
        expect(sum(a,b)).toBeCloseTo(expected);
    });
});

describe('Testing parameter is missing',()=>{
    test('sum() throws an exception',()=>{
        expect(()=> sum()).toThrow('Parameter missing')
    });
    test('sum(1) throws an exception',()=>{
        expect(()=> sum(1)).toThrow('Parameter missing')
    });

    describe('Testing with test.each',()=>{
        const testValues=[
            [1],
            ['a'],
            ['']
        ];
        test.each(testValues)('sum(%s) throws "parameter missing"',(a)=>{
            expect(()=>sum(a)).toThrow('Parameter missing')
        })
    })
})