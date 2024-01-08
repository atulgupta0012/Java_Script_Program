const arr=[1,3,5,7,9];

function convertArrayInEven(x)
{
    return x+1;
}




function findOddElement(x)
{
    return x%2;
}

const evenar=arr.map(convertArrayInEven);
console.log(evenar);


const oddelement= arr.filter(findOddElement);
console.log(oddelement); 
