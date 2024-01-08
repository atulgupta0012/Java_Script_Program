function* generate()
{
    let result=yield "2+2=?";
}

let generator=generate();
let question=generator.next().value;

try{
    generator.throw(new Error("The answer is not found in my database"));
}catch(e)
{
    console.log(e);
}