// Dataset
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Tony', 'Blake, William'
];

// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log('Inventors born in the 1500s:', bornIn1500s);

// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log('Full names of inventors:', fullNames);

// 3. Sort the inventors by birthdate, oldest to youngest
const sortedByBirthdate = inventors.sort((a, b) => a.year - b.year);
console.log('Inventors sorted by birthdate:', sortedByBirthdate);

// 4. How many years did all the inventors live combined?
const totalYearsLived = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log('Total years all inventors lived:', totalYearsLived);

// 5. Sort the inventors by years lived
const sortedByYearsLived = inventors.sort((a, b) => {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor - nextInventor;
});
console.log('Inventors sorted by years lived:', sortedByYearsLived);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// This part would require DOM manipulation, so it's commented out unless used in a browser context.
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const deBoulevards = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));
// console.log(deBoulevards);

// 7. Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return aLast.localeCompare(bLast);
});
console.log('People sorted alphabetically by last name:', sortedPeople);

// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportationCount = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log('Transportation count:', transportationCount);

