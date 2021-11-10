import { RootState } from '../root.state';
import { createSelector } from '@ngrx/store';

export const selectUser = createSelector(
  (state: RootState) => state.auth.user,
  (user) => {
    return user;
  }
);

export const selectIsAuthenticated = createSelector(
  (state: RootState) => state.auth.isAuthenticated,
  (isAuthenticated) => {
    return isAuthenticated;
  }
);
