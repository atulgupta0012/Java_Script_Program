function x()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(function()
        {
            console.log(i);
        }, i*3000);
    }
}

x();