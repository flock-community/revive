export function orEmpty<T>(array: T[] | undefined | null): T[] {
  return array == null ? [] : array;
}