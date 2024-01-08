const users=[{firstname:"Amit", lastname:"singh", age:24},
{firstname:"Shivam", lastname:"Yadav", age:29},
{firstname:"Shekhar", lastname:"Sharma", age:28}
];

const output=users.map((x)=>x.firstname + " "+ x.lastname  
);
console.log(output);



const output1=users.reduce(function(acc,curr)
{
    if(acc[curr.age])
    {
        acc[curr.age]=++acc[curr.age]
    }

    

    else{

        acc[curr.age]=1;
    }

    return acc;
},{});


console.log(output1);