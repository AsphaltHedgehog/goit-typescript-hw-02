/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});

export { };


// second way

function GetPromise<T extends [string, number]>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as T);
  });
}

GetPromise()
.then((data) => {
  console.log(data);
});

export {};