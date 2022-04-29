const findTheOldest = function(people) {
    return people.reduce((a,b) => {
        const oldestAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextAge = getAge(b.yearOfBirth, b.yearOfDeath);
        console.log(oldestAge, nextAge);
        return oldestAge < nextAge ? b : a;
    });
};

const getAge = function (birth, death){
    if(!death){
    death = new Date().getFullYear();
    }
    return death - birth;
};

  
  module.exports = findTheOldest;

// Do not edit below this line
module.exports = findTheOldest;
