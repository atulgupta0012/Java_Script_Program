// async function  m1()
// {
//     console.log("Hello Guys")
// }

// m1();


const getData= async ()=>
{
    let data="Hello !!!Lets See How we use async function";
    return data;
}

getData().then(data=>console.log(data));