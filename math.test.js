const {add, subtract, multiply, divide} = require('./math');

test('add 2 + 3 to equal 5',()=>{ //description - what we are testing
    expect(add(2,3)).toBe(5);//actual logic of the test
});


test('subtract 3 - 2 to equal 1',()=>{
    expect(subtract(3,2)).toBe(1);
});

test('multiply 5 and 3 to equal 15',()=>{
    expect(multiply(5,3)).toBe(15);
});

test('divide 8 and 4 to equal 2',()=>{
    expect(divide(8,4)).toBe(2);
});