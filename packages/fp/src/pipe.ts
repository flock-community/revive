export function pipe<F>(f: F): F;

export function pipe<F1, R>(value: F1, f1: (x1: F1) => R): R;

export function pipe<F1, F2, R>(value: F1, f1: (x1: F1) => F2, f2: (x2: F2) => R): R;

export function pipe<F1, F2, F3, R>(
  value: F1,
  f1: (x1: F1) => F2,
  f2: (x2: F2) => F3,
  f3: (x2: F3) => R,
): R;

export function pipe<F1, F2, F3, F4, R>(
  value: F1,
  f1: (x1: F1) => F2,
  f2: (x2: F2) => F3,
  f3: (x2: F3) => F4,
  f4: (x2: F4) => R,
): R;

export function pipe<F1, F2, F3, F4, F5, R>(
  value: F1,
  f1: (x1: F1) => F2,
  f2: (x2: F2) => F3,
  f3: (x2: F3) => F4,
  f4: (x2: F4) => F5,
  f5: (x2: F5) => R,
): R;

export function pipe<F1, F2, F3, F4, F5, F6, R>(
  value: F1,
  f1: (x1: F1) => F2,
  f2: (x2: F2) => F3,
  f3: (x2: F3) => F4,
  f4: (x2: F4) => F5,
  f5: (x2: F5) => F6,
  f6: (x2: F6) => R,
): R;

export function pipe(value: any, ...fns: ((...args: any[]) => any)[]) {
  return fns.reduce((currentValue, fn) => fn(currentValue), value);
}
