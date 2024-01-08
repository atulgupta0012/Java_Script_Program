function* generatorSequence()
{
    yield 1;
    yield 2;
    yield 3;

}

let generator=generateSequence();
let one =generator.next();
console.log(JSON.stringify(one));