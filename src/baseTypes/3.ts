let some:unknown;
some = 'Text';


let str: string;

// first way
function name(some:unknown) {
  if (typeof some === 'string' ) {
  str = some;
  }
  return;
}

export {};