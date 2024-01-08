// Define a mixin

const  LoggerMixin={
    log(message)
    {
        console.log(message);
    }
};

// use the mixin in a class

class User{
    constructor(name)
    {
        this.name=name;
    }
}


// Mix the loggermixin

Object.assign(User.prototype, LoggerMixin);


const user=new User("John");
user.log("Hello , Mixin");

