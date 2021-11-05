export const firstElement = <T = unknown>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }
  return array[0] as T;
};
