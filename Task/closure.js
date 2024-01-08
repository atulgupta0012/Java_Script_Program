// function outer()
// {
//     let v1=87;


//     function  inner()
//     {
//         let result=v1;

//         console.log("The value is:"+result)

         

//     }
//     inner();

   
// }

// outer();


function m1()
{
    console.log("Hi !! I am outer function")

    let x=67;

    function m2()
    {
        console.log("I  am Inner function");

        let y=x;
        console.log(y);
    }

    m1();
}

m2();