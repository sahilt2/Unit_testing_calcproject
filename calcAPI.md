# Calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed as parameters a and b.

Returns the sum of given numbers.
If parameter is missing, throws an exception `'Parameter missing'`.
If parameters are not numbers. throws an exception `'only numbers allowed'`.

### Test cases

#### sum with integers

sum(1,1) returns 2
sum(2,3) returns 5

a, b, result
[-2, -4, -6],
[-2, 4, 2],
[2, -4, -2],
[0, 0, 0],
[0, 3, 3],
[3, 0, 3],
[0, -3, -3],
[-3, 0, -3],
[123, 200, 323]

#### sum with floats

a, b, result
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-2.5, -2.5, -5.0],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### parameter is missing

- sum() throws an exception `'Parameter missing'`
- sum(1) throws an exception `'Parameter missing'`
- sum('') throws an exception `'Parameter missing'`
- sum('1') throws an exception `'Parameter missing'`

#### parameters are not numbers

- sum('1','2') throws an exception `'only numbers allowed'`
- sum('a',1) throws an exception `'only numbers allowed'`
- sum(1,'a') throws an exception `'only numbers allowed'`
- sum('a','b') throws an exception `'only numbers allowed'`
- sum('','') throws an exception `'only numbers allowed'`

## **substract(a,b)**

Function returns the difference a-b of two numbers. Numbers are passed to the function as parameters a and b.

Returns the difference a-b of given numbers.
If parameter is missing, throws an exception `'Parameter missing'`.
If parameters are not numbers. throws an exception `'only numbers allowed'`.

### substract with integers

        [-2, -4, 2],
        [-2, 4, -6],
        [2, -4, 6],
        [0, 0, 0],
        [0, 3, -3],
        [3, 0, 3],
        [0, -3, 3],
        [-3, 0, -3],
        [123, 200, -77]

### substract with floats

        [10, 11.5, -1.5],
        [2.5, 3, -0.5],
        [-2.5, 3, -5.5],
        [3, -2.5, 5.5],
        [-2.5, -2.5, 0],
        [-2.5, 2.5, -5],
        [2.4, -2.5, 4.9]

#### parameter is missing

- substract() throws an exception `'Parameter missing'`
- substract(1) throws an exception `'Parameter missing'`
- substract('') throws an exception `'Parameter missing'`
- substract('1') throws an exception `'Parameter missing'`

#### parameters are not numbers

- substract('1','2') throws an exception `'only numbers allowed'`
- substract('a',1) throws an exception `'only numbers allowed'`
- substract(1,'a') throws an exception `'only numbers allowed'`
- substract('a','b') throws an exception `'only numbers allowed'`
- substract('','') throws an exception `'only numbers allowed'`
