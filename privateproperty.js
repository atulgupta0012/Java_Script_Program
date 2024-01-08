// We can use  private property with # symobol

function MyClass()
{
    let private="I am private property";

    this.getPrivatePropert=function() {
        return private;
    };
}

let object=new MyClass();
console.log(object.private);  // It is not accessible outside

console.log(object.getPrivatePropert());  // here output is i am private
