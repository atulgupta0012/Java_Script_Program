function performOperation(a,b,c,callback)
{
    console.log(`Performing opeartion on ${a} and ${b}`)

    const result=callback(a,b,c);

    console.log(`Result: ${result}`)
}

// function for adding number

function  add(x,y,z)
{
    return x+y+z;
}


function multiply(x,y,z)
{
    return x*y*z;
}

performOperation(5,3,5,add);
performOperation(4,5,2,multiply);

