import { isUndefined } from './is-undefined';

export const isNil = <T extends unknown>(value: T): boolean =>
  isUndefined(value) || value === null;
