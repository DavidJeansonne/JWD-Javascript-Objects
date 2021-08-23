// Describe the JavaScript ES6 object syntax.
//----------------------------------------------------------------------------------
/* An object is a collection of properties, and a property is an association between a name (or key) and a value. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects. */

// Store data and functions inside JavaScript objects.
//----------------------------------------------------------------------------------
// Object definition - Object literal
const iHeartJWD = {
  // Object Properties
  ourClassName: "JWD Cohort 1",
  cohortNumber: 1,
  numberOfLearners: 28,
  numberOfTAs: 1,
  numberOfInstructors: 1,
  taName: "David",
  instructorName: "Chavela",
  // Object Method - Function definitions
  introduction: function() {
    console.log(iHeartJWD.ourClassName + " has " + iHeartJWD.numberOfLearners + " learners from around the world! Our instructor " + iHeartJWD.instructorName + " and our TA " + iHeartJWD.taName + " enjoy teaching cohort #" + iHeartJWD.cohortNumber);
    }
};

// Accessing Object Properties
//  objectName["propertyName"]
//  objectName.propertyName

// Accessing Object Methods
iHeartJWD.introduction();
console.log('');

// Use the this keyword.
//----------------------------------------------------------------------------------
/* Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object, this will refer to the global object (window in a browser, global in Node.js). */

//console.log(this.ourClassName + " has " + this.numberOfLearners + " learners from around the world! Our instructor " + this.instructorName + " and our TA " + this.taName + " enjoy teaching cohort #" + this.cohortNumber);

// Convey privacy in JavaScript methods.
//----------------------------------------------------------------------------------


// Define getters and setters in objects
//----------------------------------------------------------------------------------
/* JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect. */
// Object definition - Object literal
const myTruck = {
  // Object Properties
  _name: 'Chevy Silverado',
  //getters
  get name(){
    return this._name
  },
  //setters 
  set name(newName){
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
    } else {
      console.log("ERROR: name must be a non-empty string"); 
    }
  }
}

myTruck._name ="Old Faithful";
console.log(myTruck);

console.log('');

// Create factory functions.
//----------------------------------------------------------------------------------
/* A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object. */
const snackFactory = (name, cost, type) => {
  return {
    name: name,
    cost: cost,
    type: type
  };
};

console.log(snackFactory('Dorito', 3, 'Chips'));

console.log('');


// Use destructuring techniques.
//----------------------------------------------------------------------------------
/* The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values. */
const {numberOfLearners, numberOfTAs, numberOfInstructors} = iHeartJWD;
console.log(numberOfLearners); // 28
console.log(numberOfTAs); // 1
console.log(numberOfInstructors); // 1


console.log('');


// Create classes in JavaScript.
//----------------------------------------------------------------------------------
/* JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have. */
class Book {
  // Class Constructor
  constructor() {
    // Properties
    this.title;
    this.author;
  }
  //Class Methods
  read() {
    console.log('Time to read ' + this.title + '!');
  }
}
 
const myBook = new Book();
myBook.title = 'Harry Potter'
myBook.read();

console.log('');

