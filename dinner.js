const _ = require('lodash');
const sillyname = require('sillyname');

const originalNames = [
  'Will',
  'Lexi',
  'MezBeth',
  'Maggie',
  'Amy',
  'Andrew',
  'Jesse',
  'Walt',
  'Grady',
  'Pryor',
  'Alice',
  'Dennis',
  'Ian',
  'Adam',
  'Ross',
  'Jessi',
  'Lauren',
];


const nextTo = (names, name1, name2, notArg) => {
  const not = !!notArg;
  for (let i = 0; i < names.length - 1; i += 1) {
    if ((names[i] === name1 && names[i + 1] === name2) ||
        (names[i] === name2 && names[i + 1] === name1)) {
      return !not;
    }
  }
  if ((names[0] === name1 && names[names.length - 1] === name2) ||
      (names[0] === name2 && names[names.length + 1] === name1)) {
    return !not;
  }
  return not;
};

const validateTable = names => nextTo(names, 'Lauren', 'Andrew') && nextTo(names, 'Lexi', 'Will')
    && nextTo(names, 'Jessi', 'Ross') && nextTo(names, 'Grady', 'Pryor', true)
    && nextTo(names, 'Grady', 'Alice', true) && nextTo(names, 'Pryor', 'Alice', true);

let nameTable = _.shuffle(originalNames);

while (!validateTable(nameTable)) {
  nameTable = _.shuffle(originalNames);
}

const strWidth = nameTable.reduce((max, name) => Math.max(max, name.length), 0) + 1;

const shortTable = () => {
  console.log(_.pad(`Table ${sillyname()}`, (strWidth * 2) + 6));
  console.log(`${_.padStart(nameTable[0], strWidth + 3)} ${nameTable[1]}`);
  console.log(`${_.padStart(nameTable[16], strWidth)} ╔╦╦╦╗ ${nameTable[2]}`);
  console.log(`${_.padStart(nameTable[15], strWidth)} ╠╬╬╬╣ ${nameTable[3]}`);
  console.log(`${_.padStart(nameTable[14], strWidth)} ╠╬╬╬╣ ${nameTable[4]}`);
  console.log(`${_.padStart(nameTable[13], strWidth)} ╠╬╬╬╣ ${nameTable[5]}`);
  console.log(`${_.padStart(nameTable[12], strWidth)} ╠╬╬╬╣ ${nameTable[6]}`);
  console.log(`${_.padStart(nameTable[11], strWidth)} ╠╬╬╬╣ ${nameTable[7]}`);
  console.log(`${_.padStart(nameTable[10], strWidth)} ╚╩╩╩╝`);
  console.log(`${_.padStart(nameTable[9], strWidth + 3)} ${nameTable[8]}`);
  console.log('');
};

const longTable = () => {
  console.log(_.pad(`Table ${sillyname()}`, (strWidth * 2) + 6));
  console.log(`${_.padStart(nameTable[0], strWidth + 3)} ${nameTable[1]}`);
  console.log(`${_.padStart(nameTable[16], strWidth)} ╔╦╦╦╗`);
  console.log(`${_.padStart('', strWidth)} ╠╬╬╬╣ ${nameTable[2]}`);
  console.log(`${_.padStart(nameTable[15], strWidth)} ╠╬╬╬╣`);
  console.log(`${_.padStart('', strWidth)} ╠╬╬╬╣ ${nameTable[3]}`);
  console.log(`${_.padStart(nameTable[14], strWidth)} ╠╬╬╬╣`);
  console.log(`${_.padStart('', strWidth)} ╠╬╬╬╣ ${nameTable[4]}`);
  console.log(`${_.padStart(nameTable[13], strWidth)} ╠╬╬╬╣`);
  console.log(`${_.padStart('', strWidth)} ╠╬╬╬╣ ${nameTable[5]}`);
  console.log(`${_.padStart(nameTable[12], strWidth)} ╠╬╬╬╣`);
  console.log(`${_.padStart('', strWidth)} ╠╬╬╬╣ ${nameTable[6]}`);
  console.log(`${_.padStart(nameTable[11], strWidth)} ╠╬╬╬╣`);
  console.log(`${_.padStart('', strWidth)} ╠╬╬╬╣ ${nameTable[7]}`);
  console.log(`${_.padStart(nameTable[10], strWidth)} ╚╩╩╩╝`);
  console.log(`${_.padStart(nameTable[9], strWidth + 3)} ${nameTable[8]}`);
  console.log('');
};

if (_.isInteger(_.toInteger(process.argv[2]))) {
  for (let i = 0; i < _.toInteger(process.argv[2]); i += 1) {
    longTable();
  }
} else if (process.argv[2]) {
  shortTable();
} else {
  longTable();
}
