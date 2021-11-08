import { UserWithCredentials } from '../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { SignIn, SignInSuccess } from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: UserWithCredentials | null;
  errorMessage: string | null;
  authProcessing: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
  authProcessing: false,
};

const authReducerInternal = createReducer(
  initialState,
  on(SignIn, (state) => {
    return { ...state, authProcessing: true };
  }),
  on(SignInSuccess, (state, { user }) => {
    return { ...state, user, isAuthenticated: true, authProcessing: false };
  })
);

export function authReducer(state, action) {
  return authReducerInternal(state, action);
}
// on(authActions.SignIn, null, null, (state) => {
//   return { ...state, authProcessing: true };
// }),
