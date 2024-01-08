let user = {
    name: "John",
    age: 30
  };
  
 
  for (let value of Object.values(user)) {
    console.log(value); 
  }

  for (let value of Object.keys(user)) {
    console.log(value); 
  }

  for (let value of Object.entries(user)) {
    console.log(value); 
  }