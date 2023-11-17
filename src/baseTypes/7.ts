/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday
};

enum Weekend {
  Saturday,
  Sunday
};

type Day =  Weekday | Weekend;


function isWeekend(targetDay: Day): boolean {
  switch (targetDay) {
    case Weekend.Saturday:
    case Weekend.Sunday:
      return true;
    default:
      return false
  }
};
