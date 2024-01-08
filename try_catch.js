function divide(a,b)
{
    if(b===0)
        {
            throw new Error("Number can not divide by zero");
        }

        return a/b;
}

try{
    console.log(divide(12,2));
    console.log(divide(12,0));
   
}catch(err)
{
    console.error("Caught an error", err.message);
}