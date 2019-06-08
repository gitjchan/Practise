// Example Array
const originalArray = ['a', 'b', 'c', 1, 2, 3];

// SHIFT METHOD
    // NOTE: The shift() method returns the zeroth index of an Array, thus shifting the index of the consecutive indexes down
    // NOTE: It will return the removed value
    // NOTE: This method changes the length of the original Array in which we executed the shift() method on

    console.log(originalArray.shift());
    
// POP METHOD
    // NOTE: The shift() method returns the last index of an Array, thus popping off the last value off an Array
    // NOTE: It will return the removed value
    // NOTE: This method changes the length of the original Array in which we executed the pop() method on

    console.log(originalArray.pop());

// PUSH METHOD
    // NOTE: The push() method will add new value(s) to the end of an existing Array
    // NOTE: It will return the Array length
    
    console.log(originalArray.pop('x', 'y', 'z')); 