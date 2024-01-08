console.log('start');

// Asynchrpnous opeartoion 

setTimeout( function()
{
    console.log('Timeout callback')
},2000);



// Synchronous operation
for(let i=0;i<=5;i++)
{
    console.log(`Synchronous opeartion is ${i}`)
}

console.log('End');