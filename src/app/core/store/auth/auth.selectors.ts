import { RootState } from '../root.state';
import { createSelector } from '@ngrx/store';

export const selectUser = createSelector(
  (state: RootState) => state.auth.user,
  (user) => user
);

export const selectAuthProcessing = createSelector(
  (state: RootState) => state.auth.authProcessing,
  (authProcessing) => authProcessing
);

export const selectIsAuthenticated = createSelector(
  (state: RootState) => state.auth.isAuthenticated,
  (isAuthenticated) => isAuthenticated
);

export const selectAuthState = createSelector(
  (state: RootState) => state.auth,
  (authState) => authState
);
