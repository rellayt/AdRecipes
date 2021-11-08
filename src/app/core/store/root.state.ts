import * as auth from './auth/auth.reducer';

export interface RootState {
  auth: auth.AuthState;
}
