/*
1. Please create a constructor function called PersonDetails that will 
take the following parameters:
firstName, lastName, email
store the values of the arguments to the constructor properties.
2. Create a getter and setter for each properties including a display method that
will display the person details
3. Create an instance called person1 from a constructor function
4. Call a display method (Only)
*/

function PersonDetails(firstName, lastName, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email

  this.getFirstName = () => {
    return this.firstName
  }
  this.getLastName = () => {
    return this.lastName
  }
  this.getEmail = () => {
    return this.email
  }

  this.setFirstName = (newFirstName) => {
    this.firstName = newFirstName
  }
  this.setLastName = (newLastName) => {
    this.lastName = newLastName
  }
  this.setEmail = (newEmail) => {
    this.email = newEmail
  }

  this.display = () => {
    console.table(this);
  }
}



const personData = new PersonDetails('john', 'vuli-gate', 'john@gate.com');
personData.display()

console.log(personData.getFirstName());

personData.setEmail('joe@gmail.com')

personData.display()