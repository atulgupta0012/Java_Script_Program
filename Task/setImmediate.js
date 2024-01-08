//  setImmediate():-  This method is used to execute the code at the end of the cuurent event loop cycle.
// Any function is passed as the setImmedaiet()  argument is a calback that can be executed in the next iteration of event loop

// Synatax:-  setImmediate(callback, args)

///callback: This parameter holds the function to call at the end of this turn of the Node.js Event Loop.

//args: This parameter holds the optional arguments for the function.

setImmediate(function () { 
    console.log('setImmediate() function running'); 
})

console.log("This is setTimeimmediate() method")

