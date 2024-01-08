
// this is getter


let user={
    Firstname: "Atul",
    Lastname: "Gupta",


    get fullName()
    {
           return `${this.Firstname} ${this.Lastname}`
    }
};

console.log(user.fullName);