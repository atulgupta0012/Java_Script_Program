function outerFunction()
{
    let outerVariable='I am outer variable';

    let x=90;


    function innerFunction()
    {
        console.log(outerVariable,x);
    }

    return innerFunction;

}

let closure=outerFunction();
closure();
 