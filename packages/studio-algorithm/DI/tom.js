var tom = function(person,animal) {
  return function() {
    animal.say();
    person.say();
    console.log('i am tom');
  }
}

module.exports = tom;
