// The spread operator is not only used to separate an iterator into its own individual items (Example 1)
// It can be used to condense values into a single array to be passed into a function (Example 2)


// Example 1 - Spreading into individual items
    // const word = 'Jason';
    // function spreadWord(word) {
    //     return [...word].map(letter => {
    //         return letter;
    //     })
    // };

    // console.log(spreadWord(word));

    // Example 2 - Rest param, packing remaining items into a single bundle
    // function addUp(id, position, ...total) {
    //     return total.map(subTotal => {
    //         return subTotal * 10;
    //     })
    // };

    // console.log(addUp(1, 2, 3, 4, 5, 6));