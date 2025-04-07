const { reverse } = require("dns")
const reverseString = require('./stringUtils');

test("",()=>{
    expect(reverseString("cat")).toBe("tac");
});