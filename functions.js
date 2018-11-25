/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
    if (name === undefined || name === '')
    {
        console.log("Hello");
    }
    else
    {
        console.log(`Hello ${name}`);
    }
  
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
    if (n %2 === 0)
    {
        return false;
    }
    else if (n%2 !== 0)
    {
        return true;
    }
  
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
    return Math.floor(n / 2);
  // Your code here
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
    if (n % 2 !== 0) {
        return n * n;
    } else if (n % 2 === 0) {
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
    let today = new Date();
   // today.setFullYear = today.getFullYear();
    //today.setMonth = today.getMonth();
   // today.setDate = today.getDate();

    let civilYear;

    if (civilID[0] === '1')
        civilYear = 1800;
    if (civilID[0] === '2')
        civilYear = 1900;
    if (civilID[0] === '3')
        civilYear === 2000;

    civilYear += parseInt(civilID[1]) * 10 + parseInt(civilID[2]);
    let civilMonth = parseInt(civilID[3]) * 10 + parseInt(civilID[4]);
    let civilDate = parseInt(civilID[5]) * 10 + parseInt(civilID[6]);

  //  console.log(civilYear);
    //console.log(civilMonth);
    //console.log(civilDate);
    let bday = new Date();
    bday.setFullYear = civilYear;
    bday.setMonth = civilMonth;
    bday.setdate = civilDate;
    //console.log(today-bday)
  // Your code here
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
  // Your code here
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromCivilID,
  canVoteInKuwait
};