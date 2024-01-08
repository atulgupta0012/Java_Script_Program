// function  greeting(message)
// {
//     console.log(`${message} ${this.name}`)
// }
// const person={name:"Shivam"};


// greeting.call(person,'Hii');
// //=============================

// function  greeting(language, years)
//  {
//     console.log(`I am ${this.name} and I have coding in ${language} total ${years} years.`);
//  }

//  const programmer={name:'Amit'};
//  greeting.apply(programmer,['Java', 7]);


//bind

function greet(message)
{
    console.log(`${message},${this.name}`)
}

const greeter={name:'Shivansh'};
const greetHello=greet.bind(greeter,'Hello');

greetHello();
