import { RootState } from '../root.state';
import { createSelector } from '@ngrx/store';

export const selectUser = (state: RootState) => state.auth.user;

export const selectUserWithCredentials = createSelector(selectUser, (user) => {
  return user;
});

export const selectIsAuthenticated = createSelector(
  (state: RootState) => state.auth.isAuthenticated,
  (isAuthenticated) => {
    return isAuthenticated;
  }
);
