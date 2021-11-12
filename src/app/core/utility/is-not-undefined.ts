import { isUndefined } from './is-undefined';

export const isNotUndefined = <T extends unknown>(value: T): boolean =>
  !isUndefined(value);
