/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  let message = "Hello";
  if (name) {
    message += ` ${name}`;
  }

  console.log(message);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  return !!(n % 2);
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  if (isOdd(n)) {
    n--;
  }

  return n / 2;
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}

/**
 * ageFromCivilID(civilID):
 * - receives a civilID as a STRING of the form <CYYMMDDXXXXX>
 *   where:
 *     - C is the century (1 = 18xx, 2 = 19xx, 3 = 20xx)
 *     - YY is the year (00 - 99)
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age of the civilID holder (rounded down to the nearest year)
 * - assume all civilIDs will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromCivilID(287050612345) -> 31
 *    ageFromCivilID(297111012345) -> 20
 */
function ageFromCivilID(civilID) {
  const year = +civilID[0] + 17 + civilID[1] + civilID[2];
  const month = civilID[3] + civilID[4];
  const day = civilID[5] + civilID[6];

  const today = new Date();
  const dob = new Date(year, month, day);

  let age = today.getFullYear() - dob.getFullYear();

  if (
    dob.getMonth() > today.getMonth() ||
    (dob.getMonth() === today.getMonth() && dob.getDate() > today.getDate())
  ) {
    age--;
  }

  return age;
}

/**
 * canVoteInKuwait(civilID, isKuwaiti, isRoyal):
 * - receives a civilID as a STRING
 * - receives a boolean isKuwaiti
 * - receives a boolean isRoyal
 * - returns true if the person can vote, false otherwise:
 *   In Kuwait the conditions for voting are as follows:
 *    - Over 21
 *    - Is a Kuwaiti citizen
 *    - Is NOT a member of the royal family
 */
function canVoteInKuwait(civilID, isKuwaiti, isRoyal) {
  return ageFromCivilID(civilID) > 20 && isKuwaiti && !isRoyal;
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromCivilID,
  canVoteInKuwait
};
