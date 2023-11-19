interface Person {
    firstName: string;
    lastName: string;
  }
   
  function anothergreeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
let username = { firstName: "Revy", lastName: "User" };
   
document.body.textContent = anothergreeter(username);