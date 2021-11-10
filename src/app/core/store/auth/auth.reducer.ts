import { User, UserWithCredentials } from '../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import {
  Register,
  RegisterFailure,
  RegisterSuccess,
  SignIn,
  SignInFailure,
  SignInSuccess,
  TokenValidationSuccess,
  TokenValidation,
  Logout,
} from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: UserWithCredentials | User | null;
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
  on(SignIn, Register, (state) => {
    return { ...state, authProcessing: true };
  }),
  on(SignInSuccess, RegisterSuccess, (state, { user }) => {
    return { ...state, user, isAuthenticated: true, authProcessing: false };
  }),
  on(SignInFailure, RegisterFailure, (state, { error }) => {
    return {
      ...state,
      errorMessage: error,
      isAuthenticated: false,
      authProcessing: false,
    };
  }),
  on(TokenValidation, Register, (state) => {
    return { ...state, authProcessing: true };
  }),
  on(TokenValidationSuccess, (state, { user }) => {
    return { ...state, user, isAuthenticated: true, authProcessing: false };
  }),
  on(Logout, () => initialState)
);

export function authReducer(state, action) {
  return authReducerInternal(state, action);
}
// on(authActions.SignIn, null, null, (state) => {
//   return { ...state, authProcessing: true };
// }),
