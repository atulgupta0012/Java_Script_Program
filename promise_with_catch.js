let count =new Promise(function(resolve, reject)
{
    reject("Promise is rejected...");
}


);

// executes when promise is resolved successfully

count.then(
    function successValue(result)
    {
        console.log(result);
    },
)

.catch(
    function errorValue(result)
    {
console.log(result);
    }
);