const users = [
  {name: "Alex", age: 31},
  {name: "Olga", age: 17},
  {name: "Carl", age: 15},
  {name: "Nancy", age: 28},
  {name: "Eric", age: 9},
];

const childUsers = [];

for (let year of users) {
 if (year.age < 18) {
 childUsers.push(year);
  }
}

console.log(childUsers);