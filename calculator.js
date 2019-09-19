const millisecInYear = 1000 * 60 * 60 * 24 * 365.25;
const millisecInDay = 1000 * 60 * 60 * 24;

// Helpers
const millisecToYear = mill => mill / millisecInYear; // Convert milliseconds to years
const yearToMillisec = year => year * millisecInYear; // Convert years to milliseconds
const millisecToDay = mill => mill / millisecInDay; // Convert milliseconds to days

const ageDifference = (dt2, dt1) => dt2.getTime() - dt1.getTime();

const calcTotalAge = birthdays => {
  // find the combined total age of a group in milliseconds
  const today = new Date();
  return birthdays.reduce((acc, birthday) => {
    return acc + ageDifference(today, new Date(birthday));
  }, 0);
};

const calculateBirthday = (birthdays, targetAge) => {
  // find the date that a specified age will occur on
  const groupAge = calcTotalAge(birthdays);
  const numOfPeople = birthdays.length;
  const timeRemaining = (yearToMillisec(targetAge) - groupAge) / numOfPeople;
  return new Date(Date.now() + timeRemaining);
};

const calculateBirthdays = (birthdays, numToShow = 10) => {
  // Show the dates of future group birthdays stopping at a specified limit
};

const filterImportantBirthday = () => {
  // show dates of only upcoming important birthdays (e.g. every 10 years)
};

const birthdaysInDateWindow = () => {
  // Show the group birthdays in a specifed date window
};

const withinGroupBirthdayFinder = () => {
  // find shared birthdays in a date window by attempting to search within a smaller number of the group
  // e.g. There are no shared birthdays for hte whole group next week
  // But if instead we only look for a shared birthday between Sam, Kira and Ghassan then there is a shared birthday
};

const printBirthdays = (birthdays, groupName) => {
  const currTotalAge = millisecToYear(calcTotalAge(birthdays));
  const nextBirthday = Math.ceil(currTotalAge);
  console.log(`${groupName} total age: ${currTotalAge}`);
  console.log(
    `${groupName} next birthday they will be ${nextBirthday} on: ${calculateBirthday(
      birthdays,
      nextBirthday
    )}`
  );
  console.log(
    `${nextBirthday + 1} = ${calculateBirthday(birthdays, nextBirthday + 1)}`
  );
  console.log(
    `${nextBirthday + 2} = ${calculateBirthday(birthdays, nextBirthday + 2)}`
  );
  console.log(
    `${nextBirthday + 3} = ${calculateBirthday(birthdays, nextBirthday + 3)}`
  );
};

// ------------------- Tests --------------------

const harrisFamily = ["1990-09-28", "1988-05-02", "1958-11-08", "1959-05-23"];

printBirthdays(harrisFamily, "Harris Family");
console.log("200th birthday = ", calculateBirthday(harrisFamily, 200));

const samBobby = ["1990-09-28", "1993-09-10"];

printBirthdays(samBobby, "Sam and Bobby");
console.log("60th bday =", calculateBirthday(samBobby, 60));

const samMichael = ["1990-09-28", "1943-05-05"];

printBirthdays(samMichael, "Sam and Michael");

console.log("Sam Michael bday =", calculateBirthday(samMichael, 106));

// FAC 17

const FAC17 = [
  "1990-09-28",
  "1994-06-23",
  "1994-03-09",
  "1991-02-25",
  "1994-03-26",
  "1983-09-18",
  "1992-05-22",
  "1995-08-03",
  "1982-06-06",
  "1986-08-01",
  "1990-01-29",
  "1999-11-11",
  "1991-04-21",
  "1987-11-13",
  "1993-09-17",
  "1992-11-30"
];

printBirthdays(FAC17, "FAC17 birthdays");

console.log("FAC17 460 bday =", calculateBirthday(FAC17, 460));

console.log("FAC17 475 bday =", calculateBirthday(FAC17, 475));
console.log("FAC17 500 bday =", calculateBirthday(FAC17, 500));
