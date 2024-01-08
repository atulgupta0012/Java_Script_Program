// Timer modules ttpe:- setTimeout(), setImmediate(), setInterval()

//setTimeout()  Method:-  The setTimeout method is used to execute the code after a specified milisecond

// Syntax:- setTimeout(callback, delay, args )

// callback:- This is basically used to hold the function  that to be executed

// delay:-  This parameter is used to holds the number of millisecond to wait before calling the callback function

//  This parameters holds the optional parameter


let s1="Welcome To Appventurez";

setTimeout(()=>{
    return console.log(s1)
},4000)

console.log("Executing setTimeOut() method")

