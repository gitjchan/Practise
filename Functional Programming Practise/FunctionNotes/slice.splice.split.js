
// Example Array
const originalArray = ['a', 'b', 'c', 1, 2, 3];


// SPLICE FUNCTION
// NOTE: This changes the existing the array, it DOES NOT make a copy
// NOTE: It takes what you remove and push it in to a new Array
// NOTE: Removing occurs first, then Adding occurs after
//       Both can be done at the same time when running the function
// Removing
    // Everything from index, and including index 3, onwards will be removed
        console.log(originalArray.splice(3));
    // Value from index 2 will be removed by 1 (you can make this value however many you want to delete)
        console.log(originalArray.splice(2, 1))

// Adding
    // NOTE: Starting from left to right
        // Beginning at index 0, move upto 0. Meaning nothing will be removed
        // 1, 2, 3 will be added beginning at index 0 (the first parameter)
        console.log(originalArray.splice(0, 0, 1, 2, 3));

        // This would mean find index 5, and add 'z'; without removing anything
        console.log(originalArray.splice(5, 0, 'z'));
        
        
        // This would mean find index 5, and add 'z'; removing what exists in index 5 first
        console.log(originalArray.splice(5, 1, 'z'));

// Both Removing and Adding
    // NOTE: This will remove the "1, 2, 3", from the originalArray
    // NOTE: It will replace it with "x, y, z"
    // NOTE: The newArray will now contain the "1, 2, 3"
    originalArray = ['a', 'b', 'c', 1, 2, 3];
    newArray = originalArray.splice(3, 3, 'x', 'y', 'z');
    console.log(originalArray);
    console.log(newArray);

// SPLIT FUNCTION
    // NOTE: Split makes a COPY of what decide to take out of the original array
        // It will put it in a new array
        // Below will begin at INDEX 0 and go 2 indexes, and take this information into the new array
        console.log(originalArray.slice(0, 2));

            
// SPLIT FUNCTION
    const myString = 'a bit of string';
    // NOTE: SPLIT works with strings. 
        // Below you separate by space, and you take the first 3 characters from the string and put it into a Array
        console.log(myString.split(' ', 3));
        // console.log(myString.split('')); // This will split every single character
    