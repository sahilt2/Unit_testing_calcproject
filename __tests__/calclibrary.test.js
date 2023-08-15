'use strict';

const  {sum,substract} = require('../calclibrary');

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
});

describe('Testing parameters are not numbers',()=>{
    const testValues=[
        ['1','2'],
        ['a', 1],
        [1, 'a'],
        ['a', 'b'],
        ['', ''],

    ];
    test.each(testValues)('sum(%s,%s) throws "only numbers allowed"',(a,b)=>{
        expect(()=>sum(a,b)).toThrow('only numbers allowed')
    })
});

describe('Testing parameters are not numbers version 2',()=>{
    const testValues=[
        ["sum('1','2')",'1','2'],
        ["sum('a',1)",'a', 1],
        ["sum(1,'a')",1, 'a'],
        ["sum('a','b')",'a', 'b'],
        ["sum('','')",'', ''],

    ];
    test.each(testValues)('%s throws "only numbers allowed"',(label,a,b)=>{
        expect(()=>sum(a,b)).toThrow('only numbers allowed')
    })
});

describe('Testing substract with integers',()=>{
    const testValues = [
        // a, b, expected
        [-2, -4, 2],
        [-2, 4, -6],
        [2, -4, 6],
        [0, 0, 0],
        [0, 3, -3],
        [3, 0, 3],
        [0, -3, 3],
        [-3, 0, -3],
        [123, 200, -77]
  
      ];
  
      test.each(testValues)('substract(%s,%s) = %s', (a,b,expected)=>{
          expect(substract(a,b)).toBe(expected);
      })

})
describe('Testing substract with floats',()=>{
    const testValues = [
        // a, b, expected
        [10, 11.5, -1.5],
        [2.5, 3, -0.5],
        [-2.5, 3, -5.5],
        [3, -2.5, 5.5],
        [-2.5, -2.5, 0],
        [-2.5, 2.5, -5],
        [2.4, -2.5, 4.9]
  
      ];
  
      test.each(testValues)('substract(%s,%s) = %s', (a,b,expected)=>{
          expect(substract(a,b)).toBeCloseTo(expected);
      })

});

describe('Testing parameter is missing with test.each',()=>{
    const testValues=[
        [1],
        ['a'],
        ['']
    ];
    test.each(testValues)('substract(%s) throws "parameter missing"',(a)=>{
        expect(()=>substract(a)).toThrow('Parameter missing')
    });
});

describe('Testing parameters are not numbers in substract',()=>{
    const testValues=[
        ["substract('1','2')",'1','2'],
        ["substract('a',1)",'a', 1],
        ["substract(1,'a')",1, 'a'],
        ["substract('a','b')",'a', 'b'],
        ["substract('','')",'', ''],
    ];
    test.each(testValues)('%s throws "only numbers allowed"',(label,a,b)=>{
        expect(()=>substract(a,b)).toThrow('only numbers allowed')
    });
})

