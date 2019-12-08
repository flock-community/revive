import { Deferred } from './promise';

export class Subject<T> implements AsyncIterable<T>, AsyncIterator<T> {
  private listeners: Deferred<T>[] = [];

  async next() {
    const deferred = new Deferred<T>();
    this.listeners.push(deferred);
    return {
      value: await deferred.promise,
      done: false,
    };
  }

  add(value: T) {
    for (const listener of this.listeners) listener.resolve(value);
    this.listeners = [];
  }

  [Symbol.asyncIterator]() {
    return this;
  }
}

export async function fold<T, R>(
  iterable: AsyncIterable<T>,
  seed: R,
  operation: (accumulator: R, current: T) => R,
) {
  let accumulator = seed;
  for await (const current of iterable) accumulator = operation(accumulator, current);
  return accumulator;
}

export async function* scan<T, R>(
  iterable: AsyncIterable<T>,
  seed: R,
  operation: (accumulator: R, current: T) => R,
) {
  let accumulator = seed;
  for await (const current of iterable) yield (accumulator = operation(accumulator, current));
}
