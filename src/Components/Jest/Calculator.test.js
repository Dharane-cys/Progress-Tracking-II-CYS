import {add,sub} from  './Calculator';
test ('Adds two num',()=>{
    expect(add(3,5)).toBe(8);
    expect(add(2,1)).toBe(3);
    expect(add(3,6)).toBe(9);
})
test ('subtrats two num',()=>{
    expect(sub(3,2)).toBe(1);
    expect(sub(5,3)).toBe(2);
    expect(sub(7,1)).toBe(6);
})