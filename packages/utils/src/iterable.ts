export function* map<T, R>(iterable: Iterable<T>, transform: (t: T) => R) {
  for (const item of iterable) {
    yield transform(item);
  }
}
