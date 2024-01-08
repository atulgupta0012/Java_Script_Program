// write a program to print the number 4 3 2 1

function countNumber(number)
{
    console.log(number);

    const newnumber=number-1;
    if(newnumber>0)

    {
        countNumber(newnumber);
    }
}

  countNumber(4);


