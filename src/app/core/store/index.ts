import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export const appReducer = {
  auth: authReducer,
};

export const appEffects = [AuthEffects];
