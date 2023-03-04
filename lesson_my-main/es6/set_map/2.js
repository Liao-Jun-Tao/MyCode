const people = new Set(); // 实例化了Set
people.add('Wes');
people.add('世龙');
people.add('赖经涛');
people.add('赖经涛');
// console.log(people, people.size);

for (let person of people) {
  console.log(person);
}

const students = new Set(['Wes','Ksra','Tony']);
const dogs = ['Sniky','Sunny'];
