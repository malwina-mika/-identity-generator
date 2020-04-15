const fs = require('fs');


const genders = ['M', 'F'];

const maleNames = [
  'Adam', 'Wojtek', 'Michał', 'Filip', 'Kamil', 'Przemek'
];

const femaleNames = [
  'Kasia', 'Ania', 'Zosia', 'Marta', 'Paulina', 'Zuzia'
];

const lastNames = [
  'Nowak', 'Kowalski', 'Kwiatkowski', 'Zbroński', 'Pawlik', 'Kochanowski'
];

const people = [];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

for (let i = 0; i <= 20; i++) {
  let person = {};
  person.gender = randChoice(genders)

  if (person.gender === 'M') {
    person.name = randChoice(femaleNames)
  } else if (person.gender === 'F') {
    person.name = randChoice(maleNames)
  }

  person.lastName = randChoice(lastNames)
  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  people.push(person)
};


let poepleJson = JSON.stringify(people);

fs.writeFile('people.json', poepleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});