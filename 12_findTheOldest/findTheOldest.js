const findTheOldest = function (people) {
  return people.reduce((personOne, personTwo) => {
    let firstPerson = getAge(personOne.yearOfBirth, personOne.yearOfDeath);
    let secondPerson = getAge(personTwo.yearOfBirth, personTwo.yearOfDeath);

    return firstPerson > secondPerson ? personOne: personTwo;
  });
};

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
