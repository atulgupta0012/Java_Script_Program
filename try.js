// try{
//     console.log("Start of try runs");

//     console.log("End of try runs");
// }catch(err)
// {
//     console.log("There is no error in the catch block");
// }


try{
    let x=23/0;
    console.log("Error occouring in try block")
    console.log("This is Arithmetic exception")
}catch(err)
{
    console.log(err.x);
}

finally
{
    console.log("Finally block is executed  wheteher the exception is handled or not");
}
