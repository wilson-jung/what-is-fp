const arr = [1, 2, 3, 4];

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const n of iter) {
    acc = f(acc, n);
  }
  return acc;
};
const pipe =
  (...fs) =>
  (a) => {
    
    return go(a, ...fs);
  }
    
const go = (...args) => reduce((a, f) => f(a), args);
const f = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0));
